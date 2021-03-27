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

`@renovamen/vuepress-plugin-baidu-tongji` 插件，用于在 VuePress 中引入百度统计。修改自 [@vuepress/plugin-google-analytics](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html)。


## 安装

```bash
yarn add @renovamen/vuepress-plugin-baidu-tongji
# or
npm install @renovamen/vuepress-plugin-baidu-tongji
```


## 配置

需要去[百度统计](https://tongji.baidu.com/web/welcome/login)官网上申请一个跟踪代码，然后在 `.vuepress/config.js` 中配置：

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


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/baidu-tongji/LICENSE)
