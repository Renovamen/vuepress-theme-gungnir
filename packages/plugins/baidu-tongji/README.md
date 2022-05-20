# @renovamen/vuepress-plugin-baidu-tongji@next

[![npm](https://img.shields.io/npm/v/@renovamen/vuepress-plugin-baidu-tongji/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@renovamen/vuepress-plugin-baidu-tongji/v/next) [![docs](https://img.shields.io/badge/Docs-@renovamen/vuepress--plugin--baidu--tongji-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/baidu-tongji.html) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

Plugin `@renovamen/vuepress-plugin-baidu-tongji@next` for adding [百度统计](https://tongji.baidu.com) to [VuePress 2](https://v2.vuepress.vuejs.org/). It is edited from [@vuepress/plugin-google-analytics](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-google-analytics).


&nbsp;

## Install

```bash
# pnpm
pnpm install @renovamen/vuepress-plugin-baidu-tongji@next
# yarn
yarn add @renovamen/vuepress-plugin-baidu-tongji@next
# npm
npm install @renovamen/vuepress-plugin-baidu-tongji@next
```


&nbsp;

## Usage

```js
const { baiduTongjiPlugin } = require("@renovamen/vuepress-plugin-baidu-tongji");

module.exports = {
  plugins: [
    baiduTongjiPlugin({
      "id": "your-tracking-code"
    })
  ]
}
```

`id` is your tracking code offered by [百度统计](https://tongji.baidu.com).


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE)
