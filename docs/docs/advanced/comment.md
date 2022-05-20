---
title: Comment
date: 2021-03-26
---

::: info
This feature is disabled by default.
:::

::: tip
Code related to the disabled features will not be included in your site's bundle files.
:::

[Giscus](https://github.com/giscus/giscus) is supported as the third party comment system, which is powered by [GitHub Discussions](https://docs.github.com/en/discussions). 


## Preparation

- Create a public Github repository and [enable Discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) for it
- Install [Giscus app](https://github.com/apps/giscus)
- Browse [Giscus's website](https://giscus.app/) and generate your repo id, category id and other things on the website


## Configuration

```js
theme: gungnirTheme({
  themePlugins: {
    giscus: {
      repo: "[repo]",  // required, string, format: user_name/repo_name
      repoId: "[repo id]",  // required, string, generate it on Giscus's website
      category: "[category name]",  // required, string
      categoryId: "[category id]",  // required, string, generate it on Giscus's website
      mapping: "[page <-> discussion mapping]",  // optional, string, default="title"
      reactionsEnabled: "[enable reactions or not?]",  // optional, boolean, default=true
      lang: "[language]",  // optional, string, default="auto" (follow the site's language, fall to "en" if your site's language is not supported by Giscus)
      lazyLoad: true,  // optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)
      crossorigin: "[crossorigin]",  // optional, string, default="anonymous"
      theme: "[theme for light mode]",  // optional, string, default="light"
      darkTheme: "[theme for dark mode]"  // optional, string, default="dark_dimmed"
    }
  }
})
```

`theme` and `darkTheme` option could be a [custom theme](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme) (a URL to a CSS file).

Refer to the [plugin-giscus](/zh/docs/plugins/giscus.html) for more information.
