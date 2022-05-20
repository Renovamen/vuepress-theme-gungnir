---
title: Chart.js
date: 2022-03-12
---

::: info
This feature is disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::


## Configuration

Use JavaScript charting library [Chart.js](https://www.chartjs.org) in Markdown via [plugin-chart](/docs/plugins/chart/):

```js{3}
theme: gungnirTheme({
  themePlugins: {
    chartjs: true
  }
})
```

If you want to customize the token of the fenced code block (which is `chart` by default):

```js{4}
theme: gungnirTheme({
  themePlugins: {
    chartjs: {
      token: "chartjs"
    }
  }
})
```


## Syntax

The token of the code block should be `chart` (or your custom one), for example:

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

