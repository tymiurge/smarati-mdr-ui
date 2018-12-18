module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    quotes: ["error", "single"]
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ]
};
