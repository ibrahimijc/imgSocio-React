module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'always'],
    'no-undef': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-multiple-empty-lines': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': 'off',
  },
  env: {
    es6: true,
  },
};
