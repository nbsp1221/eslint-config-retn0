const reactRules = {
  'react/jsx-closing-tag-location': ['error'],
  'react/jsx-curly-brace-presence': ['error'],
  'react/jsx-curly-spacing': ['error'],
  'react/jsx-equals-spacing': ['error'],
  'react/jsx-props-no-multi-spaces': ['error'],
  'react/jsx-space-before-closing': ['error'],
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

module.exports = reactRules;
