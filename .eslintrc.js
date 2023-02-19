module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
};
