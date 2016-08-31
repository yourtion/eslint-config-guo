const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      'jsx': true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    // react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
