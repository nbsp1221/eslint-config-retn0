const javascriptRules = require('./javascript');

module.exports = {
  'react/jsx-closing-bracket-location': ['error'],
  'react/jsx-closing-tag-location': ['error'],
  'react/jsx-curly-brace-presence': ['error'],
  'react/jsx-curly-spacing': ['error'],
  'react/jsx-equals-spacing': ['error'],
  'react/jsx-first-prop-new-line': ['error'],
  'react/jsx-indent': ['error', javascriptRules.indent[1]],
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'react/jsx-props-no-multi-spaces': ['error'],
  'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
  'react/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  }],
};
