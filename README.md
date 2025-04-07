# 🧹 eslint-config-retn0

[![npm](https://img.shields.io/npm/v/eslint-config-retn0?style=flat-square)](https://www.npmjs.com/package/eslint-config-retn0)
[![eslint](https://img.shields.io/npm/dependency-version/eslint-config-retn0/peer/eslint?style=flat-square)](https://eslint.org)
[![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)

This package provides my custom ESLint configuration as a shareable config.

## Requirements

> [!NOTE]
> This configuration uses the new flat config format introduced in ESLint v9.
> The flat config is not compatible with older version of ESLint.

- [Node.js](https://nodejs.org) 18.18.0 or higher
- [ESLint](https://eslint.org) 9.24.0 or higher
- [TypeScript](https://www.typescriptlang.org) 5.8.3 or higher (if you are using TypeScript)
- [React](https://react.dev) 19.1.0 or higher (if you are using React)

## Installation

```sh
npm install -D eslint eslint-config-retn0
```

## Usage

Create an `eslint.config.js` (or `eslint.config.mjs`) file in the root of your project:

```js
import { createConfigs } from 'eslint-config-retn0';

export default [
  ...createConfigs(),
  // Add your custom configurations here
];
```

You can customize the configuration by passing options to the `createConfigs` function:

```js
import { createConfigs } from 'eslint-config-retn0';

export default [
  ...createConfigs({
    perfectionist: {
      internalPattern: ['@my-server/**', '@my-client/**'], // Define patterns for grouping internal imports separately
    },
    ts: false, // If you are not using TypeScript
  }),
];
```
