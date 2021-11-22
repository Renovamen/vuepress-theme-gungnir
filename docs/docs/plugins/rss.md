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

A plugin for adding RSS to [VuePress](https://vuepress.vuejs.org/) theme Gungnir, forked from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).

::: warning
This plugin is only guaranted to work on VuePress theme Gungnir. It may not work on other themes.
:::


## Install

```bash
yarn add @renovamen/vuepress-plugin-rss
# or
npm install @renovamen/vuepress-plugin-rss
```


## Configuration

Configurate it in your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-rss', {
        site_url: "https://zxh.io",  // Site URL (required)
        copyright: "Renovamen 2018-2021",  // Copyright (optional)
        count: 20,  // How many articles to be shown on RSS (optional)
        filter: (frontmatter) => { return [true|false] },  // Post filter (optional)
      }
    ]
  ]
}
```


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/rss/LICENSE)
