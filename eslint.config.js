module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended", // Ensures Prettier compatibility
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-var": "error", // Disallow var
    "no-unused-vars": "error", // Disallow unused variables
    semi: ["error", "always"], // Require semicolons
    eqeqeq: "error", // Require strict equality (=== and !==)
    "no-trailing-spaces": "error", // Disallow trailing spaces
  },
};
