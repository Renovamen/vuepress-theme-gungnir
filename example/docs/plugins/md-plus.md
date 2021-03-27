---
title: plugin-md-plus
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-md-plus" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-md-plus.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/md-plus" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--md--plus-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/md-plus/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-md-plus` for adding more syntax to Markdown. Now supports:

- Footnote (based on [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
- Mark (based on [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))


## Install

```bash
yarn add @renovamen/vuepress-plugin-md-plus
# or
npm install @renovamen/vuepress-plugin-md-plus
```


## Configuration

Then configurate it in your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-md-plus', {
        'all': false,  // Enable all features, this will override all the following options (default: false)
        'footnote': false,  // Enable footnote (default: false)
        'mark': false  //Enable mark (default: false)
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
Yes, it's ==nine fifteen==.
```
:::

---

[^1]: Write your footnote here.
