---
title: plugin-rss
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-rss/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-rss/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/rss" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--rss-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

`@renovamen/vuepress-plugin-rss` 插件，用于为 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 主题 Gungnir 提供 RSS 支持。修改自 [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss)。

::: warning
该插件仅能保证在 VuePress 主题 Gungnir 上正常工作，在别的 VuePress 主题上可能会无效。
:::


## 安装

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-rss@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-rss@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-rss@next
```

</CodeGroupItem>
</CodeGroup>


## 配置

在 `.vuepress/config.js` 中配置插件：

```js
const { rssPlugin } = require("@renovamen/vuepress-plugin-rss");

module.exports = {
  plugins: [
    rssPlugin({
      siteURL: "https://zxh.io",  // 网站链接 （必须）
      title: "西伯利亚大恶龙的博客",  // 网站标题（可选，默认：`themeConfig.title`）
      description: "一个由 VuePress 和 Gungnir 强力驱动的博客",  // 网站描述（可选，默认：""）
      copyright: "Renovamen 2018-2021",  // 版权信息（可选，默认：""）
      count: 20,  // 需要在生成的 RSS 文件上显示多少篇文章（可选，默认：20）
      filter: (page) => true  // 文章筛选函数（可选，默认：(page) => true）
    })
  ]
}
```


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE)
