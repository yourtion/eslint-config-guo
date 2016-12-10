const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
  },
  plugins: [
    'html',
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
  },
};
