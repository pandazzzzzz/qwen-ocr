# Qwen OCR 插件

[![English](https://img.shields.io/badge/README-English-blue.svg)](README_EN.md)
[![中文](https://img.shields.io/badge/README-中文-red.svg)](README.md)

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

## 支持的模型

推荐使用以下最新模型（按推荐程度排序）：

### 🚀 最新推荐模型
- **`qwen3-vl-flash`**: 快速版本，响应速度更快（默认推荐）
- **`qwen3-vl-plus`**: 最新旗舰版本，识别精度最高
- **`qvq-max`**: 视觉推理模型，具备强大的推理能力，适合复杂场景

### 📝 使用建议
- **快速识别需求**: `qwen3-vl-flash`（默认）
- **高精度识别**: `qwen3-vl-plus`
- **复杂推理场景**: `qvq-max`（需要开启流式输出）

*注意：可以手动输入任何阿里云支持的 Qwen 视觉模型名称*

## 许可证

MIT License