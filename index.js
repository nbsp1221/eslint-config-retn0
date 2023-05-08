const javascriptRules = require('./rules/javascript');
const typescriptRules = require('./rules/typescript');
const importRules = require('./rules/import');
const reactRules = require('./rules/react');
const tailwindcssRules = require('./rules/tailwindcss');
const markdownlintRules = require('./rules/markdownlint');

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
  /** @type {import('eslint').Linter.Config} */
  const config = {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [],
    rules: {
      ...javascriptRules,
    },
    overrides: [],
    settings: {},
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
    config.settings = {
      ...config.settings,
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'twMerge'],
      },
    };
  }

  if (isInstalled(['markdownlint', 'eslint-plugin-markdownlint'])) {
    config.overrides.push({
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      plugins: ['markdownlint'],
      rules: markdownlintRules,
    });
  }

  return config;
}

module.exports = createConfig();
