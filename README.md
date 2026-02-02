# Qwen OCR 插件

基于阿里云通义千问视觉模型的 Pot-App 文字识别插件。

## 功能特点

- 支持最新 Qwen 视觉模型（qwen3-vl-plus、qwen2.5-vl 系列）
- 支持 OpenAI 兼容和 DashScope 原生两种 API 格式
- 支持 30+ 种语言文字识别
- 自定义识别提示词，支持 `$lang` 占位符
- 自动图像格式检测（PNG、JPEG、GIF）
- 多区域部署支持
- 思考模式支持（提升复杂场景识别准确性）

## 快速开始

### 1. 获取 API Key
访问 [阿里云百炼平台](https://dashscope.console.aliyun.com/) 获取 API 密钥

### 2. 安装插件
1. 下载 `.potext` 插件文件
2. 在 Pot-App 中导入插件
3. 配置 API Key 和模型

### 3. 配置参数

| 参数 | 说明 | 默认值 |
|------|------|--------|
| **API Key** | 阿里云 DashScope API 密钥 | 必填 |
| **Model** | 模型名称（默认 qwen3-vl-plus） | qwen3-vl-plus |
| **API 格式** | openai（推荐）或 dashscope | openai |
| **Base URL** | API 服务地址（默认 OpenAI 兼容格式） | 自动设置 |
| **自定义提示词** | 自定义识别提示，支持 `$lang` 占位符 | 可选 |
| **思考模式** | 开启模型思考过程（仅支持特定模型） | 关闭 |

### 4. Base URL 说明

**默认地址**（推荐）：
- `https://dashscope.aliyuncs.com/compatible-mode/v1`

**其他可用地址**：
- DashScope 原生格式：`https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation`
- 新加坡区域：`https://dashscope-intl.aliyuncs.com/compatible-mode/v1`
- 弗吉尼亚区域：`https://dashscope-us.aliyuncs.com/compatible-mode/v1`

**注意**：Base URL 不需要包含 `/chat/completions` 路径，插件会自动添加。

### 5. 思考模式说明

**什么是思考模式**：
- 思考模式让模型在给出答案前进行内部推理
- 适用于复杂的文字识别场景，如手写文字、模糊图像等
- 可以提升识别准确性，但会增加响应时间

**支持的模型**：
- `qwen3-vl-plus`
- `qwen3-vl-flash`
- `qwen3-vl-2350-a22b-thinking`

**使用建议**：
- 简单清晰的文字识别：关闭思考模式（默认）
- 复杂场景（手写、模糊、多语言混合）：开启思考模式

## 支持的模型

可以手动输入任何支持的模型名称，推荐使用：

- `qwen3-vl-plus`: 最新版本（默认推荐）
- `qwen2.5-vl-7b-instruct`: 高性能版本
- `qwen2.5-vl-72b-instruct`: 最强性能版本
- `qwen-vl-plus`: 兼容版本
- `qwen-vl-max`: 兼容版本

也可以输入其他阿里云支持的 Qwen 视觉模型名称。

## 支持的语言

支持 30+ 种语言，包括中文、英语、日语、韩语、法语、西班牙语、俄语、德语、意大利语、阿拉伯语等。

## 开发

### 打包插件
```bash
# 将以下文件打包为 zip，然后重命名为 .potext
zip plugin.com.pot-app.qwen-ocr.potext info.json main.js icon.png
```

### 项目结构
```
├── info.json    # 插件配置
├── main.js      # 核心逻辑
└── icon.png     # 插件图标
```

## 许可证

MIT License