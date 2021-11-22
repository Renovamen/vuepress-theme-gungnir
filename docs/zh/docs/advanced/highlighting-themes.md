---
title: 代码高亮主题
date: 2020-03-30
---


## Prism.js 官方主题

VuePress 使用 [Prism.js](https://prismjs.com/) 作为默认的代码高亮渲染器。Prism.js 官方提供了一些主题，可以在[这里](https://github.com/PrismJS/prism/tree/master/themes)查看。

本主题默认使用 [`prism-tomorrow.css`](https://github.com/PrismJS/prism/blob/master/themes/prism-tomorrow.css) 作为默认高亮主题，如果想要使用其他高亮主题，比如 [`prism-coy.css`](https://github.com/PrismJS/prism/blob/master/themes/prism-coy.css)，需要：

```js
// .vuepress/config.js
themeConfig: {
  codeTheme: "coy"
}
```

如果想要使用 Prism.js 的默认主题 [`prism.css`](https://github.com/PrismJS/prism/blob/master/themes/prism.css)：

```js
themeConfig: {
  codeTheme: "default"
}
```

值得注意的是，在配置完主题名称后，还需要在你的项目的 `.vuepress/styles/palette.styl`（如果没有的话就新建一个）中手动配置代码高亮主题的背景颜色 `codeBgColor` 和高亮行颜色 `codeHighlightLineColor`。比如在使用高亮主题 [`prism.css`](https://github.com/PrismJS/prism/blob/master/themes/prism.css) 时：

```stylus
$codeBgColor = #f5f2f0
$codeHighlightLineColor = #b3d4fc
```


其中，背景颜色 `codeBgColor` 可以在高亮主题的 `css` 样式文件中找到；高亮行颜色 `codeHighlightLineColor` 如果在高亮主题的 `css` 样式文件中没有的话，就随便选一个自己喜欢的就好。


## 自定义主题

你也可以使用自定义的代码高亮主题。需要参考 [Prism.js 的主题样式文件](https://github.com/PrismJS/prism/tree/master/themes)的格式写一份自己的样式，然后其放在 `.vuepress/public/highlight` 路径下。文件名可以任意取，如 `my-theme`。然后：

```js
themeConfig: {
  codeTheme: "my-theme"
}
```

然后同样也需要在 `.vuepress/styles/palette.styl` 中配置 `codeBgColor` 和 `codeHighlightLineColor`。
