const importRules = require('./rules/import');
const javascriptRules = require('./rules/javascript');
const reactRules = require('./rules/react');
const typescriptRules = require('./rules/typescript');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['eslint-plugin-react', 'import'],
  rules: {
    ...javascriptRules,
    ...reactRules,
    ...importRules,
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
