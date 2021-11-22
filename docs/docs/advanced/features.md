---
title: More Features
date: 2021-03-26
---

All of the features mentioned in this page are disabled by default (except reading time). You should enable the features you want to use in `.vuepress/config.js` following the instructions on this page.

::: info
Code related to the disabled features will not be included in your site's bundle files.
:::


## Comment

[Vssue](https://vssue.js.org/) is supported as the third party comment system. Vssue works by storing comments of your static pages on the issue system of code hosting platforms like Github, Gitlab, Bitbucket, Gitee and Gitea.

A simple configuration for a Github-based comment system is:

```js
themeConfig: {
  comment: {
    platform: "github",
    repo: "gitalk-comments",  // Name of the Github repo for storing comments
    owner: "This-is-an-Apple",  // Owner of the above mentioned repo
    clientId: "your-client-id",  // OAuth App Client ID
    clientSecret: "client-secret"  // OAuth App Client Secret
  }
}
```

If `platform` is not specified, then `github` will be used by default. If you prefer to another platform, its corresponding [api package](https://vssue.js.org/guide/supported-platforms.html) should be installed manually.

Refer to the [documentation of Vssue](https://vssue.js.org/guide/) for more information.


## Site Analytics

Now Google Analytics (via [plugin-google-analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)) and Baidu Tongji (via [plugin-baidu-tongji](/docs/plugins/baidu-tongji/)) are supported.

### Google Analytics

Paste the tracking code offered by [Google Analytics](https://www.google.com/analytics/) here:

```js
themeConfig: {
  analytics: {
    ga: "your-tracking-code"
  }
}
```

### Baidu Tongji

Paste the tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login) here:

```js
themeConfig: {
  analytics: {
    ba: "your-tracking-code"
  }
}
```

## RSS

[plugin-rss](/docs/plugins/rss/) is used to generate the RSS file `./rss.xml` automatically. It can be cofigurated by:

```js
themeConfig: {
  rss: {
    site_url: "https://zxh.io",  // Site URL (required)
    copyright: "Renovamen 2018-2021",  // Copyright (optional)
    count: 20,  // How many articles to be shown on RSS (optional)
    filter: (frontmatter) => { return [true|false] },  // Post filter (optional)
  }
}
```

Check [RSS file of this site](/rss.xml) for an example.


## Reading Time

The reading time estimation will be shown on the head of the article by default, supported by [plugin-reading-time](/docs/plugins/reading-time/).

```js
themeConfig: {
  readingTime: {
    excludes: ['/url1', '/url2/.*'],  // Paths of exclude pages (default: ["/tags/.*", "/links"])
    wordsPerMinuteCN: 500,  // Number of Chinese words per minute a user can read (default: 300)
    wordsPerMinuteEN: 200,  // Number of English words per minute a user can read (default: 160)
    excludeCodeBlock: true,  // Exclude all content inside code blocks or not (default: false)
    excludeTexBlock: true    // Exclude all content inside tex blocks or not (default: false)
  }
}
```

You can override reading time in the `frontmatter` of each post by:

```yaml
title: Hello Word
readingTime: { minutes: 3 }
```

Or if you don't want this feature:

```js
themeConfig: {
  readingTime: false
}
```


## Hitokoto

```js
themeConfig: {
  hitokoto: true
}
```

A Hitokoto bubble will appear on the home page when `hitokoto` is set to `true` and your mouse cursor is hovered over the avatar:

![hitokoto](/img/docs/hitokoto-bubble.jpg)

Specify `hitokoto.api` to set the query string or use other APIs:

```js
themeConfig: {
  hitokoto: {
    api: "https://v1.hitokoto.cn/?c=i"
  }
}
```


## Math Rendering

Enable KaTeX to render mathematical formulas in articles (supported by [plugin-katex](/docs/plugins/katex/)):

```js
themeConfig: {
  katex: true
}
```

**Example:**

Inline math: E = mc^2

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$


::: details Code
```
Inline math: E = mc^2

Display math:

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$
```
:::

[Here](https://katex.org/docs/supported.html) is a list of TeX functions supported by KaTeX.


## Charts

Create interactive charts in Markdown easily.


### Chart.js

Use JavaScript charting library [Chart.js](https://www.chartjs.org) in Markdown via [plugin-chart](/docs/plugins/chart/):

```js
themeConfig: {
  chartjs: true
}
```

The token info of the code block should be `chart`, for example:

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

::: details Code
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
The **key** should be in quotes, or some unexpected errors will occured.
:::

Refer to the [documentation of Chart.js](https://www.chartjs.org/docs/latest/) for more information.


### Mermaid

Use [Mermaid](https://mermaid-js.github.io) via [plugin-mermaid](/docs/plugins/mermaid/) to create complex diagrams in Markdown:

```js
themeConfig: {
  mermaid: true
}
```

The token info of the code block should be `mermaid`, for example:

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details Code
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

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.


### roughViz.js

Use [roughViz.js](https://github.com/jwilber/roughViz) via [plugin-roughviz](/docs/plugins/roughviz/) to create sketchy/hand-drawn styled charts in Markdown:

```js
themeConfig: {
  roughviz: true
}
```

roughViz.js supports the following 7 chart types:

- Bar (`bar`)
- Horizontal Bar (`barh`)
- Donut (`donut`)
- Line (`line`)
- Pie (`pie`)
- Scatter (`scater`)
- Stacked Bar (`stackedbar`)

So the format of the code block's token info should be `roughviz-{ chart-type }`. For example, to draw a Donut chart:

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

::: details Code
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

To load a local `csv` file, a feasible way is to put your `csv` file under `.vuepress/public/` folder (`.vuepress/public/csv/flavors.csv` for example), then:

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

Refer to the [documentation of roughViz.js](https://github.com/jwilber/roughViz) for more information.


<!-- ### markmap

Use [markmap](https://github.com/gera2ld/markmap) via [plugin-markmap](/docs/plugins/markmap/) to create creating mind map in Markdown:

```js
themeConfig: {
  markmap: true
}
```

The token info of the code block should be `markmap`, for example:

```markmap
# Fruit

## Red

- Apple
- Cherry

## Yellow

- Lemon
- Banana
```

::: details Code
~~~
```markmap
# Fruit

## Red

- Apple
- Cherry

## Yellow

- Lemon
- Banana
```
~~~
:::

Refer to the [documentation of markmap](https://markmap.js.org/repl) for more information.

::: danger
Theoretically, using code blocks highlighted by [Prism.js](https://prismjs.com/) in markmap is also supported (see [here](https://markmap.js.org/repl)). However, markmap will import syntax highlighting styles if code blocks are used, which are conflited with this theme's highlighting styles. So you'd better not use code blocks in this plugin (before I find out an appropriate solution).
::: -->


## Markdown Enhancements

[plugin-md-plus](/plugins/md-plus) is used for adding more syntax in Markdown. Now supports:

- Footnote
- Mark

You can enable all features simply by:

```js
themeConfig: {
  mdPlus: {
    all: true,  // enable all features
  }
}
```

or enable them separately:

```js
themeConfig: {
  mdPlus: {
    footnote: true,  // Footnote
    mark: true  // Mark
  }
}
```

### Footnote

Add footnotes for text[^1]

::: details Syntax
```
Add footnotes for text[^1]

[^1]: Write your footnote here.
```
:::

### Mark

Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."

::: details Syntax
```
Yes, it's ==nine fifteen==.
```
:::

---

[^1]: Write your footnote here.
