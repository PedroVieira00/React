import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      js: pluginJs.configs.recommended,
      react: pluginReact.configs.flat.recommended,
      "react-hooks": pluginReactHooks.configs.recommended,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "no-unused-vars": "warn", // Warn about unused variables
      "no-undef": "error", // Disallow undefined variables
      "one-var": "error", // Enforce one-var rule
      "react-hooks/rules-of-hooks": "error", // Check rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Check effect dependencies
      "prefer-const": "warn", // Prefer const over let
      eqeqeq: ["warn", "always"], // Enforce strict equality
      quotes: ["warn", "single"], // Prefer single quotes
      semi: ["warn", "always"], // Require semicolons
      indent: ["warn", 2], // Enforce consistent indentation
      "jsx-quotes": ["warn", "prefer-double"], // Use double quotes in JSX
    },
  },
];
