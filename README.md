# Continue Configuration

A custom configuration for [Continue.dev](https://continue.dev/) - an AI coding assistant.

## Overview

This repository contains a TypeScript-based configuration for Continue that allows for:

- Custom AI model configurations
- Personalized coding assistant behavior
- Type-safe configuration management

## Structure

- `config.ts` - Main configuration file with TypeScript support
- `config.yaml` - YAML configuration for basic settings
- `types/` - TypeScript type definitions for Continue API
- `out/` - Compiled JavaScript output (generated)

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Scripts

```bash
# Install dependencies
npm install

# Build the configuration
npm run build

# === Formatting ===
# Format code (write changes)
npm run format
npm run format:write

# Check formatting only (no changes)
npm run format:check

# === Linting ===
# Lint code (check only)
npm run lint
npm run lint:check

# Lint and auto-fix issues
npm run lint:fix

# === Validation ===
# Validate configuration (YAML syntax, structure, security)
npm run validate:config

# Full validation (format + lint + config + build)
npm run validate

# === Combined Commands ===
# Check both formatting and linting (alias for validate)
npm run check

# Fix both formatting and linting
npm run fix

# === Utilities ===
# Clean build artifacts
npm run clean
```

### Configuration

This project supports both YAML and TypeScript configuration:

#### `config.yaml` - Primary Configuration

The main configuration is in `config.yaml` following the [Continue.dev config.yaml specification](https://docs.continue.dev/reference). This includes:

- **Models**: AI language models (OpenAI, Anthropic, Ollama, etc.)
- **Context Providers**: Sources of context (file, code, git diff, terminal, etc.)
- **Rules**: Guidelines for the AI to follow
- **Prompts**: Custom reusable prompt templates
- **Documentation**: External docs to reference

#### `config.ts` - Advanced Customization

For advanced programmatic configuration, use `config.ts`:

```typescript
export function modifyConfig(config: Config): Config {
  // Add your customizations here
  return config;
}
```

#### Getting Started

1. **Set up your models**: Add API keys for OpenAI, Anthropic, or configure local Ollama models
2. **Customize rules**: Add project-specific coding guidelines
3. **Add prompts**: Create reusable prompt templates for common tasks
4. **Configure context**: Choose which context providers to enable

## Usage

1. Build the configuration: `npm run build`
2. The compiled `out/config.js` will be used by Continue
3. Restart Continue extension to apply changes

## Type Safety

This project includes TypeScript definitions for the Continue API, providing:

- IntelliSense and autocomplete
- Type checking during development
- Better refactoring support

## GitHub Actions

This repository includes automated quality checks via GitHub Actions:

### Workflows:

- **Quick Check** (`.github/workflows/quick-check.yml`)
  - Runs on every push/PR to main branches
  - Fast validation: format, lint, config validation, build
- **Full Validation** (`.github/workflows/validate.yml`)
  - Comprehensive validation including security scans
  - Documentation checks and markdown linting
  - Detailed reporting

### Status Badges:

Add these to your repository for status visibility:

```markdown
![Quick Check](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/🚀%20Quick%20Validation/badge.svg)
![Full Validation](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/🔍%20Code%20Quality%20&%20Validation/badge.svg)
```

## Contributing

1. Make changes to `config.ts` or `config.yaml`
2. Run `npm run validate` to check everything
3. Run `npm run fix` to auto-fix formatting/linting
4. Run `npm run build` to compile
5. Test with Continue extension
