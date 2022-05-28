---
title: Mermaid
date: 2022-03-12
---

::: info
This feature is disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::


## Configuration

Use [Mermaid](https://mermaid-js.github.io) via [plugin-mermaid](/docs/plugins/mermaid.md) to create complex diagrams in Markdown:

```js{3}
theme: gungnirTheme({
  themePlugins: {
    mermaid: true
  }
})
```

If you want to customize the token of the fenced code block (which is `mermaidjs` by default):

```js{4}
theme: gungnirTheme({
  themePlugins: {
    mermaid: {
      token: "mermaid"
    }
  }
})
```


## Themes

Mermaid supports [multiple themes](https://github.com/mermaid-js/mermaid/tree/develop/src/themes). By default, Gungnir uses `default` theme in light mode and `dark` in dark mode. You can also use other themes by configuring the plugin options:

```js
theme: gungnirTheme({
  themePlugins: {
    mermaid: {
      theme: "default",  // default: "default"
      darkTheme: "dark"  // default: "dark"
    }
  }
})
```

Also see [plugin-mermaid](/docs/plugins/mermaid.html#options) for more details.


## Syntax

The token info of the code block should be `mermaidjs` (or your custom one), for example:

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details Code
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

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.
