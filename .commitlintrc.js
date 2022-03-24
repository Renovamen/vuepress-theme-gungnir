const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const plugins = fs
  .readdirSync(path.resolve(__dirname, "packages/plugins"))
  .map((value) => `plugin-${value}`);

// branch: feat_36 => #36
const issue = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trim()
  .split("_")[1];

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["theme", ...plugins]]
  },
  prompt: {
    customScopesAlign: "top",
    defaultIssues: () => (!issue ? "" : `#${issue}`)
  }
};
