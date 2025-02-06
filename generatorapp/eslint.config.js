import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import React from 'react'
import react from '@vitejs/plugin-react-swc'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts', '.eslintrc.cjs'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': React,
      '@typescript-eslint': tseslint,
      'prettier': eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "prettier/prettier":"error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
)
