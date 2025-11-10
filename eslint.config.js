import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      prettier,
    ],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...reactHooks.configs["recommended-latest"].rules,

      // Formatting & Type Safety
      "prettier/prettier": "off",
      "@typescript-eslint/no-explicit-any": "error",

      // React Refresh Optimization
      "react-refresh/only-export-components": "off",

      // No console.log (allow only warn & error)
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
