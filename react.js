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
    // React Config
    // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': 'warn', 
    // Validate closing bracket location in JSX (fixable)
    'react/jsx-closing-bracket-location': 'warn',
    // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    'react/jsx-curly-spacing': 'warn',
    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': 'warn',
    // Validate spacing before closing bracket in JSX (fixable)
    'react/jsx-space-before-closing': 'warn',
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',
    // Prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': 'warn',
  },
};
