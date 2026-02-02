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

## Quick Start

### 1. Get API Key
Visit [Alibaba Cloud Bailian Platform](https://bailian.console.aliyun.com/) to obtain your API key

### 2. Install Plugin
1. Download the `.potext` plugin file
2. Import the plugin in Pot-App
3. Configure API Key and model

### 3. Configuration Parameters

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| **API Key** | Alibaba Cloud DashScope API key | Required |
| **Model** | Model name (recommended: qwen3-vl-plus) | qwen3-vl-plus |
| **API Format** | openai (recommended) or dashscope | openai |
| **Base URL** | API service address | Auto-configured |
| **Custom Prompt** | Custom recognition prompt with `$lang` placeholder support | Optional |
| **Thinking Mode** | Enable model thinking process (specific models only) | Disabled |

## Supported Models

Recommended latest models (sorted by recommendation):

### 🚀 Latest Recommended Models
- **`qwen3-vl-plus`**: Latest flagship version with highest recognition accuracy (default)
- **`qvq-max`**: Visual reasoning model with powerful reasoning capabilities for complex scenarios
- **`qwen3-vl-flash`**: Fast version with quicker response times

### 📝 Usage Recommendations
- **Daily text recognition**: `qwen3-vl-plus` (default)
- **Complex reasoning scenarios**: `qvq-max` (requires streaming output)
- **Fast recognition needs**: `qwen3-vl-flash`

*Note: You can manually input any Qwen vision model name supported by Alibaba Cloud*

## Multi-Region Deployment

### Base URL Configuration

| Region | Base URL | Description |
|--------|----------|-------------|
| **Beijing** (Default) | `https://dashscope.aliyuncs.com/compatible-mode/v1` | Recommended for China mainland users |
| **Singapore** | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | Recommended for Asia-Pacific users |
| **Virginia** | `https://dashscope-us.aliyuncs.com/compatible-mode/v1` | Recommended for Americas users |

**Note**: Different regions require corresponding API Keys

## Thinking Mode

### Feature Description
- Enables the model to perform internal reasoning analysis before recognition
- Significantly improves recognition accuracy in complex scenarios
- Suitable for handwritten text, blurry images, complex layouts, etc.

### Supported Models
- `qwen3-vl-plus` ✅
- `qwen3-vl-flash` ✅  
- `qvq-max` ✅ (built-in reasoning capability)

### Usage Recommendations
- **Disabled** (default): Clear text, fast recognition
- **Enabled**: Handwritten text, blurry images, complex scenarios

## Supported Languages

Supports 30+ languages including:
- Chinese (Simplified/Traditional), Cantonese
- English, Japanese, Korean
- French, Spanish, Russian, German, Italian
- Arabic, Hindi, Thai, Vietnamese
- And many more...

## Development

### Package Plugin
```bash
# Package the following files as zip, then rename to .potext
zip plugin.com.pot-app.qwen-ocr.potext info.json main.js icon.png
```

### Project Structure
```
├── info.json    # Plugin configuration
├── main.js      # Core logic
└── icon.png     # Plugin icon
```

## Changelog

### v1.3.0 (2025-02-02)
- 🚀 Support for latest QVQ visual reasoning model
- 🧠 Added thinking mode to improve complex scenario recognition accuracy
- 🔧 Fixed Base URL settings to comply with official standards
- ⚡ Support for qwen3-vl-flash fast model
- 🌍 Enhanced multi-region deployment support

## License

MIT License