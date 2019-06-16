const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  parserOptions: {
    ecmaVersion: 5,
  },
  ecmaFeatures: {
    modules: false,
  },
  env: {
    es6: false,
  },
  rules: {
    'no-var': 'off',
  },
};
