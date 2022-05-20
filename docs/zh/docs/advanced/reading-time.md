---
title: 阅读时长
date: 2021-03-26
---

::: info
默认启用该功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::

主题默认在文章头部显示估计出的阅读时长，该功能基于插件 [plugin-reading-time](/zh/docs/plugins/reading-time/)。


## 配置

```js
theme: gungnirTheme({
  themePlugins: {
    readingTime: {
      excludes: ['/url1', '/url2/.*'],  // 不需要进行统计的页面路径（可选，默认：[]）
      includes : ["/url1", "/url2/.*"],  // 需要进行统计的页面路径，如果指定了这一项，那么 `excludes` 项无效（可选，默认：[]）
      wordsPerMinuteCN: 500,  // 一分钟可以阅读多少个中文字符（可选，默认：300）
      wordsPerMinuteEN: 200,  // 一分钟可以阅读多少个英文字符（可选，默认：160）
      excludeCodeBlock: true,  // 是否排除所有代码块内的字符（可选，默认：false）
      excludeTexBlock: true    // 是否排除所有公式块内的字符（可选，默认：false）
    }
  }
})
```


## 重写

可以在文章的 `frontmatter` 中强行重写阅读时长：

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```


## 禁用

禁用该功能：

```js
theme: gungnirTheme({
  themePlugins: {
    readingTime: false
  }
})
```
