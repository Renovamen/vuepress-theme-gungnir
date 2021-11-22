---
title: plugin-markmap
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-markmap" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-markmap.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/markmap" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--markmap-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/markmap/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

`vuepress-plugin-markmap` 插件，用于在 VuePress 的 Markdown 中使用 [markmap](https://github.com/gera2ld/markmap)，从而在文章中加入思维导图。


## 安装

```bash
yarn add vuepress-plugin-markmap
# or
npm install vuepress-plugin-markmap
```

然后在 `.vuepress/config.js` 中引入这个插件：

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-markmap'
    ]
  ]
}
```


## 使用

代码块的 token info 需要为 `markmap`，例子：

```markmap
# 水果

## 红的

- 苹果
- 樱桃

## 黄的

- 柠檬
- 香蕉
```

::: details 代码
~~~
```markmap
# Fruit

## Red

- Apple
- Cherry

## Yellow

- Lemon
- Banana
```
~~~
:::

更详细的用法可以参考 [markmap 文档](https://markmap.js.org/repl)。

::: danger
markmap 还支持在思维导图中插入代码块（[见这里](https://markmap.js.org/repl)），但如果插入代码块，markmap 就会引入代码块样式文件，这会与主题本身的代码块样式冲突。我目前还没有想出这个问题的解决方案，所以请不要在本插件中使用代码块。
:::


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/markmap/LICENSE)
