---
title: 站点统计
date: 2021-03-26
---

::: info
默认不启用这些功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


目前支持谷歌统计（基于插件 [plugin-google-analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)）和百度统计（基于插件 [plugin-baidu-tongji](/zh/docs/plugins/baidu-tongji/)）。


## 谷歌统计

需要去[谷歌统计](https://www.google.com/analytics/)官网上申请一个跟踪代码，然后填入配置：

```js
theme: gungnirTheme({
  themePlugins: {
    ga: "your-tracking-code"
  }
})
```

## 百度统计

需要去[百度统计](https://tongji.baidu.com/web/welcome/login)官网上申请一个跟踪代码，然后填入配置：

```js
theme: gungnirTheme({
  themePlugins: {
    ba: "your-tracking-code"
  }
})
```
