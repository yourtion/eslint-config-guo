# eslint-config

## 安装

```bash
$ npm install eslint-config-guo --save-dev
```

## 使用方法

### 配置文件

在项目根目录下新建文件`.eslintrc.js`：

仅包含 ES6 语法时：

```javascript
module.exports = {
  extends: 'guo',
};
```

包含 ES7 语法时：

```javascript
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: 'guo',
};
```

### mocha

在基于`mocha`框架的单元测试中使用，在`test`目录下新建文件`.eslintrc.js`：

```javascript
module.exports = {
  extends: 'guo/mocha',
};
```

### React

需要先安装 插件

```bash
$ npm install eslint-plugin-react --save-dev
```

然后在项目根目录下新建文件`.eslintrc.js`：

```javascript
module.exports = {
  extends: 'guo/react',
};
```

[React 规则](https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules)

### React-Native

需要先安装 插件

```bash
$ npm install eslint-plugin-react --save-dev
$ npm install eslint-plugin-react-native --save-dev
```

然后在项目根目录下新建文件`.eslintrc.js`：

```javascript
module.exports = {
  extends: 'guo/react-native',
};
```

[React-Native 规则](https://www.npmjs.com/package/eslint-plugin-react-native#list-of-supported-rules)

### 使用

执行以下命令即可：

```bash
$ eslint dir/**.js
```

如果需要自动格式化代码，在执行时添加`--fix`选项：

```bash
$ eslint dir/**.js --fix
```

## 常见问题

1、如果在使用`babel-eslint`时报错，可能是该模块的 Bug，目前可以通过以下方法解决：

```javascript
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  extends: 'guo',
  rules: {
    // 关闭以下规则
    'generator-star-spacing': 'off',
    'require-yield': 'off',
  },
};
```

2、在使用过程中，可能会遇到一些例外情况，比如需要更改参数对象的属性，可以通过`eslint-disable-next`来临时关闭对下一行的检查：

```javascript
// eslint-disable-next-line no-param-reassign
param.xxx = 'ok';
```

**注意：任何时候请勿使用`eslint-disable`来关闭`eslint`的检查，如果该备注不能与`eslint-enable`成对出现将会导致余下的程序不能正常获得检查**
