---
title: 评论
date: 2021-03-26
---

::: info
默认不启用该功能。
:::

::: tip
对于没有启用的功能，与它们相关的代码并不会被打包。
:::

评论系统使用了基于 [GitHub Discussions](https://docs.github.com/en/discussions) 的 [Giscus](https://github.com/giscus/giscus)。


## 准备

- 建一个公开的 Github 仓库并[启用 Discussions](https://docs.github.com/cn/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)
- 安装 [Giscus app](https://github.com/apps/giscus)，在选择仓库时至少要把上述仓库选进去
- 查看 [Giscus 官网](https://giscus.app)并在上面生成你的 repo id、category id 以及别的必要信息


## 配置

```js
theme: gungnirTheme({
  themePlugins: {
    giscus: {
      repo: "[仓库]",  // 必须，string，格式：user_name/repo_name
      repoId: "[仓库 ID]",  // 必须，string，在 Giscus 官网上生成
      category: "[discussion 分类名]",  // 必须，string
      categoryId: "[discussion 分类 ID]",  // 必须，string，在 Giscus 官网上生成
      mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
      reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
      lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
      lazyLoad: true,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
      crossorigin: "[crossorigin]",  // 可选，string，default="anonymous"
      theme: "[light 模式主题]",  // 可选，string，default="light"
      darkTheme: "[dark 模式主题]"  // 可选，string，default="dark_dimmed"
    }
  }
}）
```

其中，`theme` 和 `darkTheme` 项可以传入[自定义主题](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme)（一个 CSS 文件的 URL）。

参考：[plugin-giscus](/zh/docs/plugins/giscus.md)
