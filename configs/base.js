import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export const baseConfigs = [
  {
    files: [
      '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: [
      '**/*.{spec,test}.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: [
      '**/*.{ts,mts,cts,tsx}',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: [
      '**/*.{jsx,tsx}',
    ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];
