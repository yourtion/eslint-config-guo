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
    'react-native',
  ],
  rules: {
    'no-use-before-define': 'warn',
    // react
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    // react native
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
  },
};
