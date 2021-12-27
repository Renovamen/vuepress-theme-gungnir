# @renovamen/vuepress-plugin-md-plus@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-md-plus/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-md-plus/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--md--plus-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/md-plus.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

A plugin for enhancing Markdown in [VuePress 2](https://v2.vuepress.vuejs.org/). Now the following features are supported:

- footnote (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
- mark (supported by [markdown-it-footnote](https://github.com/markdown-it/markdown-it-mark))

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/md-plus.html)


&nbsp;

## Install

```bash
yarn add @renovamen/vuepress-plugin-md-plus@next
# or
npm install @renovamen/vuepress-plugin-md-plus@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-md-plus", {
        all: false,  // enable all features or not, this will rewrite all the following options
        footnote: true,  // enable footnote or not
        mark: true  // enable mark or not
      }
    ]
  ]
}
```


&nbsp;

## Usage

### Footnote

Add footnotes for text[^1]

[^1]: Write your footnote here.

### Mark

Mark important information: "Excuse me. Can you tell me how much the shirt is?" "Yes, it's ==nine fifteen==."


&nbsp;

## License

[MIT](LICENSE)
