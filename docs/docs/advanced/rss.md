---
title: RSS
date: 2021-03-26
---

::: info
This feature is disabled by default.
:::

[plugin-rss](/docs/plugins/rss.html) is used to generate the RSS file `./rss.xml` automatically. It can be cofigurated by:

```js
theme: gungnirTheme({
  themePlugins: {
    rss: {
      siteURL: "https://zxh.io",  // site URL (required)
      title: "Renovamen's blog",  // site title (optional, default: `themeConfig.title`)
      description: "A blog powered by VuePress and Gungnir",  // site description (optional, default: "")
      copyright: "Renovamen 2018-2022",  // site copyright (optional, default: "")
      count: 20,  // number of posts to be generated (optional, default: 20)
      filter: (page) => true  // filter function to choose which posts to be generated (optional, default: (page) => true)
    }
  }
})
```

Check [RSS file of this site](/rss.xml) for an example.
