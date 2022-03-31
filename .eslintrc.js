// Solve eslint plugins import problem https://github.com/microsoft/rushstack/tree/master/eslint/eslint-patch
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "@qameta/eslint-config",
};
