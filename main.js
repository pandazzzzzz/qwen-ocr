async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch } = utils;
    let { api_key, base_url, model, custom_prompt, api_format = 'openai' } = config;

    // 验证必需的配置参数
    if (!api_key || api_key.length === 0) {
        throw "API Key not found";
    }
    
    // 根据API格式设置默认URL
    if (!base_url || base_url.length === 0) {
        base_url = api_format === 'openai' 
            ? "https://dashscope.aliyuncs.com/compatible-mode/v1"
            : "https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation";
    }
    
    // 标准化 base_url 格式
    if (!/https?:\/\/.+/.test(base_url)) {
        base_url = `https://${base_url}`;
    }
    if (base_url.endsWith('/')) {
        base_url = base_url.slice(0, -1);
    }
    
    // 构造完整的 API endpoint
    let apiEndpoint;
    if (api_format === 'openai') {
        // OpenAI 兼容格式需要添加 /chat/completions
        apiEndpoint = base_url.endsWith('/chat/completions') 
            ? base_url 
            : `${base_url}/chat/completions`;
    } else {
        // DashScope 原生格式直接使用 base_url
        apiEndpoint = base_url;
    }
    
    // 模型名称映射和默认值
    const modelMapping = {
        'qwen-vl-ocr': 'qwen3-vl-plus',
        'qwen-vl-plus': 'qwen3-vl-plus',
        'qwen-vl-max': 'qwen2.5-vl-72b-instruct'
    };
    
    model = modelMapping[model] || model || 'qwen3-vl-plus';

    // 构造提示词
    let prompt = custom_prompt || "请识别图片中的文字内容，直接返回识别到的文字，不要添加任何解释或格式化。";
    
    // 支持语言参数替换（类似 OpenAI 插件）
    if (custom_prompt && custom_prompt.includes('$lang')) {
        prompt = custom_prompt.replaceAll('$lang', lang);
    } else if (!custom_prompt) {
        // 根据语言调整默认提示词
        const langPrompts = {
            'zh': '请识别图片中的中文文字内容，直接返回识别到的文字。',
            'en': 'Please recognize the English text in the image and return the recognized text directly.',
            'ja': '画像内の日本語テキストを認識し、認識されたテキストを直接返してください。',
            'ko': '이미지의 한국어 텍스트를 인식하고 인식된 텍스트를 직접 반환하세요.',
            'auto': '请识别图片中的文字内容，直接返回识别到的文字，不要添加任何解释或格式化。'
        };
        prompt = langPrompts[lang] || langPrompts['auto'];
    }

    // 检测图像格式
    const detectImageFormat = (base64) => {
        const header = base64.substring(0, 10);
        if (header.startsWith('/9j/')) return 'jpeg';
        if (header.startsWith('iVBOR')) return 'png';
        if (header.startsWith('R0lGO')) return 'gif';
        return 'png'; // 默认
    };

    const imageFormat = detectImageFormat(base64);
    const imageDataUrl = `data:image/${imageFormat};base64,${base64}`;

    // 根据API格式构造请求数据
    let requestData;
    
    if (api_format === 'openai') {
        // OpenAI 兼容格式
        requestData = {
            model: model,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "image_url",
                            image_url: {
                                url: imageDataUrl
                            }
                        },
                        {
                            type: "text",
                            text: prompt
                        }
                    ]
                }
            ]
        };
    } else {
        // DashScope 原生格式
        requestData = {
            model: model,
            input: {
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                image: imageDataUrl
                            },
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            },
            parameters: {
                result_format: "message"
            }
        };
    }

    try {
        const response = await tauriFetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${api_key}`,
                "Content-Type": "application/json"
            },
            body: {
                type: "Json",
                payload: requestData
            }
        });

        if (response.ok) {
            const result = response.data;
            
            // 处理不同API格式的响应
            if (api_format === 'openai') {
                // OpenAI 兼容格式响应
                if (result.choices && result.choices.length > 0) {
                    const content = result.choices[0].message.content;
                    return typeof content === 'string' ? content.trim() : String(content).trim();
                }
            } else {
                // DashScope 原生格式响应
                if (result.output && result.output.choices && result.output.choices.length > 0) {
                    const content = result.output.choices[0].message.content;
                    if (typeof content === 'string') {
                        return content.trim();
                    } else if (Array.isArray(content)) {
                        // 处理数组格式的响应
                        return content.map(item => item.text || '').join('').trim();
                    }
                }
            }
            
            throw `Unexpected response format: ${JSON.stringify(result)}`;
        } else {
            throw `HTTP Error ${response.status}: ${JSON.stringify(response.data)}`;
        }
    } catch (error) {
        if (typeof error === 'string') {
            throw error;
        }
        throw `Request failed: ${error.message || JSON.stringify(error)}`;
    }
}