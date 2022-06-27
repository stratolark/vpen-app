/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    // "@vue/eslint-config-prettier",
  ],
  rules: {
    // quotes: ["error", "single"],
    // prettier: {
    //   embeddedLanguageFormatting: "prefer-single-quotes",
    //   singleQuote: true,
    // },
  },
};
