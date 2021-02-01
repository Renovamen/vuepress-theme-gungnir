# vuepress-plugin-chart

A plugin for adding [Chart.js](https://www.chartjs.org) to [VuePress](https://vuepress.vuejs.org/).

&nbsp;

## Installation

Install this plugin with:

```bash
yarn add vuepress-plugin-chart
# or
npm install vuepress-plugin-chart
```

And add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-chart'
    ]
  ]
}
```

&nbsp;

## Usage

Then you can use [Chart.js](https://www.chartjs.org) in Markdown:

~~~json
```chart
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [{
      "label": "# of Votes",
      "data": [12, 19, 3, 5, 2, 3],
      "backgroundColor": [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      "borderColor": [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      "borderWidth": 1
    }]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
}
```
~~~

&nbsp;

## License

[MIT](LICENSE)