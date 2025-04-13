# 🧹 eslint-config-retn0

[![npm](https://img.shields.io/npm/v/eslint-config-retn0?style=flat-square)](https://www.npmjs.com/package/eslint-config-retn0)
[![eslint](https://img.shields.io/npm/dependency-version/eslint-config-retn0/peer/eslint?style=flat-square)](https://eslint.org)
[![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)

This package provides my custom ESLint configuration as a shareable config. It includes carefully selected rules for JavaScript, TypeScript, and React development with a focus on code quality and consistent style.

## Features

- 🌟 Uses ESLint v9's new flat config format
- 🚀 Comprehensive rule sets for JavaScript, TypeScript, and React
- 🎨 Code style rules via `@stylistic/eslint-plugin`
- 🧩 Import/export sorting with `eslint-plugin-perfectionist`
- ⚙️ Fully customizable through simple configuration options

## Requirements

> [!NOTE]
> This configuration uses the new flat config format introduced in ESLint v9.
> The flat config is not compatible with older versions of ESLint.

- [Node.js](https://nodejs.org) 18.18.0 or higher
- [ESLint](https://eslint.org) 9.24.0 or higher
- [TypeScript](https://www.typescriptlang.org) 5.8.3 or higher (if you are using TypeScript)
- [React](https://react.dev) 19.1.0 or higher (if you are using React)

## Installation

```sh
# With npm
npm install -D eslint eslint-config-retn0

# With yarn
yarn add -D eslint eslint-config-retn0

# With pnpm
pnpm add -D eslint eslint-config-retn0
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

### Configuration Options

You can customize the configuration by passing options to the `createConfigs` function:

```js
import { createConfigs } from 'eslint-config-retn0';

export default [
  ...createConfigs({
    // Enable/disable JavaScript rules (default: true)
    js: true,
    
    // Enable/disable React rules (default: true)
    react: true,
    
    // Enable/disable TypeScript rules (default: true)
    ts: true,
    
    // Enable/disable stylistic rules (default: true)
    stylistic: true,
    
    // Configure or disable perfectionist plugin (default: {})
    perfectionist: {
      // Define patterns for grouping internal imports separately
      internalPattern: ['@my-server/**', '@my-client/**'],
    },
  }),
  // Add your custom configurations here
];
```

### Perfectionist Configuration

The `perfectionist` option accepts the following properties:

- `internalPattern`: An array of glob patterns to identify internal imports for grouping separately (default: `['^~/.*']`)

Example:

```js
export default [
  ...createConfigs({
    perfectionist: {
      internalPattern: ['@internal/**', '@components/**'],
    },
  }),
];
```

## What's Included

This configuration includes rules from:

- Base JavaScript rules
- TypeScript-specific rules via `@typescript-eslint/eslint-plugin`
- React-specific rules via `eslint-plugin-react`
- Style formatting rules via `@stylistic/eslint-plugin`
- Import/export sorting rules via `eslint-plugin-perfectionist`

## License

MIT © [nbsp1221](https://github.com/nbsp1221)
