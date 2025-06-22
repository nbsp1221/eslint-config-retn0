import { createConfigs } from './index.js';

export default [
  ...createConfigs(),
  {
    ignores: [
      '**/node_modules/',
      '.git/',
    ],
  },
];
