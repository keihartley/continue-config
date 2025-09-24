import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/',
      'out/',
      'dist/',
      'build/',
      'index/',
      'sessions/',
      'dev_data/',
      '*.sqlite*',
      'types/core/index.d.ts', // External type definitions
      '*.json', // Don't lint JSON files
      '.eslintignore',
      '.prettierignore',
      '.gitignore',
      'scripts/**/*.cjs', // Node.js scripts
      '.migrations/',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        Config: 'readonly', // Define Config as a global type
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-undef': 'off', // TypeScript handles this
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  prettier, // This disables ESLint rules that conflict with Prettier
];