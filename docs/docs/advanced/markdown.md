---
title: Markdown Enhancements
date: 2022-03-12
---

All of the features mentioned in this page are disabled by default. You need to enable the features you want to use in `.vuepress/config.js` following the instructions on this page.

::: info
Code related to the disabled features will not be included in your site's bundle files.
:::

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


## Chart.js

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


## Mermaid

Use [Mermaid](https://mermaid-js.github.io) via [plugin-mermaid](/docs/plugins/mermaid.md) to create complex diagrams in Markdown:

```js
themeConfig: {
  themePlugins: {
    mermaid: true
  }
}
```

### Themes

Mermaid supports [multiple themes](https://github.com/mermaid-js/mermaid/tree/develop/src/themes). By default, Gungnir uses `default` theme in light mode and `dark` in dark mode. You can also use other themes by configuring the plugin options:

```js
themeConfig: {
  themePlugins: {
    mermaid: {
      theme: "default",  // default: "default"
      darkTheme: "dark"  // default: "dark"
    }
  }
}
```

Also see [plugin-mermaid](/docs/plugins/mermaid.html#options) for more details.


### Syntax

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


## Others

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
