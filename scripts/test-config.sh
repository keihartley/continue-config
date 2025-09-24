#!/bin/bash

# Continue Configuration Test Script
echo "🚀 Testing Continue Configuration..."
echo

# Check if Ollama is running
echo "📡 Checking Ollama service..."
if ! ollama list >/dev/null 2>&1; then
    echo "❌ Ollama is not running. Please start it with: ollama serve"
    exit 1
fi
echo "✅ Ollama is running"

# Check for required models
echo
echo "🤖 Checking installed models..."
if ollama list | grep -q "qwen2.5-coder:32b-instruct"; then
    echo "✅ qwen2.5-coder:32b-instruct found (Main Agent)"
else
    echo "❌ qwen2.5-coder:32b-instruct not found"
    echo "   Run: ollama pull qwen2.5-coder:32b-instruct"
    exit 1
fi

if ollama list | grep -q "qwen2.5-coder:14b-instruct"; then
    echo "✅ qwen2.5-coder:14b-instruct found (Autocomplete)"
else
    echo "❌ qwen2.5-coder:14b-instruct not found"
    echo "   Run: ollama pull qwen2.5-coder:14b-instruct"
    exit 1
fi

# Test model connectivity
echo
echo "🧪 Testing model connectivity..."
echo "Testing 32B model..."
if echo "Hello, this is a test." | ollama run qwen2.5-coder:32b-instruct >/dev/null 2>&1; then
    echo "✅ qwen2.5-coder:32b-instruct is responding"
else
    echo "⚠️  qwen2.5-coder:32b-instruct connectivity issue"
fi

echo "Testing 14B model..."
if echo "Hello, this is a test." | ollama run qwen2.5-coder:14b-instruct >/dev/null 2>&1; then
    echo "✅ qwen2.5-coder:14b-instruct is responding"
else
    echo "⚠️  qwen2.5-coder:14b-instruct connectivity issue"
fi

echo
echo "🎉 Configuration test complete!"
echo
echo "📋 Next steps:"
echo "1. Restart VS Code"
echo "2. Ensure Continue extension is enabled"
echo "3. Test chat with main agent (Qwen2.5-Coder 32B)"
echo "4. Test autocomplete functionality (Qwen2.5-Coder 14B)"
echo "5. Try custom prompts: /code-review, /explain, /optimize, /test-gen"