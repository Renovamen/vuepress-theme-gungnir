const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// @example: Branch Name: feature/issue_36 => #36
const issue = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trim()
  .split("_")[1];

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
    customScopesAlign: "top",
    customIssuePrefixsAlign: !issue ? "top" : "bottom",
    defaultIssues: !issue ? "" : `#${issue}`,
    issuePrefixs: [
      { value: "link", name: "link:     Link to ISSUES" },
      { value: "closed", name: "closed:   ISSUES has been processed" }
    ]
  }
};
