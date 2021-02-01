# vuepress-plugin-roughviz

A plugin for adding [roughViz.js](https://github.com/jwilber/roughViz) to [VuePress](https://vuepress.vuejs.org/).

&nbsp;

## Installation

Install this plugin with:

```bash
yarn add vuepress-plugin-roughviz
# or
npm install vuepress-plugin-roughviz
```

And add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-roughviz'
    ]
  ]
}
```

&nbsp;

## Usage

Then you can use [roughViz.js](https://github.com/jwilber/roughViz) in Markdown.

roughViz.js supports the following chart types:

- Bar (`bar`)
- Horizontal Bar (`barh`)
- Donut (`donut`)
- Line (`line`)
- Pie (`pie`)
- Scatter (`scater`)
- Stacked Bar (`stackedbar`)

So the format of your code block's `token.info` should be `roughviz-{ chart-type }`. For example, to draw a Donut chart:

~~~json
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

&nbsp;

## License

[MIT](LICENSE)