---
title: plugin-rss
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-rss" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-rss.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/rss" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--rss-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

`@renovamen/vuepress-plugin-rss` 插件，用于为 VuePress 主题 Gungnir 提供 RSS 支持。修改自 [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss)。

::: warning
该插件仅能保证在 VuePress 主题 Gungnir 上正常工作，在别的 VuePress 主题上可能会无效。
:::


## 安装

```bash
yarn add @renovamen/vuepress-plugin-rss
# or
npm install @renovamen/vuepress-plugin-rss
```


## 配置

在 `.vuepress/config.js` 中配置插件：

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-rss', {
        site_url: "https://zxh.io",  // 网站链接 （必须）
        copyright: "Renovamen 2018-2021",  // 版权信息（可选）
        count: 20,  // 需要在 rss 上显示多少篇文章（可选）
        filter: (frontmatter) => { return [true|false] },  // 文章筛选函数（可选）
      }
    ]
  ]
}
```


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE)
