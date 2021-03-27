---
title: plugin-baidu-tongji
date: 2020-03-26
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-baidu-tongji" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-baidu-tongji.svg?style=flat-square&logo=npm" style="display: inline; margin: 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/baidu-tongji" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--baidu--tongji-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-baidu-tongji` for adding [Baidu Tongji](https://tongji.baidu.com/web/welcome/login) to VuePress. It is edited from [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html).


## Install

```bash
yarn add @renovamen/vuepress-plugin-baidu-tongji
# or
npm install @renovamen/vuepress-plugin-baidu-tongji
```


## Usage

```js
module.exports = {
  plugins: [
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': 'your-tracking-code'
      }
    ]
  ]
}
```

`ba` is your tracking code offered by [Baidu Tongji](https://tongji.baidu.com/web/welcome/login).


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE)
