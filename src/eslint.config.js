export default [{
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            process: 'readonly', // Явно указываем process
            console: 'readonly',
            __dirname: 'readonly',
            __filename: 'readonly',
            require: 'readonly',
            module: 'readonly',
            exports: 'readonly'
        }
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        'semi': ['error', 'always']
    }
}];
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