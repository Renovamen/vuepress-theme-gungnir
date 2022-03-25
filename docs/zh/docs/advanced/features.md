---
title: 更多功能及配置
date: 2021-03-26
---

本节中的所有功能（除了阅读时长估计以外）默认都是不启用的，所以需要按照下述配置方式在 `.vuepress/config.js` 中启用你想要使用的功能。

::: info
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


## 评论

评论系统使用了基于 [GitHub Discussions](https://docs.github.com/en/discussions) 的 [Giscus](https://github.com/giscus/giscus)。首先你需要：

- 建一个公开的 Github 仓库并[启用 Discussions](https://docs.github.com/cn/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)
- 安装 [Giscus app](https://github.com/apps/giscus)，在选择仓库时至少要把上述仓库选进去
- 查看 [Giscus 官网](https://giscus.app)并在上面生成你的 repo id、category id 以及别的必要信息

然后：

```js
themeConfig: {
  themePlugins: {
    giscus: {
      repo: "[仓库]",  // 必须，string，格式：user_name/repo_name
      repoId: "[仓库 ID]",  // 必须，string，在 Giscus 官网上生成
      category: "[discussion 分类名]",  // 必须，string
      categoryId: "[discussion 分类 ID]",  // 必须，string，在 Giscus 官网上生成
      mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
      reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
      lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
      lazyLoad: true,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
      crossorigin: "[crossorigin]",  // 可选，string，default="anonymous"
      theme: "[light 模式主题]",  // 可选，string，default="light"
      darkTheme: "[dark 模式主题]"  // 可选，string，default="dark_dimmed"
    }
  }
}
```

其中，`theme` 和 `darkTheme` 项可以传入[自定义主题](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme)（一个 CSS 文件的 URL）。

参考：[plugin-giscus](/zh/docs/plugins/giscus.md)


## 站点统计

目前支持谷歌统计（基于插件 [plugin-google-analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)）和百度统计（基于插件 [plugin-baidu-tongji](/zh/docs/plugins/baidu-tongji/)）。

### 谷歌统计

需要去[谷歌统计](https://www.google.com/analytics/)官网上申请一个跟踪代码，然后填入配置：

```js
themeConfig: {
  themePlugins: {
    ga: "your-tracking-code"
  }
}
```

### 百度统计

需要去[百度统计](https://tongji.baidu.com/web/welcome/login)官网上申请一个跟踪代码，然后填入配置：

```js
themeConfig: {
  themePlugins: {
    ba: "your-tracking-code"
  }
}
```

## RSS

通过插件 [plugin-rss](/zh/docs/plugins/rss/) 来提供 RSS 支持，生成的文件路径为 `./rss.xml`。插件配置：

```js
themeConfig: {
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
}
```

[这里](/rss.xml)是本站的 RSS 文件。


## 阅读时长估计

主题默认在文章头部显示估计出的阅读时长，该功能基于插件 [plugin-reading-time](/zh/docs/plugins/reading-time/)。

可以传入一些配置项来配置这个插件：

```js
themeConfig: {
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
}
```

也可以在文章的 `frontmatter` 中强行重写阅读时长：

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```

如果你想禁用这个功能：

```js
themeConfig: {
  themePlugins: {
    readingTime: false
  }
}
```


## 一言

```js
themeConfig: {
  hitokoto: true
}
```

将 `hitokoto` 项设置为 `true` 可以开启首页的[一言](https://hitokoto.cn/)气泡，将鼠标悬浮在头像上气泡就会显示出来：

![hitokoto](/img/docs/hitokoto-bubble.jpg)

如果你想更改一言的请求参数，或想使用其他的接口，可以：

```js
themeConfig: {
  hitokoto: "https://v1.hitokoto.cn?c=i"  // 只返回诗词
}
```
