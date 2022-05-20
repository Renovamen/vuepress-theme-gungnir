---
title: plugin-giscus
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/vuepress-plugin-giscus/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/vuepress-plugin-giscus/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/giscus" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-vuepress--plugin--giscus-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

`vuepress-plugin-giscus@next` 插件：在 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 中使用基于 [GitHub Discussions](https://docs.github.com/en/discussions) 的评论系统 [Giscus](https://github.com/giscus/giscus)。


## 安装

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install vuepress-plugin-giscus@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add vuepress-plugin-giscus@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install vuepress-plugin-giscus@next
```

</CodeGroupItem>
</CodeGroup>


## 准备

首先你需要：

- 建一个公开的 Github 仓库并[启用 Discussions](https://docs.github.com/cn/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)
- 安装 [Giscus app](https://github.com/apps/giscus)，在选择仓库时至少要把上述仓库选进去
- 查看 [Giscus 官网](https://giscus.app)并在上面生成你的 repo id、category id 以及别的必要信息


## 配置

在 `.vuepress/config.js` 中引入这个插件：

```js
const { giscusPlugin } = require("vuepress-plugin-giscus");

module.exports = {
  plugins: [
    giscusPlugin({
      repo: "[仓库]",  // 必须，string，格式：user_name/repo_name
      repoId: "[仓库 ID]",  // 必须，string，在 Giscus 官网上生成
      category: "[discussion 分类名]",  // 必须，string
      categoryId: "[discussion 分类 ID]",  // 必须，string，在 Giscus 官网上生成
      mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
      reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
      theme: "[主题]", // 可选，string，default="light"
      lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
      lazyLoad: true,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
      crossorigin: "[crossorigin]"  // 可选，string，default="anonymous"
    })
  ]
}
```


## 组件

这时 `Giscus` 就已经被注册为一个 Vue 组件了，因此你可以直接在 Vuepress 中使用它。你也可以通过传入 props 来实时改变 Giscus 的主题、语言和启用或关闭 reaction（[工作原理](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events)）：

```
<Giscus :theme="theme" :lang="lang" :reactionsEnabled="reactionsEnabled" />
```


## 开源协议

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE)
