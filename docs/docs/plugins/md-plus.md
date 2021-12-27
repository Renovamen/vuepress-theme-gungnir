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


## Install

```bash
yarn add @renovamen/vuepress-plugin-md-plus@next
# or
npm install @renovamen/vuepress-plugin-md-plus@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-md-plus", {
        all: false,  // enable all features or not, this will rewrite all the following options
        footnote: true,  // enable footnote or not
        mark: true  // enable mark or not
      }
    ]
  ]
}
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

---

[^1]: Write your footnote here.
