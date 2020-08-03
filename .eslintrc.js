module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'plugin:prettier/recommended', 'prettier/react'],
  settings: {
    'import/resolver': 'babel-plugin-root-import',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
