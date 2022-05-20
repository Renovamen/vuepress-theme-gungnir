---
title: Reading Time
date: 2021-03-26
---

::: info
This feature is enabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::

The reading time estimation will be shown on the head of the article by default, supported by [plugin-reading-time](/docs/plugins/reading-time/).


## Configuration

```js
theme: gungnirTheme({
  themePlugins: {
    readingTime: {
      excludes: ["/url1", "/url2/.*"],  // exclude pages by their path via a regular expression (optional, default: [])
      includes : ["/url1", "/url2/.*"],  // include pages by their path via a regular expression, if `includes` is specified, `excludes` will be ignored (optional, default: [])
      wordsPerMinuteCN: 500,  // number of Chinese words per minute a user can read (optional, default: 300)
      wordsPerMinuteEN: 200,  // number of English words per minute a user can read (optional, default: 160)
      excludeCodeBlock: true,  // exclude all content inside code blocks or not (optional, default: false)
      excludeTexBlock: true    // exclude all content inside tex blocks or not (optional, default: false)
    }
  }
})
```


## Override

You can override reading time in the front matter of each article by:

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```


## Disable

Or if you want to disable this feature:

```js
theme: gungnirTheme({
  themePlugins: {
    readingTime: false
  }
})
```
