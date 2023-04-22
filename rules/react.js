const javascriptRules = require('./javascript');

module.exports = {
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   */
  'react/jsx-closing-bracket-location': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   */
  'react/jsx-closing-tag-location': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   */
  'react/jsx-curly-brace-presence': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   */
  'react/jsx-curly-spacing': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   */
  'react/jsx-equals-spacing': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   */
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   */
  'react/jsx-first-prop-new-line': ['warn'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   */
  'react/jsx-fragments': ['warn'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   */
  'react/jsx-indent': ['error', javascriptRules.indent[1]],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   */
  'react/jsx-key': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   */
  'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
   */
  'react/jsx-no-comment-textnodes': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   */
  'react/jsx-no-duplicate-props': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
   */
  'react/jsx-no-target-blank': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
   */
  'react/jsx-no-undef': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   */
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  'react/jsx-props-no-multi-spaces': ['error'],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   */
  'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   */
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
