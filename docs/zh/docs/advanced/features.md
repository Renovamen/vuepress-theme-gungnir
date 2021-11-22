---
title: 更多功能及配置
date: 2021-03-26
---

本节中的所有功能（除了阅读时长估计以外）默认都是不启用的，所以需要按照下述配置方式在 `.vuepress/config.js` 中启用你想要使用的功能。

::: info
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


## 评论

评论功能基于 [Vssue](https://vssue.js.org/)。Vssue 支持将评论存储在 Github、Gitlab、Bitbucket、Gitee 和 Gitea 平台的 Issue 系统中。

一个简单的基于 Github 的评论配置为：

```js
themeConfig: {
  comment: {
    platform: "github",
    owner: "This-is-an-Apple",  // 用于放评论的仓库的拥有者 ID
    repo: "gitalk-comments",  // 用于放评论的仓库名
    clientId: "your-client-id",  // OAuth App Client ID
    clientSecret: "client-secret"  // OAuth App Client Secret
  }
}
```

如果不指定 `platform` 项，主题会把 Github 作为默认平台。如果想要使用 Github 以外的平台，则还需要手动安装对应的 [api 包](https://vssue.js.org/zh/guide/supported-platforms.html)。

其他详细说明可以参考 [Vssue 文档](https://vssue.js.org/zh/guide/)。


## 站点统计

目前支持谷歌统计（基于插件 [plugin-google-analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)）和百度统计（基于插件 [plugin-baidu-tongji](/zh/docs/plugins/baidu-tongji/)）。

### 谷歌统计

需要去[谷歌统计](https://www.google.com/analytics/)官网上申请一个跟踪代码，然后填入配置：

```js
themeConfig: {
  analytics: {
    ga: "your-tracking-code"
  }
}
```

### 百度统计

需要去[百度统计](https://tongji.baidu.com/web/welcome/login)官网上申请一个跟踪代码，然后填入配置：

```js
themeConfig: {
  analytics: {
    ba: "your-tracking-code"
  }
}
```

## RSS

通过插件 [plugin-rss](/zh/docs/plugins/rss/) 来提供 RSS 支持，生成的文件路径为 `./rss.xml`。插件配置：

```js
themeConfig: {
  rss: {
    site_url: "https://zxh.io",  // 网站链接 （必须）
    copyright: "Renovamen 2018-2021",  // 版权信息（可选）
    count: 20,  // 需要在 rss 上显示多少篇文章（可选）
    filter: (frontmatter) => { return [true|false] },  // 文章筛选函数（可选）
  }
}
```

[这里](/rss.xml)是本站的 RSS 文件。

## 阅读时长估计

主题默认在文章头部显示估计出的阅读时长，该功能基于插件 [plugin-reading-time](/zh/docs/plugins/reading-time/)。

可以传入一些配置项来配置这个插件：

```js
themeConfig: {
  readingTime: {
    excludes: ['/url1', '/url2/.*'],  // 不需要进行统计的页面路径，默认为 ["/tags/.*", "/links"]
    wordsPerMinuteCN: 500,  // 一分钟可以阅读多少个中文字符，默认为 300
    wordsPerMinuteEN: 200,  // 一分钟可以阅读多少个英文字符，默认为 160
    excludeCodeBlock: true,  // 是否排除所有代码块内的字符，默认为 false
    excludeTexBlock: true    // 是否排除所有公式块内的字符，默认为 false
  }
}
```

也可以在文章的 `frontmatter` 中强行重写阅读时长：

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```


## 一言

```js
themeConfig: {
  hitokoto: true
}
```

将 `hitokoto` 项设置为 `true` 可以开启首页的一言气泡，将鼠标悬浮在头像上气泡就会显示出来：

![hitokoto](/img/docs/hitokoto-bubble.jpg)

如果你想更改一言的请求参数，或想使用其他的接口，可以指定 `hitokoto.api` 项：

```js
themeConfig: {
  hitokoto: {
    api: "https://v1.hitokoto.cn/?c=i"  // 只返回诗词
  }
}
```


## 数学公式渲染

通过插件 [plugin-katex](/zh/docs/plugins/katex/) 来提供公式渲染支持。启用 KaTeX：

```js
themeConfig: {
  katex: true
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
  chartjs: true
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
  mermaid: true
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


### roughViz.js

通过插件 [plugin-roughviz](/zh/docs/plugins/roughviz/) 来在 Markdown 中使用 [roughViz.js](https://github.com/jwilber/roughViz)。与别的画出来的图看上去很标准的图表库不同，roughViz.js 的特性是绘制手绘样式的图表。

```js
themeConfig: {
  roughviz: true
}
```

roughViz.js 支持以下七种图表类型：

- Bar (`bar`)
- Horizontal Bar (`barh`)
- Donut (`donut`)
- Line (`line`)
- Pie (`pie`)
- Scatter (`scater`)
- Stacked Bar (`stackedbar`)

因此代码块的 token info 需要为 `roughviz-{ 你想创建的图表类型 }`。比如想要创建一个 Donut 图表：

```roughviz-donut
{
  "data": {
    "labels": ["North", "South", "East", "West"],
    "values": [10, 5, 8, 3]
  },
  "title": "Regions",
  "colors": ["red", "orange", "blue", "skyblue"],
  "roughness": 4
}
```

::: details 代码
~~~
```roughviz-donut
{
  "data": {
    "labels": ["North", "South", "East", "West"],
    "values": [10, 5, 8, 3]
  },
  "title": "Regions",
  "colors": ["red", "orange", "blue", "skyblue"],
  "roughness": 4
}
```
~~~
:::

如果希望加载本地 `csv` 文件中的数据，一种可行的方法是把 `csv` 文件放在 `.vuepress/public/` 文件夹下（假设路径为 `.vuepress/public/csv/flavors.csv`），然后：

::: details Code
~~~
```roughviz-bar
{
  "data": "/csv/flavors.csv",
  "labels": "flavor",
  "values": "price"
}
```
~~~
:::

```roughviz-bar
{
  "data": "/csv/flavors.csv",
  "labels": "flavor",
  "values": "price"
}
```

更详细的用法可以参考 [roughViz.js 文档](https://github.com/jwilber/roughViz)。


<!-- ### markmap

通过插件 [plugin-markmap](/zh/docs/plugins/markmap/) 来在 Markdown 中使用 [markmap](https://github.com/gera2ld/markmap)，从而在文章中加入思维导图。

```js
themeConfig: {
  markmap: true
}
```

代码块的 token info 需要为 `markmap`，例子：

```markmap
# 水果

## 红的

- 苹果
- 樱桃

## 黄的

- 柠檬
- 香蕉
```

::: details 代码
~~~
```markmap
# 水果

## 红的

- 苹果
- 樱桃

## 黄的

- 柠檬
- 香蕉
```
~~~
:::

更详细的用法可以参考 [markmap 文档](https://markmap.js.org/repl)。

::: danger
markmap 还支持在思维导图中插入代码块（[见这里](https://markmap.js.org/repl)），并使用 [Prism.js](https://prismjs.com/) 进行高亮。但如果插入代码块，markmap 就会引入代码块样式文件，这会与主题本身的代码块样式冲突。我目前还没有想出这个问题的解决方案，所以请不要在本插件中使用代码块。
::: -->


## Markdown 增强样式

通过插件 [plugin-md-plus](/zh/docs/plugins/md-plus/) 来在 Markdown 中加入更多语法和功能。目前支持：

- 脚注
- 高亮标记

你可以一键启用所有功能：

```js
themeConfig: {
  mdPlus: {
    all: true,  // 全部启用
  }
}
```

也可以分别启用：

```js
themeConfig: {
  mdPlus: {
    footnote: true,  // 脚注
    mark: true  // 高亮标记
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
