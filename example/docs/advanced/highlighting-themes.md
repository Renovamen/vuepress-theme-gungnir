---
title: Syntax Highlighting Themes
date: 2020-03-30
---


## Prism's Offical Themes

VuePress uses [Prism.js](https://prismjs.com/) as the syntax highlighter by default, which offers some [offical themes](https://github.com/PrismJS/prism/tree/master/themes).

Gungnir uses [`prism-tomorrow.css`](https://github.com/PrismJS/prism/blob/master/themes/prism-tomorrow.css) as the default syntax highlighting theme. To use other themes, for example, [`prism-coy.css`](https://github.com/PrismJS/prism/blob/master/themes/prism-coy.css):

```js
// .vuepress/config.js
themeConfig: {
  codeTheme: "coy"
}
```

To use Prism.js's default theme [`prism.css`](https://github.com/PrismJS/prism/blob/master/themes/prism.css):

```js
themeConfig: {
  codeTheme: "default"
}
```

It should be noted that, you may also have to specify the code block background color `codeBgColor` and highlight line color `codeHighlightLineColor` in your `.vuepress/styles/palette.styl` file (create one if this file dosen't exist). For example, your want to use [`prism.css`](https://github.com/PrismJS/prism/blob/master/themes/prism.css):

```stylus
$codeBgColor = #f5f2f0
$codeHighlightLineColor = #b3d4fc
```

where `codeBgColor` can be found in the syntax highlighting style sheets, `codeHighlightLineColor` can be specified as any color you like.


## Custom Themes

Using a custom syntax highlighting theme is also supported. Just write your own highlighting style sheet (referring to the format of [Prism's highlighting styles](https://github.com/PrismJS/prism/tree/master/themes)) and put it under folder `.vuepress/public/highlight`. You can use any file name you like, here we use `my-theme` for an example.

Then:

```js
themeConfig: {
  codeTheme: "my-theme"
}
```

Also, you need to specify `codeBgColor` and `codeHighlightLineColor` in your `.vuepress/styles/palette.styl` file.
