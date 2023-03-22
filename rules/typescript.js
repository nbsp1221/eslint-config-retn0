const javascriptRules = require('./javascript');

module.exports = {
  ...[
    'brace-style',
    'indent',
    'no-unused-vars',
    'object-curly-spacing',
    'semi',
    'space-before-blocks',
    'space-infix-ops',
  ].reduce((prevRules, ruleName) => ({
    ...prevRules,
    [ruleName]: 'off',
    [`@typescript-eslint/${ruleName}`]: javascriptRules[ruleName],
  }), {}),
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
  '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/type-annotation-spacing': ['error'],
};
