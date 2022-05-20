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

Plugin `vuepress-plugin-giscus@next` for adding comment system [Giscus](https://github.com/giscus/giscus) powered by [GitHub Discussions](https://docs.github.com/en/discussions) to [VuePress 2](https://v2.vuepress.vuejs.org/).


## Install

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


## Preparation

First you need to:

- Create a public Github repository and [enable Discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) for it
- Install [Giscus app](https://github.com/apps/giscus)
- Browse [Giscus's website](https://giscus.app/) and generate your repo id, category id and other things on the website


## Configuration

Add the plugin to your `.vuepress/config.js`:

```js
const { giscusPlugin } = require("vuepress-plugin-giscus");

module.exports = {
  plugins: [
    giscusPlugin({
      repo: "[repo]",  // required, string, format: user_name/repo_name
      repoId: "[repo id]",  // required, string, generate it on Giscus's website
      category: "[category name]",  // required, string
      categoryId: "[category id]",  // required, string, generate it on Giscus's website
      mapping: "[page <-> discussion mapping]",  // optional, string, default="title"
      reactionsEnabled: "[enable reactions or not?]",  // optional, boolean, default=true
      theme: "[theme]",  // optional, string, default="light"
      lang: "[language]",  // optional, string, default="auto" (follow the site's language, fell to "en" if your site's language is not supported by Giscus)
      lazyLoad: true,  // optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)
      crossorigin: "[crossorigin]"  // optional, string, default="anonymous"
    })
  ]
}
```


## Component

After that, `Giscus` will have already been registered as a Vue component, so you can use it in Vuepress directly. You can also change Giscus' theme, language and enablement on-the-fly by pass props to the component ([how it works](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events)):

```
<Giscus :theme="theme" :lang="lang" :reactionsEnabled="reactionsEnabled" />
```


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE)
