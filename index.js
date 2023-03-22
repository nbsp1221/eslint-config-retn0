const javascriptRules = require('./rules/javascript');
const typescriptRules = require('./rules/typescript');
const importRules = require('./rules/import');
const reactRules = require('./rules/react');
const tailwindcssRules = require('./rules/tailwindcss');

function isInstalled(packageNames) {
  return packageNames.every((packageName) => {
    try {
      if (require.resolve(packageName)) {
        return true;
      }

      return false;
    }
    catch {
      return false;
    }
  });
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

  if (isInstalled(['typescript', '@typescript-eslint/parser', '@typescript-eslint/eslint-plugin'])) {
    config.overrides.push({
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        ...typescriptRules,
      },
    });
  }

  if (isInstalled(['eslint-plugin-import'])) {
    config.plugins.push('import');
    config.rules = { ...config.rules, ...importRules };
  }

  if (isInstalled(['eslint-plugin-react'])) {
    config.plugins.push('react');
    config.rules = { ...config.rules, ...reactRules };
  }

  if (isInstalled(['tailwindcss', 'eslint-plugin-tailwindcss'])) {
    config.plugins.push('tailwindcss');
    config.rules = { ...config.rules, ...tailwindcssRules };
  }

  return config;
}

module.exports = createConfig();
