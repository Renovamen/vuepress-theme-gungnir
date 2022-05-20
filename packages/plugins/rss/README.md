# @renovamen/vuepress-plugin-reading-time@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-rss/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-rss/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--rss-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/rss.html) [![license](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A plugin for adding RSS to [VuePress 2](https://v2.vuepress.vuejs.org/) theme Gungnir, adapted from [youngtailors/vuepress-plugin-rss](https://github.com/youngtailors/vuepress-plugin-rss).

**WARNING:** This plugin is only guaranted to work on VuePress theme Gungnir. It may not work on other themes.

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/rss.xml)


&nbsp;

## Install

```bash
# pnpm
pnpm install @renovamen/vuepress-plugin-rss@next
# yarn
yarn add @renovamen/vuepress-plugin-rss@next
# npm
npm install @renovamen/vuepress-plugin-rss@next
```


&nbsp;

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


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)
