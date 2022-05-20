---
title: plugin-chart
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-chart/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-chart/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/chart" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--chart-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

`vuepress-plugin-chart@next` 插件，用于在 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 的 Markdown 中使用 JavaScript 图表库 [Chart.js](https://www.chartjs.org)。


## 安装

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install vuepress-plugin-chart@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add vuepress-plugin-chart@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install vuepress-plugin-chart@next
```

</CodeGroupItem>
</CodeGroup>


然后在 `.vuepress/config.js` 中引入这个插件：

```js
const { chartPlugin } = require("vuepress-plugin-chart");

module.exports = {
  plugins: [
    chartPlugin()
  ]
}
```


## 配置项

### token

- 类型：`string`

- 默认值：`"chart"`

- 详情：自定义代码块的 token


## 使用

代码块的 token info 需要为 `chart`（如果你使用了自定义代码块 token，则需要为 `options.token`），比如：

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


如果希望通过 `callback` 传入一个函数，需要将函数写成字符串。下面这个例子通过 `callback` 修改了 Y 轴的刻度值：

```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "Salary",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return '￥' + value + 'k'; }"
        }
      }
    }
  }
}
```

::: details 代码
~~~json{24}
```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "Salary",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ]
    }]
  },
  "options": {
    "scales": {
      "y": {
        "ticks": {
          "beginAtZero": true,
          "callback": "function(value){ return '￥' + value + 'k'; }"
        }
      }
    }
  }
}
```
~~~
:::


更详细的用法可以参考 [Chart.js 文档](https://www.chartjs.org/docs/latest/)。


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/chart/LICENSE)
