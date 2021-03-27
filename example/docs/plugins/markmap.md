---
title: plugin-markmap
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-markmap" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-markmap.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/markmap" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--markmap-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/markmap/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

Plugin `vuepress-plugin-markmap` for adding [markmap](https://github.com/gera2ld/markmap) to [VuePress](https://vuepress.vuejs.org/) to create mind maps in Markdown.


## Install

```bash
yarn add vuepress-plugin-markmap
# or
npm install vuepress-plugin-markmap
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-markmap'
    ]
  ]
}
```


## Usage

The token info of the code block should be `markmap`, for example:

```markmap
# Fruit

## Red

- Apple
- Cherry

## Yellow

- Lemon
- Banana
```

::: details Code
~~~
```markmap
# Fruit

## Red

- Apple
- Cherry

## Yellow

- Lemon
- Banana
```
~~~
:::

Refer to the [documentation of markmap](https://markmap.js.org/repl) for more information.

::: danger
Theoretically, using code blocks highlighted by [Prism.js](https://prismjs.com/) in markmap is also supported (see [here](https://markmap.js.org/repl)). However, markmap will import syntax highlighting styles if code blocks are used, which are conflited with this theme's highlighting styles. So you'd better not use code blocks in this plugin (before I find out an appropriate solution).
:::


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/markmap/LICENSE)
