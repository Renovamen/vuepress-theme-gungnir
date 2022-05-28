---
title: Mermaid
date: 2022-03-12
---

::: info
默认不启用该功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::


## 配置

通过插件 [plugin-mermaid](/zh/docs/plugins/mermaid/) 来在 Markdown 中使用 [Mermaid](https://mermaid-js.github.io)，从而在文章中加入流程图、状态图、时序图、甘特图等：

```js{3}
theme: gungnirTheme({
  themePlugins: {
    mermaid: true
  }
})
```

如果你想自定义代码块 token（默认为 `mermaidjs`）：

```js{4}
theme: gungnirTheme({
  themePlugins: {
    mermaid: {
      token: "mermaid"
    }
  }
})
```


## 主题

Mermaid 支持[多种主题](https://github.com/mermaid-js/mermaid/tree/develop/src/themes)。Gungnir 主题默认在亮色模式下使用 `default` 主题，在夜间模式下使用 `dark` 主题。你也可以通过修改插件配置项来使用其他主题：

```js
theme: gungnirTheme({
  themePlugins: {
    mermaid: {
      theme: "default",  // 默认："default"
      darkTheme: "dark"  // 默认："dark"
    }
  }
})
```

更多细节和用法请参考 [plugin-mermaid](/zh/docs/plugins/mermaid.html#配置项) 的文档。


## 语法

代码块的 token 需要为 `mermaidjs`（或你自定义的 token），例子：

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details 代码
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

更详细的用法可以参考 [Mermaid 文档](https://mermaid-js.github.io)。
