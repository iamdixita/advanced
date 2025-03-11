// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )

import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended, // Base ESLint rules
  ...tseslint.configs.recommended, // TypeScript-specific rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react,
      "@typescript-eslint": tseslint.plugin,
    },

    rules: {
      //  React rules
      "react/react-in-jsx-scope": "off", // Vite handles React auto-import
      "react/prop-types": "off", // Not required in TypeScript

      //  TypeScript rules
      "@typescript-eslint/no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "off", // Avoid excessive use of `any`
      "@typescript-eslint/explicit-function-return-type": "off", // Optional for inferred types

      //  General best practices
      "no-console": "off",
      "no-undef": "off", // Ensure it doesn't complain about undefined variables
      "no-unused-vars": "off", // Handled by TypeScript's rule
      eqeqeq: ["error", "always"], // Enforce strict equality
    },
  },
];
