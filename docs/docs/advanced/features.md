---
title: More Features
date: 2021-03-26
---

All of the features mentioned in this page are disabled by default (except reading time). You need to enable the features you want to use in `.vuepress/config.js` following the instructions on this page.

::: info
Code related to the disabled features will not be included in your site's bundle files.
:::


## Comment

[Giscus](https://github.com/giscus/giscus) is supported as the third party comment system, which is powered by [GitHub Discussions](https://docs.github.com/en/discussions). First, you need to:

- Create a public Github repository and [enable Discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) for it
- Install [Giscus app](https://github.com/apps/giscus)
- Browse [Giscus's website](https://giscus.app/) and generate your repo id, category id and other things on the website

Then, configure it by:

```js
themeConfig: {
  themePlugins: {
    giscus: {
      repo: "[repo]",  // required, string, format: user_name/repo_name
      repoId: "[repo id]",  // required, string, generate it on Giscus's website
      category: "[category name]",  // required, string
      categoryId: "[category id]",  // required, string, generate it on Giscus's website
      mapping: "[page <-> discussion mapping]",  // optional, string, default="title"
      reactionsEnabled: "[enable reactions or not?]",  // optional, boolean, default=true
      lang: "[language]",  // optional, string, default="auto" (follow the site's language, fall to "en" if your site's language is not supported by Giscus)
      lazyLoad: true,  // optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)
      crossorigin: "[crossorigin]",  // optional, string, default="anonymous"
      theme: "[theme for light mode]",  // optional, string, default="light"
      darkTheme: "[theme for dark mode]"  // optional, string, default="dark_dimmed"
    }
  }
}
```

`theme` and `darkTheme` option could be a [custom theme](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme) (a URL to a CSS file).

Refer to the [plugin-giscus](/zh/docs/plugins/giscus.html) for more information.


## Site Analytics

Now Google Analytics (via [plugin-google-analytics](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html)) and Baidu Tongji (via [plugin-baidu-tongji](/docs/plugins/baidu-tongji.html)) are supported.

### Google Analytics

Paste the tracking code offered by [Google Analytics](https://www.google.com/analytics/) here:

```js
themeConfig: {
  themePlugins: {
    ga: "your-tracking-code"
  }
}
```

### Baidu Tongji

Paste the tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login) here:

```js
themeConfig: {
  themePlugins: {
    ba: "your-tracking-code"
  }
}
```

## RSS

[plugin-rss](/docs/plugins/rss.html) is used to generate the RSS file `./rss.xml` automatically. It can be cofigurated by:

```js
themeConfig: {
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
}
```

Check [RSS file of this site](/rss.xml) for an example.


## Reading Time

The reading time estimation will be shown on the head of the article by default, supported by [plugin-reading-time](/docs/plugins/reading-time/).

```js
themeConfig: {
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
}
```

You can override reading time in the front matter of each post by:

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```

Or if you want to disable this feature:

```js
themeConfig: {
  themePlugins: {
    readingTime: false
  }
}
```


## Hitokoto

```js
themeConfig: {
  hitokoto: true
}
```

A [Hitokoto](https://hitokoto.cn/) bubble will appear on the home page when `hitokoto` is set to `true` and your mouse cursor is hovered over the avatar:

![hitokoto](/img/docs/hitokoto-bubble.jpg)

You can also customize the requested API:

```js
themeConfig: {
  hitokoto: "https://v1.hitokoto.cn?c=i"
}
```
