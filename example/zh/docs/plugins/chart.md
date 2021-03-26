---
title: plugin-chart
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-chart" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-chart.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/chart" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--chart-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

`vuepress-plugin-chart` 插件，用于在 VuePress 的 Markdown 中使用 JavaScript 图表库 [Chart.js](https://www.chartjs.org)。


## 安装

```bash
yarn add vuepress-plugin-chart
# or
npm install vuepress-plugin-chart
```

然后在 `.vuepress/config.js` 中引入这个插件：

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-chart'
    ]
  ]
}
```


## 使用

代码块的 token info 需要为 `chart`，比如：

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


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE)
