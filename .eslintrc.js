module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],

  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
