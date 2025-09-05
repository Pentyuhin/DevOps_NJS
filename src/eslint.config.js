// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2022
            }
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'error',
            'no-console': 'warn',
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always']
        }
    }
];
// import globals from "globals";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//     {
//         ignores: [
//             "node_modules/**",
//             "dist/**",
//             "build/**",
//             "coverage/**",
//             "*.min.js",
//             "package-lock.json"
//         ],
//         files: ["**/*.{js,mjs,cjs}"],
//         languageOptions: {
//             globals: globals.node,
//             ecmaVersion: 2022,
//             sourceType: "module"
//         },
//         rules: {
//             "no-console": "warn",
//             "no-unused-vars": "warn",
//             "prefer-const": "error"
//         }
//     },
// ]);