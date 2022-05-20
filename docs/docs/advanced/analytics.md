---
title: Analytics
date: 2021-03-26
---

::: info
These features are disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::

Now Google Analytics (via [plugin-google-analytics](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html)) and Baidu Tongji (via [plugin-baidu-tongji](/docs/plugins/baidu-tongji.html)) are supported.


### Google Analytics

Paste the tracking code offered by [Google Analytics](https://www.google.com/analytics/) here:

```js
theme: gungnirTheme({
  themePlugins: {
    ga: "your-tracking-code"
  }
})
```


### Baidu Tongji

Paste the tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login) here:

```js
theme: gungnirTheme({
  themePlugins: {
    ba: "your-tracking-code"
  }
})
```
