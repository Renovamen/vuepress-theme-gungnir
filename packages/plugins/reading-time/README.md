# @renovamen/vuepress-plugin-reading-time@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-reading-time/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-reading-time/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--reading--time-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/reading-time.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `@renovamen/vuepress-plugin-reading-time@next` for counting words and estimating reading time in [VuePress 2](https://v2.vuepress.vuejs.org/). Compare to other similar VuePress plugins, this plugin supports:

- Setting reading speed for English and Chinese separately
- Excluding all content inside code blocks or tex blocks

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/reading-time.html) (see the number beside the clock icon)


&nbsp;

## Install

```bash
# pnpm
pnpm install @renovamen/vuepress-plugin-reading-time@next
# yarn
yarn add @renovamen/vuepress-plugin-reading-time@next
# npm
npm install @renovamen/vuepress-plugin-reading-time@next
```

Then add it to your `.vuepress/config.js`:

```js
const { readingTimePlugin } = require("@renovamen/vuepress-plugin-reading-time");

module.exports = {
  plugins: [
    readingTimePlugin()
  ]
}
```


&nbsp;

## Usage

The `readingTime` data can be accessed by:

```js
import { pageData } from "@vuepress/client";
console.log(pageData.value.readingTime);
```

An example `readingTime` data:

```js
{
  minutes: 12,
  words: 3500
}
```

You can override by specifying `readingTime` data in frontmatter

```yaml
title: Hello Word
readingTime: { minutes: 3, words: 1500 }
```


&nbsp;

## Options

### excludes

Exclude pages by their path via a regular expression. Will be ignored if [`includes`](#includes) is specified.

- Type: `Array<string>`
- Default: `[]`

Example:

```js
plugins: [
  readingTimePlugin({
    excludes: ["/docs/.*", "/posts/hello-word.html"]
  })
]
```

### includes

An allowlist of all pages that should be computed word count and reading time for. Includes pages by their path via a regular expression. 

If `includes` is specified, [`excludes`](#excludes) will be ignored.

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

The number of Chinese words per minute a user can read.

- Type: `int`
- Default: `300`

Example:

```js
plugins: [
  readingTimePlugin({
    wordsPerMinuteCN: 500
  })
]
```

### wordsPerMinuteEN

The number of English words per minute a user can read.

- Type: `int`
- Default: `160`

Example:

```js
plugins: [
  readingTimePlugin({
    wordsPerMinuteEN: 200
  })
]
```

### excludeCodeBlock

Exclude all content inside code blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  readingTimePlugin({
    excludeCodeBlock: true
  })
]
```

### excludeTexBlock

Exclude all content inside tex blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  readingTimePlugin({
    excludeTexBlock: true
  })
]
```


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)
