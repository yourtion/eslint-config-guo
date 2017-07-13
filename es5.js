const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  ecmaFeatures: {
    modules: false,
    experimentalObjectRestSpread: false,
  },
  env: {
    es6: false,
  },
  rules: {
    'no-var': 'off',
  },
};
