const path = require('path');

module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  plugins: [ 'eslint-plugin-promise' ],
  rules: {
    // ------------------------ Pomise 强制的风格 --------------------------------
    // 调用 Pomise 函数时，必须有 .catch(callback) 或者用 return 返回当前 Promise 对象
    'promise/catch-or-return': 'error',
    // new Promise() 时，函数的参数名只能为标准的 resolve, reject
    'promise/param-names': 'error',
  },
};
