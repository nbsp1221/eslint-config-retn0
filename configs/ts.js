import tsPlugin from '@typescript-eslint/eslint-plugin';
import { jsConfig } from './js.js';

export const tsConfig = {
  files: [
    '**/*.{ts,mts,cts,tsx}',
  ],
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    /**
     * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
     */
    '@typescript-eslint/adjacent-overload-signatures': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/array-type
     */
    '@typescript-eslint/array-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/await-thenable
     */
    '@typescript-eslint/await-thenable': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/ban-ts-comment
     */
    '@typescript-eslint/ban-ts-comment': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/ban-tslint-comment
     */
    '@typescript-eslint/ban-tslint-comment': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/class-literal-property-style
     */
    '@typescript-eslint/class-literal-property-style': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/consistent-generic-constructors
     */
    '@typescript-eslint/consistent-generic-constructors': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
     */
    '@typescript-eslint/consistent-indexed-object-style': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/consistent-type-assertions
     */
    '@typescript-eslint/consistent-type-assertions': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/consistent-type-definitions
     */
    '@typescript-eslint/consistent-type-definitions': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/consistent-type-exports
     */
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],

    /**
     * @see https://typescript-eslint.io/rules/consistent-type-imports
     */
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
      disallowTypeAnnotations: false,
    }],

    /**
     * @see https://typescript-eslint.io/rules/default-param-last
     */
    'default-param-last': ['off'],
    '@typescript-eslint/default-param-last': jsConfig.rules['default-param-last'],

    /**
     * @see https://typescript-eslint.io/rules/dot-notation
     */
    'dot-notation': ['off'],
    '@typescript-eslint/dot-notation': jsConfig.rules['dot-notation'],

    /**
     * @see https://typescript-eslint.io/rules/method-signature-style
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    /**
     * @see https://typescript-eslint.io/rules/no-array-constructor
     */
    'no-array-constructor': ['off'],
    '@typescript-eslint/no-array-constructor': jsConfig.rules['no-array-constructor'],

    /**
     * @see https://typescript-eslint.io/rules/no-array-delete
     */
    '@typescript-eslint/no-array-delete': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-base-to-string
     */
    '@typescript-eslint/no-base-to-string': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
     */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-confusing-void-expression
     */
    '@typescript-eslint/no-confusing-void-expression': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-deprecated
     */
    '@typescript-eslint/no-deprecated': ['warn'],

    /**
     * @see https://typescript-eslint.io/rules/no-dupe-class-members
     */
    '@typescript-eslint/no-dupe-class-members': ['off'],

    /**
     * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
     */
    '@typescript-eslint/no-duplicate-enum-values': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
     */
    '@typescript-eslint/no-duplicate-type-constituents': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-dynamic-delete
     */
    '@typescript-eslint/no-dynamic-delete': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-empty-function
     */
    'no-empty-function': ['off'],
    '@typescript-eslint/no-empty-function': jsConfig.rules['no-empty-function'],

    /**
     * @see https://typescript-eslint.io/rules/no-empty-object-type
     */
    '@typescript-eslint/no-empty-object-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-explicit-any
     */
    '@typescript-eslint/no-explicit-any': ['off'],

    /**
     * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
     */
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-extraneous-class
     */
    '@typescript-eslint/no-extraneous-class': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-floating-promises
     */
    '@typescript-eslint/no-floating-promises': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-for-in-array
     */
    '@typescript-eslint/no-for-in-array': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-implied-eval
     */
    'no-implied-eval': ['off'],
    '@typescript-eslint/no-implied-eval': jsConfig.rules['no-implied-eval'],

    /**
     * @see https://typescript-eslint.io/rules/no-inferrable-types
     */
    '@typescript-eslint/no-inferrable-types': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-invalid-void-type
     */
    '@typescript-eslint/no-invalid-void-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
     */
    '@typescript-eslint/no-meaningless-void-operator': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-misused-new
     */
    '@typescript-eslint/no-misused-new': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-misused-promises
     */
    '@typescript-eslint/no-misused-promises': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-mixed-enums
     */
    '@typescript-eslint/no-mixed-enums': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-namespace
     */
    '@typescript-eslint/no-namespace': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-non-null-assertion
     */
    '@typescript-eslint/no-non-null-assertion': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-redeclare
     */
    'no-redeclare': ['off'],
    '@typescript-eslint/no-redeclare': ['off'],

    /**
     * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
     */
    '@typescript-eslint/no-redundant-type-constituents': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-require-imports
     */
    '@typescript-eslint/no-require-imports': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-this-alias
     */
    '@typescript-eslint/no-this-alias': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-condition
     */
    '@typescript-eslint/no-unnecessary-condition': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
     */
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
     */
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
     */
    '@typescript-eslint/no-unnecessary-template-expression': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
     */
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
     */
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
     */
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
     */
    '@typescript-eslint/no-unnecessary-type-parameters': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-argument
     */
    '@typescript-eslint/no-unsafe-argument': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-assignment
     */
    '@typescript-eslint/no-unsafe-assignment': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-call
     */
    '@typescript-eslint/no-unsafe-call': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
     */
    '@typescript-eslint/no-unsafe-declaration-merging': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
     */
    '@typescript-eslint/no-unsafe-enum-comparison': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-function-type
     */
    '@typescript-eslint/no-unsafe-function-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-member-access
     */
    '@typescript-eslint/no-unsafe-member-access': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-return
     */
    '@typescript-eslint/no-unsafe-return': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
     */
    '@typescript-eslint/no-unsafe-unary-minus': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/no-unused-expressions
     */
    'no-unused-expressions': ['off'],
    '@typescript-eslint/no-unused-expressions': jsConfig.rules['no-unused-expressions'],

    /**
     * @see https://typescript-eslint.io/rules/no-unused-vars
     */
    'no-unused-vars': ['off'],
    '@typescript-eslint/no-unused-vars': jsConfig.rules['no-unused-vars'],

    /**
     * @see https://typescript-eslint.io/rules/no-useless-constructor
     */
    'no-useless-constructor': ['off'],
    '@typescript-eslint/no-useless-constructor': jsConfig.rules['no-useless-constructor'],

    /**
     * @see https://typescript-eslint.io/rules/no-wrapper-object-types
     */
    '@typescript-eslint/no-wrapper-object-types': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
     */
    '@typescript-eslint/non-nullable-type-assertion-style': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/only-throw-error
     */
    'no-throw-literal': ['off'],
    '@typescript-eslint/only-throw-error': jsConfig.rules['no-throw-literal'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-as-const
     */
    '@typescript-eslint/prefer-as-const': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-find
     */
    '@typescript-eslint/prefer-find': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-for-of
     */
    '@typescript-eslint/prefer-for-of': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-function-type
     */
    '@typescript-eslint/prefer-function-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-includes
     */
    '@typescript-eslint/prefer-includes': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
     */
    '@typescript-eslint/prefer-literal-enum-member': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
     */
    '@typescript-eslint/prefer-namespace-keyword': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
     */
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-optional-chain
     */
    '@typescript-eslint/prefer-optional-chain': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': ['off'],
    '@typescript-eslint/prefer-promise-reject-errors': jsConfig.rules['prefer-promise-reject-errors'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
     */
    '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-regexp-exec
     */
    '@typescript-eslint/prefer-regexp-exec': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-return-this-type
     */
    '@typescript-eslint/prefer-return-this-type': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
     */
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/require-await
     */
    'require-await': ['off'],
    '@typescript-eslint/require-await': jsConfig.rules['require-await'],

    /**
     * @see https://typescript-eslint.io/rules/restrict-plus-operands
     */
    '@typescript-eslint/restrict-plus-operands': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/restrict-template-expressions
     */
    '@typescript-eslint/restrict-template-expressions': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/return-await
     */
    '@typescript-eslint/return-await': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/triple-slash-reference
     */
    '@typescript-eslint/triple-slash-reference': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/unbound-method
     */
    '@typescript-eslint/unbound-method': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/unified-signatures
     */
    '@typescript-eslint/unified-signatures': ['error'],

    /**
     * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
     */
    '@typescript-eslint/use-unknown-in-catch-callback-variable': ['error'],
  },
};
