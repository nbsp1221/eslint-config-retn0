const importRules = require('./rules/import');
const javascriptRules = require('./rules/javascript');
const reactRules = require('./rules/react');
const typescriptRules = require('./rules/typescript');

function isInstalled(name) {
  try {
    if (require.resolve(name)) {
      return true;
    }

    return false;
  }
  catch {
    return false;
  }
}

function createConfig() {
  const config = {
    parserOptions: {
      ecmaVersion: 'latest',
    },
    plugins: [],
    rules: {
      ...javascriptRules,
    },
    overrides: [],
  };

  if (isInstalled('typescript')) {
    config.overrides.push({
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: typescriptRules,
    });
  }

  if (isInstalled('eslint-plugin-import')) {
    config.plugins.push('eslint-plugin-import');
    config.rules = { ...config.rules, ...importRules };
  }

  if (isInstalled('eslint-plugin-react')) {
    config.plugins.push('eslint-plugin-react');
    config.rules = { ...config.rules, ...reactRules };
  }

  return config;
}

module.exports = createConfig();
