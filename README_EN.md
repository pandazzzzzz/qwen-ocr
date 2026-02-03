# Qwen OCR Plugin

[![English](https://img.shields.io/badge/README-English-blue.svg)](README_EN.md)
[![中文](https://img.shields.io/badge/README-中文-red.svg)](README.md)

A Pot-App text recognition plugin based on Alibaba Cloud Qwen Vision Models.

## Features

- Support for latest Qwen vision models (qwen3-vl-plus, qvq-max, qwen3-vl-flash)
- Support for both OpenAI-compatible and DashScope native API formats
- Support for 30+ languages text recognition
- Custom recognition prompts with `$lang` placeholder support
- Automatic image format detection (PNG, JPEG, GIF)
- Multi-region deployment support (Beijing, Singapore, Virginia)
- Thinking mode support (improves complex scenario recognition accuracy)
- Visual reasoning capabilities (QVQ model)

## Supported Models

Recommended latest models (sorted by recommendation):

### 🚀 Latest Recommended Models
- **`qwen3-vl-flash`**: Fast version with quicker response times (default)
- **`qwen3-vl-plus`**: Latest flagship version with highest recognition accuracy
- **`qvq-max`**: Visual reasoning model with powerful reasoning capabilities for complex scenarios

### 📝 Usage Recommendations
- **Fast recognition needs**: `qwen3-vl-flash` (default)
- **High accuracy recognition**: `qwen3-vl-plus`
- **Complex reasoning scenarios**: `qvq-max` (requires streaming output)

*Note: You can manually input any Qwen vision model name supported by Alibaba Cloud*

## License

MIT License