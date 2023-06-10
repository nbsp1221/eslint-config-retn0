module.exports = {
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
   */
  'import/first': ['error'],
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
   */
  'import/no-duplicates': ['error'],
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   */
  'import/no-self-import': ['error'],
  /**
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
   */
  'import/order': ['warn', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    alphabetize: {
      order: 'asc',
    },
  }],
};
