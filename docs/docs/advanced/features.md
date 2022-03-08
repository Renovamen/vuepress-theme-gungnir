---
title: More Features
date: 2021-03-26
---

All of the features mentioned in this page are disabled by default (except reading time). You should enable the features you want to use in `.vuepress/config.js` following the instructions on this page.

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
      crossorigin: "[crossorigin]"  // optional, string, default="anonymous"
    }
  }
}
```

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


## Math Rendering

Enable KaTeX to render mathematical formulas in articles (supported by [plugin-katex](/docs/plugins/katex/)):

```js
themeConfig: {
  themePlugins: {
    katex: true
  }
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
  themePlugins: {
    chartjs: true
  }
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
  themePlugins: {
    mermaid: true
  }
}
```

The token info of the code block should be `mermaidjs`, for example:

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


## Markdown Enhancements

[plugin-md-plus](/plugins/md-plus) is used for adding more syntax in Markdown. It now supports:

- Footnote
- Mark

You can enable all features simply by:

```js
themeConfig: {
  themePlugins: {
    mdPlus: {
      all: true,  // enable all features (default: false)
    }
  }
}
```

or enable them separately:

```js
themeConfig: {
  themePlugins: {
    mdPlus: {
      footnote: true,  // Footnote (default: false)
      mark: true  // Mark (default: false)
    }
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
