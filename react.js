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
    // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'jsx-quotes': [ 'error', 'prefer-double' ],
    // 防止在React组件定义中丢失displayName
    'react/display-name': 'off',
    // 禁止某些propTypes
    'react/forbid-prop-types': [ 'error', { 'forbid': [ 'any' ]}],
    // 在JSX中强制布尔属性符号
    'react/jsx-boolean-value': 'error',
    // 在JSX中验证右括号位置
    'react/jsx-closing-bracket-location': 'warn',
    // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-curly-spacing': [ 'error', { 'when': 'never', 'children': true }],
    // 验证JSX中的props缩进
    'react/jsx-indent-props': [ 'error', 4 ],
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 'error',
    //  限制JSX中单行上的props的最大数量
    'react/jsx-max-props-per-line': [ 'warn', { 'maximum': 'warn' }],
    // JSX中不允许使用箭头函数和bind
    'react/jsx-no-bind': 'off',
    // 防止在JSX中重复的props
    'react/jsx-no-duplicate-props': 'error',
    // 防止使用未包装的JSX字符串
    'react/jsx-no-literals': 'off',
    // 在JSX中禁止未声明的变量
    'react/jsx-no-undef': 'warn',
    // 为用户定义的JSX组件强制使用PascalCase
    'react/jsx-pascal-case': 'off',
    // 强化props按字母排序
    'react/jsx-sort-props': 'warn',
    // 防止反应被错误地标记为未使用
    'react/jsx-uses-react': 'warn',
    // 防止在JSX中使用的变量被错误地标记为未使用
    'react/jsx-uses-vars': 'error',
    // 防止使用危险的JSX属性
    'react/no-danger': 'warn',
    // 防止在componentDidMount中使用setState
    'react/no-did-mount-set-state': 'off',
    // 防止在componentDidUpdate中使用setState
    'react/no-did-update-set-state': 'warn',
    // 防止this.state的直接变异
    'react/no-direct-mutation-state': 'error',
    // 防止每个文件有多个组件定义
    'react/no-multi-comp': 'error',
    // 防止使用setState
    'react/no-set-state': 'off',
    // 防止使用未知的DOM属性
    'react/no-unknown-property': 'error',
    // 为React组件强制执行ES5或ES6类
    'react/prefer-es6-class': 'error',
    // 防止在React组件定义中丢失props验证
    'react/prop-types': 'off',
    // 使用JSX时防止丢失React
    'react/react-in-jsx-scope': 'error',
    // 防止没有children的组件的额外结束标签
    'react/self-closing-comp': 'off',
    // 强制组件方法顺序
    'react/sort-comp': 'warn',
    // 禁止不必要的bool转换
    'no-extra-boolean-cast': 'off',
    // 防止在数组中遍历中使用数组key做索引
    'react/no-array-index-key': 'off',
    // 不使用弃用的方法
    'react/no-deprecated': 'warn',
    // 在JSX属性中强制或禁止等号周围的空格
    'react/jsx-equals-spacing': 'warn',
  },
};
