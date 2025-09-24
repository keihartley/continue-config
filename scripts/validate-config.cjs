const yaml = require("yaml");
const fs = require("fs");
const path = require("path");

console.log("🔍 Validating Continue Configuration...\n");

// Validate YAML syntax
try {
  const configContent = fs.readFileSync("config.yaml", "utf8");
  const parsed = yaml.parse(configContent);
  console.log("✅ config.yaml syntax is valid");

  // Check required fields
  const required = ["name", "version", "schema"];
  const missing = required.filter((field) => !parsed[field]);

  if (missing.length > 0) {
    console.error("❌ Missing required fields:", missing.join(", "));
    process.exit(1);
  }

  console.log("✅ Required fields present");

  // Check models configuration
  if (parsed.models && Array.isArray(parsed.models)) {
    console.log(`✅ Found ${parsed.models.length} model(s) configured`);

    parsed.models.forEach((model, i) => {
      if (!model.name || !model.provider || !model.model) {
        console.error(
          `❌ Model ${i + 1} missing required fields (name, provider, model)`
        );
        process.exit(1);
      }
    });
  } else {
    console.log("⚠️  No models configured");
  }

  // Check for sensitive data
  const yamlText = configContent.toLowerCase();
  const sensitivePatterns = [
    /apikey:\s*[a-z0-9_-]{10,}/i,
    /password:\s*\w+/i,
    /secret:\s*\w+/i,
  ];

  const hasSensitive = sensitivePatterns.some(
    (pattern) =>
      pattern.test(configContent) &&
      !configContent.includes("secrets.") &&
      !configContent.includes("your_") &&
      !configContent.includes("#")
  );

  if (hasSensitive) {
    console.error("❌ Potential sensitive data found in config.yaml");
    console.error(
      "   Use ${{ secrets.SECRET_NAME }} instead of hardcoded values"
    );
    process.exit(1);
  }

  console.log("✅ No sensitive data detected");
} catch (error) {
  console.error("❌ YAML validation failed:");
  console.error(error.message);
  process.exit(1);
}

// Check TypeScript config
try {
  const tsConfig = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"));
  if (tsConfig.compilerOptions && tsConfig.compilerOptions.outFile) {
    console.log("✅ TypeScript configured for Continue");
  }
} catch (error) {
  console.error("⚠️  TypeScript config validation failed:", error.message);
}

console.log("\n🎉 Configuration validation complete!");
