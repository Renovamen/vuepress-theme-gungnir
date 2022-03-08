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
- 安装 [Giscus app](https://github.com/apps/giscus)
- 查看 [Giscus 官网](https://giscus.app)并在上面生成你的 repo id、category id 以及别的必要信息

然后：

```js
themeConfig: {
  themePlugins: {
    repo: "[仓库]",  // 必须，string，格式：user_name/repo_name
    repoId: "[仓库 ID]",  // 必须，string，在 Giscus 官网上生成
    category: "[discussion 分类名]",  // 必须，string
    categoryId: "[discussion 分类 ID]",  // 必须，string，在 Giscus 官网上生成
    mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
    reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
    lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
    crossorigin: "[crossorigin]"  // 可选，string，default="anonymous"
  }
}
```

更多细节请参考 [plugin-giscus](/zh/docs/plugins/giscus.html)。


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


## 数学公式渲染

通过插件 [plugin-katex](/zh/docs/plugins/katex/) 来提供公式渲染支持。启用 KaTeX：

```js
themeConfig: {
  themePlugins: {
    katex: true
  }
}
```

例子：

行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$


::: details 代码
```
行内公式：$E = mc^2$

行块公式：

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::


## 图表

在 Markdown 中轻松插入一些可交互的图表。

### Chart.js

通过插件 [plugin-chart](/zh/docs/plugins/chart/) 来在 Markdown 中使用 JavaScript 图表库 [Chart.js](https://www.chartjs.org)：

```js
themeConfig: {
  themePlugins: {
    chartjs: true
  }
}
```

代码块的 token info 需要为 `chart`，例子：

```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [10, 20, 30],
      "backgroundColor": [
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(54, 162, 235)"
      ]
    }],
    "labels": ["Red", "Yellow", "Blue"]
  }
}
```

::: details 代码
~~~json
```chart
{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [10, 20, 30],
      "backgroundColor": [
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(54, 162, 235)"
      ]
    }],
    "labels": ["Red", "Yellow", "Blue"]
  }
}
```
~~~
:::

::: danger
key 值一定要加引号，否则会报错。
:::

更详细的用法可以参考 [Chart.js 文档](https://www.chartjs.org/docs/latest/)。


### Mermaid

通过插件 [plugin-mermaid](/zh/docs/plugins/mermaid/) 来在 Markdown 中使用 [Mermaid](https://mermaid-js.github.io)，从而在文章中加入流程图、状态图、时序图、甘特图等：

```js
themeConfig: {
  themePlugins: {
    mermaid: true
  }
}
```

代码块的 token info 需要为 `mermaid`，例子：

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details 代码
~~~
```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```
~~~
:::

更详细的用法可以参考 [Mermaid 文档](https://mermaid-js.github.io)。


## Markdown 增强样式

通过插件 [plugin-md-plus](/zh/docs/plugins/md-plus/) 来在 Markdown 中加入更多语法和功能。目前支持：

- 脚注
- 高亮标记

你可以一键启用所有功能：

```js
themeConfig: {
  themePlugins: {
    mdPlus: {
      all: true,  // 全部启用（默认：false）
    }
  }
}
```

也可以分别启用：

```js
themeConfig: {
  themePlugins: {
    mdPlus: {
      footnote: true,  // 脚注（默认：false）
      mark: true  // 高亮标记（默认：false）
    }
  }
}
```

### 脚注

给文字加上脚注[^1]

::: details 语法
```
给文字加上脚注[^1]

[^1]: 脚注内容
```
:::

### 高亮标记

高亮标记重要的内容：衬衫的价格是 ==九磅十五便士==

::: details 语法
```
衬衫的价格是 ==九磅十五便士==
```
:::

---

[^1]: 脚注内容
