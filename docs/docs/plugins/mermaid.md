---
title: plugin-mermaid
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-mermaid.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/mermaid" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--mermaid-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-mermaid` for adding [Mermaid](https://mermaid-js.github.io) to [VuePress](https://vuepress.vuejs.org/) to create complex diagrams in Markdown.


## Install

```bash
yarn add @renovamen/vuepress-plugin-mermaid
# or
npm install @renovamen/vuepress-plugin-mermaid
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-mermaid'
    ]
  ]
}
```


## Usage

The token info of the code block should be `mermaid`, for example:

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details Code
~~~
```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```
~~~
:::

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE)
