---
title: plugin-reading-time
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-reading-time" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-reading-time.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/reading-time" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--reading--time-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

`@renovamen/vuepress-plugin-reading-time` 插件，用于统计文章字数和估计阅读时长。相比其它 VuePress 的阅读时长插件，本插件可以：

- 为中英文分别设置阅读速度
- 选择将代码块或公式块中的字符排除在统计以外


## 安装

```bash
yarn add @renovamen/vuepress-plugin-reading-time
# or
npm install @renovamen/vuepress-plugin-reading-time
```

然后在 `.vuepress/config.js` 中引入这个插件：

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-reading-time'
    ]
  ]
}
```


## 使用

可以通过 `$page.readingTime` 来获取 `readingTime` 数据，一个样例 `readingTime` 数据为：

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

不需要进行统计的页面路径，插件会通过正则表达式来将这些页面排除（只要 `$page.path` 和 `$page.regularPath` 中的任意一个匹配上，该页面就会被排除）。

- Type: `Array<string>`
- Default: `[]`

例子：

```js
plugins: [
  [
    '@renovamen/vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }
  ]
]
```

### wordsPerMinuteCN

一分钟可以阅读多少个中文字符。

- Type: `int`
- Default: `300`

例子：

```js
plugins: [
  [
    '@renovamen/vuepress-plugin-reading-time', {
      wordsPerMinuteCN: 500
    }
  ]
]
```

### wordsPerMinuteEN

一分钟可以阅读多少个英文字符。

- Type: `int`
- Default: `160`

例子：

```js
plugins: [
  [
    '@renovamen/vuepress-plugin-reading-time', {
      wordsPerMinuteEN: 200
    }
  ]
]
```

### excludeCodeBlock

是否排除所有代码块内的字符。

- Type: `boolean`
- Default: `false`

例子：

```js
plugins: [
  [
    '@renovamen/vuepress-plugin-reading-time', {
      excludeCodeBlock: true
    }
  ]
]
```

### excludeTexBlock

是否排除所有公式块内的字符。

- Type: `boolean`
- Default: `false`

例子：

```js
plugins: [
  [
    '@renovamen/vuepress-plugin-reading-time', {
      excludeTexBlock: true
    }
  ]
]
```


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)

