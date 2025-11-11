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
      'no-unused-vars': 'warn',
    },
  },
];
