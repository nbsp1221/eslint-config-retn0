const importRules = {
  'import/first': ['error'],
  'import/no-duplicates': ['error'],
  'import/no-self-import': ['error'],
  'import/order': ['error', {
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
    alphabetize: {
      order: 'asc',
      caseInsensitive: true,
    },
  }],
};

module.exports = importRules;
