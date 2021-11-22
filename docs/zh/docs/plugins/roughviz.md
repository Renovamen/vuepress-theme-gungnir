---
title: plugin-roughviz
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-roughviz" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-roughviz.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/roughviz" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--roughviz-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

`vuepress-plugin-roughviz` 插件，用于在 VuePress 的 Markdown 中使用手绘样式图表库 [roughViz.js](https://github.com/jwilber/roughViz)。


## 安装

```bash
yarn add vuepress-plugin-roughviz
# or
npm install vuepress-plugin-roughviz
```

然后在 `.vuepress/config.js` 中引入这个插件：

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-roughviz'
    ]
  ]
}
```


## 使用

roughViz.js 支持以下五种图表类型：

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


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE)
