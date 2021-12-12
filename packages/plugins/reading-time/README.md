# @renovamen/vuepress-plugin-reading-time@next

Plugin `@renovamen/vuepress-plugin-reading-time@next` for counting words and estimating reading time in [VuePress 2](https://v2.vuepress.vuejs.org/). Compare to other similar VuePress plugins, this plugin supports:

- Setting reading speed for English and Chinese separately
- Excluding all content inside code blocks or tex blocks

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/reading-time.html) (see the number beside the clock icon)


&nbsp;

## Install

```bash
yarn add @renovamen/vuepress-plugin-reading-time@next
# or
npm install @renovamen/vuepress-plugin-reading-time@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-reading-time"
    ]
  ]
}
```


&nbsp;

## Usage

The `readingTime` data can be accessed by:

```js
import { pageData } from "@vuepress/client";
console.log(pageData.readingTime);
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

Exclude pages by their path via a regular expression.

- Type: `Array<string>`
- Default: `[]`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludes: ["/about", "/tag/.*"]
    }
  ]
]
```

### wordsPerMinuteCN

The number of Chinese words per minute a user can read.

- Type: `int`
- Default: `300`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      wordsPerMinuteCN: 500
    }
  ]
]
```

### wordsPerMinuteEN

The number of English words per minute a user can read.

- Type: `int`
- Default: `160`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      wordsPerMinuteEN: 200
    }
  ]
]
```

### excludeCodeBlock

Exclude all content inside code blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludeCodeBlock: true
    }
  ]
]
```

### excludeTexBlock

Exclude all content inside tex blocks or not.

- Type: `boolean`
- Default: `false`

Example:

```js
plugins: [
  [
    "@renovamen/vuepress-plugin-reading-time", {
      excludeTexBlock: true
    }
  ]
]
```


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/reading-time/LICENSE)
