const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'ava',
  ],
  rules: {
    'ava/assertion-arguments': 'error',
    'ava/max-asserts': [ 'off', 5 ],
    'ava/no-async-fn-without-await': 'error',
    'ava/no-cb-test': 'off',
    'ava/no-duplicate-modifiers': 'error',
    'ava/no-identical-title': 'error',
    'ava/no-ignored-test-files': 'warn',
    'ava/no-invalid-end': 'error',
    'ava/no-nested-tests': 'error',
    'ava/no-only-test': 'error',
    'ava/no-skip-assert': 'warn',
    'ava/no-skip-test': 'warn',
    'ava/no-statement-after-end': 'error',
    'ava/no-todo-implementation': 'warn',
    'ava/no-todo-test': 'warn',
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-async-await': 'error',
    'ava/prefer-power-assert': 'off',
    'ava/test-ended': 'error',
    'ava/test-title': [ 'error', 'if-multiple' ],
    'ava/use-t-well': 'warn',
    'ava/use-t': 'warn',
    'ava/use-test': 'warn',
    'ava/use-true-false': 'warn',
  },
};