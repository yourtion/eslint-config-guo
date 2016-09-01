const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      'jsx': true,
    },
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'no-use-before-define': 'off',
    // react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // react native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
  },
};
