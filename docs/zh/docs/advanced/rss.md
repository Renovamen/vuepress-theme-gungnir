---
title: RSS
date: 2021-03-26
---

::: info
默认不启用该功能。
:::


通过插件 [plugin-rss](/zh/docs/plugins/rss/) 来提供 RSS 支持，生成的文件路径为 `./rss.xml`。插件配置：

```js
theme: gungnirTheme({
  themePlugins: {
    rss: {
      siteURL: "https://zxh.io",  // 网站链接 （必须）
      title: "西伯利亚大恶龙的博客",  // 网站标题（可选，默认：`themeConfig.title`）
      description: "一个由 VuePress 和 Gungnir 强力驱动的博客",  // 网站描述（可选，默认：""）
      copyright: "Renovamen 2018-2021",  // 版权信息（可选，默认：""）
      count: 20,  // 需要在生成的 RSS 文件上显示多少篇文章（可选，默认：20）
      filter: (page) => true  // 文章筛选函数（可选，默认：(page) => true）
    }
  }
})
```

[这里](/rss.xml)是本站的 RSS 文件。
