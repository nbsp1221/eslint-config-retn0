import { baseConfigs } from './configs/base.js';
import { jsConfig } from './configs/js.js';
import { generatePerfectionistConfig } from './configs/perfectionist.js';
import { reactConfig } from './configs/react.js';
import { stylisticConfig } from './configs/stylistic.js';
import { tsConfig } from './configs/ts.js';

function validateConfig(config) {
  const ruleKeys = Object
    .keys(config.rules ?? {})
    .filter((ruleKey) => !(ruleKey.split('/')[1] in config.rules));

  const sortedRuleKeys = [...ruleKeys].sort((left, right) => {
    if (left.startsWith('@') && !right.startsWith('@')) {
      return 1;
    }

    if (!left.startsWith('@') && right.startsWith('@')) {
      return -1;
    }

    return left.localeCompare(right);
  });

  for (let i = 0; i < ruleKeys.length; i++) {
    if (ruleKeys[i] !== sortedRuleKeys[i]) {
      throw new Error(`The ${ruleKeys[i]} rule is not sorted. Please sort them alphabetically.`);
    }
  }

  return true;
}

/**
 * @typedef PerfectionistOptions
 * @type {object}
 * @property {string[]} [internalPattern=['~/**']]
 *
 * @param {object} [options]
 * @param {boolean} [options.js=true]
 * @param {PerfectionistOptions|boolean} [options.perfectionist={}]
 * @param {boolean} [options.react=true]
 * @param {boolean} [options.stylistic=true]
 * @param {boolean} [options.ts=true]
 * @returns {object[]}
 */
export function createConfigs(options = {}) {
  const {
    js = true,
    perfectionist = {},
    react = true,
    stylistic = true,
    ts = true,
  } = options;

  const configs = [
    ...baseConfigs,
    js && jsConfig,
    perfectionist && generatePerfectionistConfig(perfectionist),
    react && reactConfig,
    stylistic && stylisticConfig,
    ts && tsConfig,
  ]
    .filter(Boolean)
    .filter(validateConfig);

  return configs;
}
