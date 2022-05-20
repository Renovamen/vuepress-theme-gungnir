---
title: plugin-mermaid
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-mermaid/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/mermaid" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--mermaid-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

`@renovamen/vuepress-plugin-mermaid@next` 插件，用于在 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 的 Markdown 中使用 [Mermaid](https://mermaid-js.github.io)，从而在文章中加入流程图、状态图、时序图、甘特图等。


## 安装

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>
</CodeGroup>


然后在 `.vuepress/config.js` 中引入这个插件：

```js
const { mermaidPlugin } = require("@renovamen/vuepress-plugin-mermaid");

module.exports = {
  plugins: [
    mermaidPlugin()
  ]
}
```


## 配置项

### token

- 类型：`string`

- 默认值：`"mermaidjs"`

- 详情：自定义代码块的 token


### theme

- 类型：`string`

- 默认值：`"default"`

- 详情：主题（[这里](https://github.com/mermaid-js/mermaid/tree/develop/src/themes)是所有 Mermaid 支持的主题）


### darkTheme

- 类型：`string`

- 默认值：`"dark"`

- 详情：夜间模式主题，只在 [darkSelector](#darkselector) 和 [darkClass](#darkclass) 都被设置了的情况下有效


### darkSelector

- 类型：`string`

- 默认值：`undefined`

- 详情

  - 一个 CSS 选择器，插件会根据它选择一个 HTML 元素，然后通过 [darkClass](#darkclass) 来判断当前是否为夜间模式
  - 对于默认主题和 Gungnir 主题，这一项需要被设为 `html`


### darkClass

- 类型：`string`

- 默认值：`undefined`

- 详情

  - 一个类名，插件会根据它来判断当前是否为夜间模式
  - 对于默认主题和 Gungnir 主题，这一项需要被设为 `dark`


:::tip
在启用夜间模式时，默认主题和 Gungnir 主题会在 `html` 元素上添加一个类名 `dark`。

点击右下角的模式切换按钮，体验 Mermaid 的主题切换。
:::


## 使用

代码块的 token info 需要为 `mermaidjs`（如果你使用了自定义代码块 token，则需要为 `options.token`），例子：

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
