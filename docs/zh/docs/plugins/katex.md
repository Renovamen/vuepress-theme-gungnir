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

`@renovamen/vuepress-plugin-katex@next` 插件，用于在 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 的 Markdown 中使用 [KaTeX](https://katex.org/)，从而在文章中支持数学公式渲染。该插件基于 [waylonflinn/markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex)。

KaTeX 是一种比 MathJax 更快的公式渲染引擎（速度比较可以参考[这里](https://www.intmath.com/cg5/katex-mathjax-comparison.php)）。


## 安装

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


然后在 `.vuepress/config.js` 中引入这个插件：

```js
const { katexPlugin } = require("@renovamen/vuepress-plugin-katex");

module.exports = {
  plugins: [
    katexPlugin()
  ]
}
```

也可以传入一些 KaTeX 的[配置项](https://katex.org/docs/options.html)，如：

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


## 使用

[这里](https://katex.org/docs/supported.html)是所有 KaTex 支持的公式列表。

例子：

行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$

::: details 代码
```
行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/katex/LICENSE)
