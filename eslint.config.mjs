import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths';
import chaiFriendlyPlugin from 'eslint-plugin-chai-friendly';
import { fixupPluginRules } from '@eslint/compat';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';

export default [
  // global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/cypress/fixtures/**',
      '**/cypress/screenshots/**',
      '**/public/**',
      '**/*.js',
    ],
  },

  // base configuration for all ts + tsx files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true, // Auto-detects tsconfig files
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'import': fixupPluginRules(importPlugin),
      'unused-imports': unusedImportsPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
      'chai-friendly': chaiFriendlyPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    rules: {
      // typescript-eslint rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // stylistic rules for formatting
      '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['warn', 'always-multiline'],
      '@stylistic/comma-spacing': ['warn', { before: false, after: true }],
      '@stylistic/function-call-spacing': ['warn', 'never'],
      '@stylistic/indent': ['warn', 4, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      }],
      '@stylistic/keyword-spacing': ['warn', { before: true, after: true }],
      '@stylistic/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: false }],
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/space-before-blocks': ['warn', 'always'],
      '@stylistic/space-before-function-paren': ['warn', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/space-infix-ops': 'warn',
      'indent': 'off',

      // base eslint rules
      'prefer-const': 'warn',
      'consistent-return': 'error',
      'no-await-in-loop': 'warn',
      'no-prototype-builtins': 'off',
      'operator-linebreak': 'off',
      'arrow-body-style': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      'no-return-assign': 'warn',
      'arrow-parens': 'off',
      'no-shadow': 'off',
      'no-param-reassign': ['warn', { props: true }],
      'class-methods-use-this': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'max-len': ['error', { code: 160 }],
      'newline-per-chained-call': 'off',

      // react rules
      'react/no-unused-prop-types': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-no-bind': 'off',
      'react/no-direct-mutation-state': 'error',
      'react/no-access-state-in-setstate': 'warn',
      'react/destructuring-assignment': 'off',
      'react/jsx-tag-spacing': 'off',
      'react/sort-comp': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/jsx-closing-bracket-location': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-did-update-set-state': 'warn',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      'react/jsx-boolean-value': ['error', 'always'],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-max-props-per-line': ['error', { maximum: { single: 3, multi: 1 } }],

      // import rules
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',

      // playwright rules
      'playwright/no-nested-step': 'off',
      'playwright/valid-expect': 'off',

      // other plugin rules
      'no-only-tests/no-only-tests': 'error',
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { rootDir: 'src' },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // override for component tests (*.test.tsx)
  {
    files: ['**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-await-in-loop': 'off',
    },
  },

  // override for unit tests (src/**/*.test.ts)
  {
    files: ['src/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'playwright/no-standalone-expect': 'off',
    },
  },

  // playwright-specific configuration
  {
    files: ['playwright/**/*.ts', 'playwright/**/*.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'playwright/expect-expect': ['warn', { 'assertFunctionPatterns': ['^assert.+$'] }],
      'playwright/valid-expect': 'error',
      'playwright/prefer-web-first-assertions': 'warn',
      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { rootDir: '../' },
      ],
    },
  },

  // playwright integration test and POMs
  {
    files: ['playwright/integration/**', 'playwright/poms/**'],
    rules: {
      'no-await-in-loop': 'off',
    },
  },
];
