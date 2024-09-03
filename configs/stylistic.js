import stylisticPlugin from '@stylistic/eslint-plugin';

export const stylisticConfig = {
  files: [
    '**/*.js',
    '**/*.jsx',
    '**/*.mjs',
    '**/*.cjs',
    '**/*.ts',
    '**/*.tsx',
  ],
  plugins: {
    '@stylistic': stylisticPlugin,
  },
  rules: {
    /**
     * @see https://eslint.style/rules/default/array-bracket-newline
     */
    '@stylistic/array-bracket-newline': ['error', 'consistent'],

    /**
     * @see https://eslint.style/rules/default/array-bracket-spacing
     */
    '@stylistic/array-bracket-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/array-element-newline
     */
    '@stylistic/array-element-newline': ['error', 'consistent'],

    /**
     * @see https://eslint.style/rules/default/arrow-parens
     */
    '@stylistic/arrow-parens': ['error'],

    /**
     * @see https://eslint.style/rules/default/arrow-spacing
     */
    '@stylistic/arrow-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/block-spacing
     */
    '@stylistic/block-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/brace-style
     */
    '@stylistic/brace-style': ['error', 'stroustrup'],

    /**
     * @see https://eslint.style/rules/default/comma-dangle
     */
    '@stylistic/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],

    /**
     * @see https://eslint.style/rules/default/comma-spacing
     */
    '@stylistic/comma-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/comma-style
     */
    '@stylistic/comma-style': ['error'],

    /**
     * @see https://eslint.style/rules/default/computed-property-spacing
     */
    '@stylistic/computed-property-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/dot-location
     */
    '@stylistic/dot-location': ['error', 'property'],

    /**
     * @see https://eslint.style/rules/default/eol-last
     */
    '@stylistic/eol-last': ['error'],

    /**
     * @see https://eslint.style/rules/default/function-call-argument-newline
     */
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    /**
     * @see https://eslint.style/rules/default/function-call-spacing
     */
    '@stylistic/function-call-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/function-paren-newline
     */
    '@stylistic/function-paren-newline': ['error', 'consistent'],

    /**
     * @see https://eslint.style/rules/default/generator-star-spacing
     */
    '@stylistic/generator-star-spacing': ['error', 'after'],

    /**
     * @see https://eslint.style/rules/default/implicit-arrow-linebreak
     */
    '@stylistic/implicit-arrow-linebreak': ['error'],

    /**
     * @see https://eslint.style/rules/default/indent
     */
    '@stylistic/indent': ['error', 2, {
      SwitchCase: 1,
      offsetTernaryExpressions: true,
    }],

    /**
     * @see https://eslint.style/rules/default/indent-binary-ops
     */
    '@stylistic/indent-binary-ops': ['error', 2],

    /**
     * @see https://eslint.style/rules/default/jsx-closing-bracket-location
     */
    '@stylistic/jsx-closing-bracket-location': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-closing-tag-location
     */
    '@stylistic/jsx-closing-tag-location': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-curly-brace-presence
     */
    '@stylistic/jsx-curly-brace-presence': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-curly-newline
     */
    '@stylistic/jsx-curly-newline': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-curly-spacing
     */
    '@stylistic/jsx-curly-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-equals-spacing
     */
    '@stylistic/jsx-equals-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-first-prop-new-line
     */
    '@stylistic/jsx-first-prop-new-line': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-function-call-newline
     */
    '@stylistic/jsx-function-call-newline': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-indent-props
     */
    '@stylistic/jsx-indent-props': ['error', 2],

    /**
     * @see https://eslint.style/rules/default/jsx-max-props-per-line
     */
    '@stylistic/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline',
    }],

    /**
     * @see https://eslint.style/rules/default/jsx-one-expression-per-line
     */
    '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    /**
     * @see https://eslint.style/rules/default/jsx-pascal-case
     */
    '@stylistic/jsx-pascal-case': ['warn'],

    /**
     * @see https://eslint.style/rules/default/jsx-props-no-multi-spaces
     */
    '@stylistic/jsx-props-no-multi-spaces': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-quotes
     */
    '@stylistic/jsx-quotes': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-self-closing-comp
     */
    '@stylistic/jsx-self-closing-comp': ['error'],

    /**
     * @see https://eslint.style/rules/default/jsx-tag-spacing
     */
    '@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],

    /**
     * @see https://eslint.style/rules/default/jsx-wrap-multilines
     */
    '@stylistic/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      propertyValue: 'parens-new-line',
    }],

    /**
     * @see https://eslint.style/rules/default/key-spacing
     */
    '@stylistic/key-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/keyword-spacing
     */
    '@stylistic/keyword-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/linebreak-style
     */
    '@stylistic/linebreak-style': ['error'],

    /**
     * @see https://eslint.style/rules/default/lines-around-comment
     */
    '@stylistic/lines-around-comment': ['error', {
      beforeLineComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
      allowClassStart: true,
    }],

    /**
     * @see https://eslint.style/rules/default/max-statements-per-line
     */
    '@stylistic/max-statements-per-line': ['error', { max: 2 }],

    /**
     * @see https://eslint.style/rules/default/member-delimiter-style
     */
    '@stylistic/member-delimiter-style': ['error'],

    /**
     * @see https://eslint.style/rules/default/multiline-comment-style
     */
    // '@stylistic/multiline-comment-style': ['error', 'starred-block'],

    /**
     * @see https://eslint.style/rules/default/multiline-ternary
     */
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    /**
     * @see https://eslint.style/rules/default/new-parens
     */
    '@stylistic/new-parens': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-extra-parens
     */
    '@stylistic/no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false,
      ignoreJSX: 'multi-line',
    }],

    /**
     * @see https://eslint.style/rules/default/no-extra-semi
     */
    '@stylistic/no-extra-semi': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-floating-decimal
     */
    '@stylistic/no-floating-decimal': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-mixed-operators
     */
    '@stylistic/no-mixed-operators': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-mixed-spaces-and-tabs
     */
    '@stylistic/no-mixed-spaces-and-tabs': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-multi-spaces
     */
    '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],

    /**
     * @see https://eslint.style/rules/default/no-multiple-empty-lines
     */
    '@stylistic/no-multiple-empty-lines': ['warn', { max: 1 }],

    /**
     * @see https://eslint.style/rules/default/no-tabs
     */
    '@stylistic/no-tabs': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-trailing-spaces
     */
    '@stylistic/no-trailing-spaces': ['error'],

    /**
     * @see https://eslint.style/rules/default/no-whitespace-before-property
     */
    '@stylistic/no-whitespace-before-property': ['error'],

    /**
     * @see https://eslint.style/rules/default/nonblock-statement-body-position
     */
    '@stylistic/nonblock-statement-body-position': ['error'],

    /**
     * @see https://eslint.style/rules/default/object-curly-newline
     */
    '@stylistic/object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],

    /**
     * @see https://eslint.style/rules/default/object-curly-spacing
     */
    '@stylistic/object-curly-spacing': ['error', 'always'],

    /**
     * @see https://eslint.style/rules/default/object-property-newline
     */
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    /**
     * @see https://eslint.style/rules/default/operator-linebreak
     */
    '@stylistic/operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],

    /**
     * @see https://eslint.style/rules/default/padded-blocks
     */
    '@stylistic/padded-blocks': ['error', 'never'],

    /**
     * @see https://eslint.style/rules/default/padding-line-between-statements
     */
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],

    /**
     * @see https://eslint.style/rules/default/quote-props
     */
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],

    /**
     * @see https://eslint.style/rules/default/quotes
     */
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

    /**
     * @see https://eslint.style/rules/default/rest-spread-spacing
     */
    '@stylistic/rest-spread-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/semi
     */
    '@stylistic/semi': ['error'],

    /**
     * @see https://eslint.style/rules/default/semi-spacing
     */
    '@stylistic/semi-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/semi-style
     */
    '@stylistic/semi-style': ['error'],

    /**
     * @see https://eslint.style/rules/default/space-before-blocks
     */
    '@stylistic/space-before-blocks': ['error'],

    /**
     * @see https://eslint.style/rules/default/space-before-function-paren
     */
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    /**
     * @see https://eslint.style/rules/default/space-in-parens
     */
    '@stylistic/space-in-parens': ['error'],

    /**
     * @see https://eslint.style/rules/default/space-infix-ops
     */
    '@stylistic/space-infix-ops': ['error'],

    /**
     * @see https://eslint.style/rules/default/space-unary-ops
     */
    '@stylistic/space-unary-ops': ['error'],

    /**
     * @see https://eslint.style/rules/default/spaced-comment
     */
    '@stylistic/spaced-comment': ['error', 'always', {
      line: {
        markers: ['!'],
        exceptions: ['='],
      },
      block: {
        balanced: true,
      },
    }],

    /**
     * @see https://eslint.style/rules/default/switch-colon-spacing
     */
    '@stylistic/switch-colon-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/template-curly-spacing
     */
    '@stylistic/template-curly-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/template-tag-spacing
     */
    '@stylistic/template-tag-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/type-annotation-spacing
     */
    '@stylistic/type-annotation-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/type-generic-spacing
     */
    '@stylistic/type-generic-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/type-named-tuple-spacing
     */
    '@stylistic/type-named-tuple-spacing': ['error'],

    /**
     * @see https://eslint.style/rules/default/wrap-iife
     */
    '@stylistic/wrap-iife': ['error', 'inside'],

    /**
     * @see https://eslint.style/rules/default/wrap-regex
     */
    '@stylistic/wrap-regex': ['error'],

    /**
     * @see https://eslint.style/rules/default/yield-star-spacing
     */
    '@stylistic/yield-star-spacing': ['error'],
  },
};
