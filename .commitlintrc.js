const fs = require("fs");
const path = require("path");

const plugins = fs
  .readdirSync(path.resolve(__dirname, "packages/plugins"))
  .map((value) => `plugin-${value}`);

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["theme", ...plugins]]
  },
  prompt: {
    customScopesAlign: "top"
  }
};
