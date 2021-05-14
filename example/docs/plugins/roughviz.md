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

Plugin `vuepress-plugin-roughviz` for adding [roughViz.js](https://github.com/jwilber/roughViz) to [VuePress](https://vuepress.vuejs.org/) to create sketchy/hand-drawn styled charts in Markdown.


## Install

```bash
yarn add vuepress-plugin-roughviz
# or
npm install vuepress-plugin-roughviz
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-roughviz'
    ]
  ]
}
```


## Usage

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


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/roughviz/LICENSE)
