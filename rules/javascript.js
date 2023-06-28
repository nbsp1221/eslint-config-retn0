const javascriptRules = {
  'array-bracket-spacing': ['error'],
  'arrow-parens': ['error'],
  'arrow-spacing': ['error'],
  'block-spacing': ['error'],
  'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'never',
  }],
  'comma-spacing': ['error'],
  'comma-style': ['error'],
  'computed-property-spacing': ['error'],
  'dot-location': ['error', 'property'],
  'eol-last': ['error'],
  'eqeqeq': ['error'],
  'func-call-spacing': ['error'],
  'function-call-argument-newline': ['error', 'consistent'],
  /**
   * @see https://eslint.org/docs/latest/rules/function-paren-newline
   */
  'function-paren-newline': ['error', 'consistent'],
  'implicit-arrow-linebreak': ['error'],
  /**
   * @see https://eslint.org/docs/latest/rules/indent
   */
  'indent': ['error', 2, {
    offsetTernaryExpressions: true,
    SwitchCase: 1,
  }],
  // 'indent': ['error', 2, { 'SwitchCase': 1 }],
  'jsx-quotes': ['error'],
  'key-spacing': ['error'],
  'keyword-spacing': ['error'],
  'linebreak-style': ['error'],
  'new-parens': ['error'],
  'no-extra-semi': ['error'],
  'no-mixed-spaces-and-tabs': ['error'],
  /**
   * @see https://eslint.org/docs/latest/rules/no-multi-spaces
   */
  'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-tabs': ['error'],
  'no-trailing-spaces': ['error'],
  'no-unused-vars': ['warn'],
  'no-var': ['error'],
  'no-whitespace-before-property': ['error'],
  'nonblock-statement-body-position': ['error'],
  'object-curly-newline': ['error', { consistent: true, multiline: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'object-shorthand': ['error', 'always', { avoidQuotes: true }],
  /**
   * @see https://eslint.org/docs/latest/rules/operator-linebreak
   */
  'operator-linebreak': ['error', 'after', {
    overrides: {
      '?': 'before',
      ':': 'before',
    },
  }],
  'padded-blocks': ['error', 'never'],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'rest-spread-spacing': ['error'],
  'semi': ['error'],
  'semi-spacing': ['error'],
  'semi-style': ['error'],
  /**
   * @see https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports': ['warn', {
    ignoreDeclarationSort: true,
  }],
  'space-before-blocks': ['error'],
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'space-in-parens': ['error'],
  'space-infix-ops': ['error'],
  'space-unary-ops': ['error'],
  'switch-colon-spacing': ['error'],
  'template-curly-spacing': ['error'],
  'wrap-iife': ['error', 'inside'],
};

module.exports = javascriptRules;
