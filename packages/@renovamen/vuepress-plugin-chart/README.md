# @renovamen/vuepress-plugin-chart

A plugin for adding [Chart.js](https://www.chartjs.org) to VuePress.

&nbsp;

## Usage

Install:

```bash
yarn add @renovamen/vuepress-plugin-chart
# or
npm install @renovamen/vuepress-plugin-chart
```

Add this plugin to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-chart'
    ]
  ]
}
```

Then you can use [Chart.js](https://www.chartjs.org) in Markdown:

<pre><code class="json">```chart
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
</code></pre>

&nbsp;

## License

[MIT](LICENSE)