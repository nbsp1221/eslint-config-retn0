const javascriptRules = require('./rules/javascript');
const typescriptRules = require('./rules/typescript');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    ...javascriptRules,
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
