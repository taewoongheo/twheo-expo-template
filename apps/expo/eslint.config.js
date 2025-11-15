const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const commonConfig = require('@twheo/eslint-config-custom');
const globals = require('globals');

module.exports = defineConfig([
  expoConfig,
  {
    languageOptions: {
      globals: globals.node,

      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    ignores: ['dist/*', 'node_modules/*', '.expo/*'],
  },
  ...commonConfig,
]);
