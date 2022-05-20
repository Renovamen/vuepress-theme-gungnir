---
title: plugin-reading-time
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-reading-time/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-reading-time/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/reading-time" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--reading--time-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

`@renovamen/vuepress-plugin-reading-time@next` 插件，用于在 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 中统计文章字数和估计阅读时长。相比其它的阅读时长插件，本插件可以：

- 为中英文分别设置阅读速度
- 选择将代码块或公式块中的字符排除在统计以外


## 安装

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-reading-time@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-reading-time@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-reading-time@next
```

</CodeGroupItem>
</CodeGroup>


然后在 `.vuepress/config.js` 中引入这个插件：

```js
const { readingTimePlugin } = require("@renovamen/vuepress-plugin-reading-time");

module.exports = {
  plugins: [
    readingTimePlugin()
  ]
}
```


## 使用

可以通过以下方法来获取 `readingTime` 数据：

```js
import { pageData } from "@vuepress/client";
console.log(pageData.value.readingTime);
```

一个样例 `readingTime` 数据为：

```js
{
  minutes: 12,  // 阅读时长估计
  words: 3500  // 文章字数
}
```

可以在文章的 `frontmatter` 中重写 `readingTime` 数据：

```yaml
title: Hello Word
readingTime: { minutes: 3, words: 1500 }
```


## 配置项

### excludes

不需要进行统计的页面路径，插件会通过正则表达式来将这些页面排除。如果指定了 [`includes`](#includes) 项，那么这一项无效。

- Type: `Array<string>`
- Default: `[]`

例子：

```js
plugins: [
  readingTimePlugin({
    excludes: ["/docs/.*", "/posts/hello-word.html"]
  })
]
```

### includes

需要进行统计的页面路径（正则表达式）。如果指定了这一项，那么 [`excludes`](#excludes) 项无效。

- Type: `Array<string>`
- Default: `[]`

Example:

```js
plugins: [
  readingTimePlugin({
    includes: ["/docs/.*"]
  })
]
```

### wordsPerMinuteCN

一分钟可以阅读多少个中文字符。

- Type: `int`
- Default: `300`

例子：

```js
plugins: [
  readingTimePlugin({
    wordsPerMinuteCN: 500
  })
]
```

### wordsPerMinuteEN

一分钟可以阅读多少个英文字符。

- Type: `int`
- Default: `160`

例子：

```js
plugins: [
  readingTimePlugin({
    wordsPerMinuteEN: 200
  })
]
```

### excludeCodeBlock

是否排除所有代码块内的字符。

- Type: `boolean`
- Default: `false`

例子：

```js
plugins: [
  readingTimePlugin({
    excludeCodeBlock: true
  })
]
```

### excludeTexBlock

是否排除所有公式块内的字符。

- Type: `boolean`
- Default: `false`

例子：

```js
plugins: [
  readingTimePlugin({
    excludeTexBlock: true
  })
]
```


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)
