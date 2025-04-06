import perfectionistPlugin from 'eslint-plugin-perfectionist';

export function generatePerfectionistConfig(options = {}) {
  const {
    internalPattern = ['^~/.*'],
  } = options;

  return {
    files: [
      '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
    ],
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      /**
       * @see https://perfectionist.dev/rules/sort-exports
       */
      'perfectionist/sort-exports': ['warn', {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: false,
      }],

      /**
       * @see https://perfectionist.dev/rules/sort-imports
       */
      'perfectionist/sort-imports': ['warn', {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: false,
        internalPattern,
        newlinesBetween: 'ignore',
        groups: [
          'side-effect',
          'side-effect-style',
          'builtin-type',
          'builtin',
          'external-type',
          'external',
          'internal-type',
          'internal',
          'parent-type',
          'parent',
          'sibling-type',
          'sibling',
          'index-type',
          'index',
          'object',
          'style',
          'unknown',
        ],
      }],

      /**
       * @see https://perfectionist.dev/rules/sort-named-exports
       */
      'perfectionist/sort-named-exports': ['warn', {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: false,
        groupKind: 'types-first',
      }],

      /**
       * @see https://perfectionist.dev/rules/sort-named-imports
       */
      'perfectionist/sort-named-imports': ['warn', {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: false,
        groupKind: 'types-first',
      }],
    },
  };
}
