const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactRefresh = require('eslint-plugin-react-refresh');
const tseslint = require('typescript-eslint');

module.exports = [
  eslintPluginPrettierRecommended,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRefresh.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['env.js', '*.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/index.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
];
