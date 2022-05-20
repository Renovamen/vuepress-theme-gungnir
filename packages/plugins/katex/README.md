# @renovamen/vuepress-plugin-katex@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-katex/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-katex/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--katex-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/katex.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `@renovamen/vuepress-plugin-katex@next` for adding [KaTeX](https://katex.org/) to [VuePress 2](https://v2.vuepress.vuejs.org/) to support mathematical formulas rendering in Markdown. This plugin is based on [waylonflinn/markdown-it-katex](https://github.com/waylonflinn/markdown-it-katex).

[KaTeX](https://katex.org/) is a faster alternative to MathJax (see [here](https://www.intmath.com/cg5/katex-mathjax-comparison.php)).

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/katex.html)


&nbsp;

## Install

```bash
# pnpm
pnpm install @renovamen/vuepress-plugin-katex@next
# yarn
yarn add @renovamen/vuepress-plugin-katex@next
# npm
npm install @renovamen/vuepress-plugin-katex@next
```

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


&nbsp;

## Usage

[Here](https://katex.org/docs/supported.html) is a list of TeX functions supported by KaTeX.

```
Inline math: E = mc^2

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/katex/LICENSE)
