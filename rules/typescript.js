const javascriptRules = require('./javascript');

const typescriptRules = {
  ...[
    'brace-style',
    'indent',
    'no-unused-vars',
    'object-curly-spacing',
    'semi',
    'space-before-blocks',
    'space-infix-ops',
  ].reduce((prevRules, name) => ({
    ...prevRules,
    [name]: 'off',
    [`@typescript-eslint/${name}`]: javascriptRules[name],
  }), {}),
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/type-annotation-spacing': ['error'],
};

module.exports = typescriptRules;
