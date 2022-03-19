---
title: Markdown 拓展语法
date: 2022-03-12
---

本节中的所有功能默认都是不启用的，所以需要按照下述配置方式在 `.vuepress/config.js` 中启用你想要使用的功能。

::: info
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


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


## Chart.js

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


## Mermaid

通过插件 [plugin-mermaid](/zh/docs/plugins/mermaid/) 来在 Markdown 中使用 [Mermaid](https://mermaid-js.github.io)，从而在文章中加入流程图、状态图、时序图、甘特图等：

```js
themeConfig: {
  themePlugins: {
    mermaid: true
  }
}
```

### 主题

Mermaid 支持[多种主题](https://github.com/mermaid-js/mermaid/tree/develop/src/themes)。Gungnir 主题默认在亮色模式下使用 `default` 主题，在夜间模式下使用 `dark` 主题。你也可以通过修改插件配置项来使用其他主题：

```js
themeConfig: {
  themePlugins: {
    mermaid: {
      theme: "default",  // 默认："default"
      darkTheme: "dark"  // 默认："dark"
    }
  }
}
```

更多细节和用法请参考 [plugin-mermaid](/zh/docs/plugins/mermaid.html#配置项) 的文档。


### 语法

代码块的 token info 需要为 `mermaidjs`，例子：

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


## 其他拓展语法

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
