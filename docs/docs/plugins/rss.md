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

A plugin for adding RSS to [VuePress 2](https://v2.vuepress.vuejs.org/) theme Gungnir, adapted from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).

::: warning
This plugin is only guaranted to work on VuePress theme Gungnir. It may not work on other themes.
:::


## Install

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


## Configuration

Configurate it in your `.vuepress/config.js`:

```js
const { rssPlugin } = require("@renovamen/vuepress-plugin-rss");

module.exports = {
  plugins: [
    rssPlugin({
      siteURL: "https://zxh.io",  // site URL (required)
      title: "Renovamen's blog",  // site title (optional, default: `themeConfig.title`)
      description: "A blog powered by VuePress and Gungnir",  // site description (optional, default: "")
      copyright: "Renovamen 2018-2022",  // site copyright (optional, default: "")
      count: 20,  // number of posts to be generated (optional, default: 20)
      filter: (page) => true  // filter function to choose which posts to be generated (optional, default: (page) => true)
    })
  ]
}
```


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE)
