export const jsConfig = {
  files: [
    '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}',
  ],
  rules: {
    /**
     * @see https://eslint.org/docs/latest/rules/array-callback-return
     */
    'array-callback-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/constructor-super
     */
    'constructor-super': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/default-case-last
     */
    'default-case-last': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/default-param-last
     */
    'default-param-last': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/dot-notation
     */
    'dot-notation': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/eqeqeq
     */
    'eqeqeq': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/for-direction
     */
    'for-direction': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/getter-return
     */
    'getter-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/max-depth
     */
    'max-depth': ['warn', 4],

    /**
     * @see https://eslint.org/docs/latest/rules/no-array-constructor
     */
    'no-array-constructor': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
     */
    'no-async-promise-executor': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-case-declarations
     */
    'no-case-declarations': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-class-assign
     */
    'no-class-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-cond-assign
     */
    'no-cond-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-const-assign
     */
    'no-const-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
     */
    'no-constant-binary-expression': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-constant-condition
     */
    'no-constant-condition': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-constructor-return
     */
    'no-constructor-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-control-regex
     */
    'no-control-regex': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-debugger
     */
    'no-debugger': ['warn'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-delete-var
     */
    'no-delete-var': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-dupe-args
     */
    'no-dupe-args': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
     */
    'no-dupe-class-members': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
     */
    'no-dupe-else-if': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-dupe-keys
     */
    'no-dupe-keys': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-duplicate-case
     */
    'no-duplicate-case': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
     */
    'no-duplicate-imports': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-empty
     */
    'no-empty': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-empty-character-class
     */
    'no-empty-character-class': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-empty-function
     */
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    /**
     * @see https://eslint.org/docs/latest/rules/no-empty-pattern
     */
    'no-empty-pattern': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-empty-static-block
     */
    'no-empty-static-block': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-eval
     */
    'no-eval': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-ex-assign
     */
    'no-ex-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-extra-label
     */
    'no-extra-label': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-fallthrough
     */
    'no-fallthrough': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-func-assign
     */
    'no-func-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-global-assign
     */
    'no-global-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
     */
    'no-implicit-coercion': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-implied-eval
     */
    'no-implied-eval': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-import-assign
     */
    'no-import-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-inner-declarations
     */
    'no-inner-declarations': ['error', 'functions', { blockScopedFunctions: 'disallow' }],

    /**
     * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
     */
    'no-invalid-regexp': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-labels
     */
    'no-labels': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-lone-blocks
     */
    'no-lone-blocks': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
     */
    'no-loss-of-precision': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
     */
    'no-misleading-character-class': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
     */
    'no-new-native-nonconstructor': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-obj-calls
     */
    'no-obj-calls': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-octal
     */
    'no-octal': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
     */
    'no-promise-executor-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
     */
    'no-prototype-builtins': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-redeclare
     */
    'no-redeclare': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-regex-spaces
     */
    'no-regex-spaces': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-return-assign
     */
    'no-return-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-self-assign
     */
    'no-self-assign': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-self-compare
     */
    'no-self-compare': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-setter-return
     */
    'no-setter-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
     */
    'no-sparse-arrays': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-this-before-super
     */
    'no-this-before-super': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-throw-literal
     */
    'no-throw-literal': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-undef
     */
    'no-undef': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unreachable
     */
    'no-unreachable': ['warn'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
     */
    'no-unsafe-finally': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
     */
    'no-unsafe-negation': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unused-expressions
     */
    'no-unused-expressions': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unused-labels
     */
    'no-unused-labels': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
     */
    'no-unused-private-class-members': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-unused-vars
     */
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-assignment
     */
    'no-useless-assignment': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-backreference
     */
    'no-useless-backreference': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-catch
     */
    'no-useless-catch': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-constructor
     */
    'no-useless-constructor': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-escape
     */
    'no-useless-escape': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-rename
     */
    'no-useless-rename': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-useless-return
     */
    'no-useless-return': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-var
     */
    'no-var': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-void
     */
    'no-void': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/no-with
     */
    'no-with': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/object-shorthand
     */
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],

    /**
     * @see https://eslint.org/docs/latest/rules/operator-assignment
     */
    'operator-assignment': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-const
     */
    'prefer-const': ['warn'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-object-spread
     */
    'prefer-object-spread': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-rest-params
     */
    'prefer-rest-params': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/prefer-spread
     */
    'prefer-spread': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/require-atomic-updates
     */
    'require-atomic-updates': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/require-await
     */
    'require-await': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/require-yield
     */
    'require-yield': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/use-isnan
     */
    'use-isnan': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/valid-typeof
     */
    'valid-typeof': ['error'],

    /**
     * @see https://eslint.org/docs/latest/rules/yoda
     */
    'yoda': ['error'],
  },
};
