---
title: plugin-katex
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-katex/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-katex/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/katex" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--katex-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/katex/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-katex@next` for adding [KaTeX](https://katex.org/) to [VuePress 2](https://v2.vuepress.vuejs.org/) to support mathematical formulas rendering in Markdown. This plugin is based on [waylonflinn/markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex).

[KaTeX](https://katex.org/) is a faster alternative to MathJax (see [here](https://www.intmath.com/cg5/katex-mathjax-comparison.php)).


## Install

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-katex@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-katex@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-katex@next
```

</CodeGroupItem>
</CodeGroup>


Then add it to your `.vuepress/config.js`:

```js
const { katexPlugin } = require("@renovamen/vuepress-plugin-katex");

module.exports = {
  plugins: [
    katexPlugin()
  ]
}
```

You can also enable it with some [KaTeX options](https://katex.org/docs/options.html):

```js
const { katexPlugin } = require("@renovamen/vuepress-plugin-katex");

module.exports = {
  plugins: [
    katexPlugin({
      "throwOnError": false,
      "errorColor": "#cc0000"
    })
  ]
}
```


## Usage

[Here](https://katex.org/docs/supported.html) is a list of TeX functions supported by KaTeX.

**Example:**

Inline math: $E = mc^2$

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$


::: details Code
```
Inline math: E = mc^2

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/katex/LICENSE)
