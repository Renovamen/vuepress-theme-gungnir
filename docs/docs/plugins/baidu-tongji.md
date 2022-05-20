---
title: plugin-baidu-tongji
date: 2021-12-27
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-baidu-tongji/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-baidu-tongji/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/baidu-tongji" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--baidu--tongji-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-baidu-tongji@next` for adding [百度统计](https://tongji.baidu.com) to [VuePress 2](https://v2.vuepress.vuejs.org/). It is edited from [@vuepress/plugin-google-analytics](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-google-analytics).


## Install

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-baidu-tongji@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-baidu-tongji@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-baidu-tongji@next
```

</CodeGroupItem>
</CodeGroup>


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


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE)
