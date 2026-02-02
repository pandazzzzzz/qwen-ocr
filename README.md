# Qwen OCR 插件

基于阿里云通义千问视觉模型的 Pot-App 文字识别插件。

## 功能特点

- 支持最新 Qwen 视觉模型（qwen3-vl-plus、qvq-max、qwen3-vl-flash）
- 支持 OpenAI 兼容和 DashScope 原生两种 API 格式
- 支持 30+ 种语言文字识别
- 自定义识别提示词，支持 `$lang` 占位符
- 自动图像格式检测（PNG、JPEG、GIF）
- 多区域部署支持（北京、新加坡、弗吉尼亚）
- 思考模式支持（提升复杂场景识别准确性）
- 视觉推理能力（QVQ 模型）

## 快速开始

### 1. 获取 API Key
访问 [阿里云百炼平台](https://bailian.console.aliyun.com/) 获取 API 密钥

### 2. 安装插件
1. 下载 `.potext` 插件文件
2. 在 Pot-App 中导入插件
3. 配置 API Key 和模型

### 3. 配置参数

| 参数 | 说明 | 默认值 |
|------|------|--------|
| **API Key** | 阿里云 DashScope API 密钥 | 必填 |
| **Model** | 模型名称（推荐 qwen3-vl-plus） | qwen3-vl-plus |
| **API 格式** | openai（推荐）或 dashscope | openai |
| **Base URL** | API 服务地址 | 自动设置 |
| **自定义提示词** | 自定义识别提示，支持 `$lang` 占位符 | 可选 |
| **思考模式** | 开启模型思考过程（仅支持特定模型） | 关闭 |

## 支持的模型

推荐使用以下最新模型（按推荐程度排序）：

### 🚀 最新推荐模型
- **`qwen3-vl-plus`**: 最新旗舰版本，识别精度最高（默认推荐）
- **`qvq-max`**: 视觉推理模型，具备强大的推理能力，适合复杂场景
- **`qwen3-vl-flash`**: 快速版本，响应速度更快

### 📝 使用建议
- **日常文字识别**: `qwen3-vl-plus`（默认）
- **复杂推理场景**: `qvq-max`（需要开启流式输出）
- **快速识别需求**: `qwen3-vl-flash`

*注意：可以手动输入任何阿里云支持的 Qwen 视觉模型名称*

## 多区域部署

### Base URL 配置

| 区域 | Base URL | 说明 |
|------|----------|------|
| **北京**（默认） | `https://dashscope.aliyuncs.com/compatible-mode/v1` | 中国内地用户推荐 |
| **新加坡** | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | 亚太地区用户推荐 |
| **弗吉尼亚** | `https://dashscope-us.aliyuncs.com/compatible-mode/v1` | 美洲地区用户推荐 |

**注意**：不同区域需要使用对应的 API Key

## 思考模式

### 功能说明
- 让模型在识别前进行内部推理分析
- 显著提升复杂场景的识别准确性
- 适用于手写文字、模糊图像、复杂排版等场景

### 支持的模型
- `qwen3-vl-plus` ✅
- `qwen3-vl-flash` ✅  
- `qvq-max` ✅（内置推理能力）

### 使用建议
- **关闭**（默认）：清晰文字、快速识别
- **开启**：手写文字、模糊图像、复杂场景

## 支持的语言

支持 30+ 种语言，包括：
- 中文（简体/繁体）、粤语
- 英语、日语、韩语
- 法语、西班牙语、俄语、德语、意大利语
- 阿拉伯语、印地语、泰语、越南语
- 以及更多语言...

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

## 更新日志

### v1.3.0 (2025-02-02)
- 🚀 支持最新 QVQ 视觉推理模型
- 🧠 新增思考模式，提升复杂场景识别准确性
- 🔧 修正 Base URL 设置，符合官方标准
- ⚡ 支持 qwen3-vl-flash 快速模型
- 🌍 完善多区域部署支持

## 许可证

MIT License