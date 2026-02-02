# Qwen OCR 插件

基于阿里云通义千问视觉模型的 Pot-App 文字识别插件。

## 功能特点

- 支持最新 Qwen 视觉模型（qwen3-vl-plus、qwen2.5-vl 系列）
- 支持 OpenAI 兼容和 DashScope 原生两种 API 格式
- 支持 30+ 种语言文字识别
- 自定义识别提示词，支持 `$lang` 占位符
- 自动图像格式检测（PNG、JPEG、GIF）
- 多区域部署支持

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
| **Model** | 选择模型（推荐 qwen3-vl-plus） | qwen3-vl-plus |
| **API 格式** | openai（推荐）或 dashscope | openai |
| **Base URL** | 自定义 API 地址 | 自动选择 |
| **自定义提示词** | 自定义识别提示，支持 `$lang` 占位符 | 可选 |

## 支持的模型

- `qwen3-vl-plus`: 最新版本（推荐）
- `qwen2.5-vl-7b-instruct`: 高性能版本
- `qwen2.5-vl-72b-instruct`: 最强性能版本
- `qwen-vl-plus`: 兼容版本
- `qwen-vl-max`: 兼容版本

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