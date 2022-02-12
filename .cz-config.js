"use strict";
const fs = require("fs");
const path = require("path");

const plugins = fs
  .readdirSync(path.resolve(__dirname, "packages/plugins"))
  .map((value) => {
    return { name: `plugin-${value}` };
  });

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     新特性    | A new feature'},
    {value: 'fix',      name: 'fix:      修复缺陷  | A bug fix'},
    {value: 'docs',     name: 'docs:     文档更新  | Documentation only changes'},
    {value: 'style',    name: 'style:    样式更改  | Changes that do not affect the meaning of the code'},
    {value: 'refactor', name: 'refactor: 代码重构  | A code change that neither fixes a bug nor adds a feature'},
    {value: 'perf',     name: 'perf:     性能提升  | A code change that improves performance'},
    {value: 'test',     name: 'test:     测试相关  | Adding missing tests or correcting existing tests'},
    {value: 'build',    name: 'build:    构建相关  | Changes that affect the build system or external dependencies (example scopes: gulp, webpack, npm)'},
    {value: 'ci',       name: 'ci:       命令行工具| Changes to our CI configuration files and scripts'},
    {value: 'revert',   name: 'revert:   回退代码  | Revert to a commit'},
    {value: 'chore',    name: 'chore:    其他修改  | Other changes that do not modify src or test files'},
  ],

  scopes: [{ name: "theme" }, ...plugins],

  // 针对特别类型覆盖scopes. 例如.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择你的提交类型    | Select the type of change that you\'re committing:',
    scope: '选择一个模块范围(可选) | Denote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: '自定义修改模块名 | Denote the SCOPE of this change:',
    subject: '简短说明 | Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: '详细说明(可选) 使用"|"可换行 \n  Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: '非兼容性说明(可选) | List any BREAKING CHANGES (optional):\n',
    footer: '列举关联issue (可选) 例如: link #22, closed #31 \n  List any ISSUES CLOSED by this change (optional) :\n',
    confirmCommit: '是否提交 | Are you sure you want to proceed with the commit above?'
  },
  footerPrefix: "",
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],

  // limit subject length
  subjectLimit: 100
};
