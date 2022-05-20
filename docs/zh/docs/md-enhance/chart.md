---
title: Chart.js
date: 2022-03-12
---

::: info
默认不启用该功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


## 配置

通过插件 [plugin-chart](/zh/docs/plugins/chart/) 来在 Markdown 中使用 JavaScript 图表库 [Chart.js](https://www.chartjs.org)：

```js{3}
theme: gungnirTheme({
  themePlugins: {
    chartjs: true
  }
})
```

如果你想自定义代码块 token（默认为 `chart`）：

```js{4}
theme: gungnirTheme({
  themePlugins: {
    chartjs: {
      token: "chartjs"
    }
  }
})
```


## 语法

代码块的 token 需要为 `chart`（或你自定义的 token），例子：

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
