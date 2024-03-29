module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': [0],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
  },
};
