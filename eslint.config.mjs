// ESLint flat config (replaces .eslintrc and .eslintignore)
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {ignores: ['node_modules/', 'dist/', '_maps/', 'bundle.js', 'static_project/']},
  js.configs.recommended,
  prettier,
  {
    files: ['src/**/*.js'],
    languageOptions: {globals: globals.browser},
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {sourceType: 'commonjs', globals: globals.node},
  },
  {
    rules: {
      'max-params': ['error', 6],
    },
  },
];
