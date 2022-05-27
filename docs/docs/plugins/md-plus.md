---
title: plugin-md-plus
date: 2021-12-27
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-md-plus/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-md-plus/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/md-plus" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--md--plus-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/md-plus/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

A plugin for enhancing Markdown in [VuePress 2](https://v2.vuepress.vuejs.org/). Now the following features are supported:

- footnote (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
- mark (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-mark))
- Subscript (supported by [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))
- Superscript (supported by [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))

## Install

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-md-plus@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-md-plus@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-md-plus@next
```

</CodeGroupItem>
</CodeGroup>

## Configuration

You can enable all features simply by:

```js
const { mdPlusPlugin } = require("@renovamen/vuepress-plugin-md-plus");

module.exports = {
  plugins: [
    mdPlusPlugin({
      all: true // Enable all features or not, this will rewrite all the following options (default: false)
    })
  ]
};
```

or enable them separately:

```js
module.exports = {
  plugins: [
    mdPlusPlugin({
      footnote: true, // Enable footnote or not (default: false)
      mark: true // Enable mark or not (default: false)
      sub: true // Enable Subscript or not (default: false)
      sup: true // Enable Superscript or not (default: false)
    })
  ]
};
```

## Usage

### Footnote

Add footnotes for text[^1]

::: details Syntax

```
Add footnotes for text[^1]

[^1]: Write your footnote here.
```

:::

### Mark

Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."

::: details Syntax

```
Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."
```

:::

### Subscript

H~2~O

::: details Syntax

```markdown
H~2~O
```

:::

### Superscript

29^th^

::: details Syntax

```
29^th^
```

:::

---

[^1]: Write your footnote here.
