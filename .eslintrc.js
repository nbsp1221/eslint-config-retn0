const javascriptRules = require('./rules/javascript');
const typescriptRules = require('./rules/typescript');
const reactRules = require('./rules/react');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['eslint-plugin-react'],
  rules: {
    ...javascriptRules,
    ...reactRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: typescriptRules,
    },
  ],
};
