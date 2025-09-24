# Continue Configuration Setup Guide

## Quick Start

### 1. Set up API Keys (Choose one or more)

Create a `.env` file in this directory (`~/.continue/.env`) for your API keys:

```env
# OpenAI (for GPT models)
OPENAI_API_KEY=your_openai_api_key_here

# Anthropic (for Claude models)
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Or use any other supported provider
```

### 2. Current Configuration

This setup is configured to use Qwen2.5-Coder models locally via Ollama:

```yaml
models:
  # Main chat/coding agent - Qwen2.5-Coder 32B
  - name: Qwen2.5-Coder 32B Main Agent
    provider: ollama
    model: qwen2.5-coder:32b-instruct
    roles: [chat, edit, apply, summarize]

  # Fast autocomplete - Qwen2.5-Coder 14B
  - name: Qwen2.5-Coder 14B Autocomplete
    provider: ollama
    model: qwen2.5-coder:14b-instruct
    roles: [autocomplete]
```

### 3. Verify Ollama Models

Your currently installed models:

```bash
# Check installed models
ollama list

# Should show:
# qwen2.5-coder:32b-instruct - Main agent (19 GB)
# qwen2.5-coder:14b-instruct - Autocomplete (9.0 GB)
```

### 4. Test Your Configuration

1. Open VS Code with the Continue extension
2. Try chatting with your configured model
3. Test autocomplete functionality
4. Use custom prompts like `/code-review` or `/explain`

## Current Model Setup

### Active Configuration:

- **Qwen2.5-Coder 32B**: Main coding agent for chat, editing, and code analysis
  - 19 GB model optimized for complex coding tasks
  - Excellent at understanding context and generating quality code
  - Supports tool use and advanced reasoning

- **Qwen2.5-Coder 14B**: Fast autocomplete engine
  - 9.0 GB model optimized for speed
  - Provides intelligent code completions as you type
  - Balances performance with resource usage

### Alternative Models (Available but commented out):

- **OpenAI GPT-4o**: Cloud-based option (requires API key)
- **Anthropic Claude 3.5 Sonnet**: Advanced reasoning (requires API key)

## Troubleshooting

### Common Issues:

1. **API Key errors**: Ensure keys are in `~/.continue/.env`
2. **Ollama connection**: Make sure Ollama is running (`ollama serve`)
3. **Model not found**: Check model names with `ollama list`

### Useful Commands:

```bash
# Build configuration
npm run build

# Check configuration syntax
npm run check

# Format YAML files
npm run format
```

## Advanced Configuration

See the [Continue.dev documentation](https://docs.continue.dev/reference) for advanced features:

- Custom context providers
- MCP server integration
- Development data collection
- Custom prompt templates
