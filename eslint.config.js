// eslint.config.js
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["eslint.config.js"], // 👈 don't lint itself
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      indent: ["error", 2],
    },
  },
];
