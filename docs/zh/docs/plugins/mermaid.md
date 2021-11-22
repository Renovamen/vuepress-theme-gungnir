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

`@renovamen/vuepress-plugin-mermaid` 插件，用于在 VuePress 的 Markdown 中使用 [Mermaid](https://mermaid-js.github.io)，从而在文章中加入流程图、状态图、时序图、甘特图等。


## 安装

```bash
yarn add @renovamen/vuepress-plugin-mermaid
# or
npm install @renovamen/vuepress-plugin-mermaid
```

然后在 `.vuepress/config.js` 中引入这个插件：

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-mermaid'
    ]
  ]
}
```


## 使用

代码块的 token info 需要为 `mermaid`，例子：

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details 代码
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

更详细的用法可以参考 [Mermaid 文档](https://mermaid-js.github.io)。


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE)
