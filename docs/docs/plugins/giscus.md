---
title: plugin-giscus
date: 2021-12-12
---

Plugin `vuepress-plugin-giscus@next` for adding comment system [Giscus](https://github.com/giscus/giscus) powered by [GitHub Discussions](https://docs.github.com/en/discussions) to [VuePress 2](https://v2.vuepress.vuejs.org/).


## Install

```bash
yarn add vuepress-plugin-giscus@next
# or
npm install vuepress-plugin-giscus@next
```


## Usage

First you need to see [Giscus's website](https://github.com/giscus/giscus) for its details and generate your repo id, category id and other things on the website.

Then add the plugin to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-giscus", {
        repo: "[repo]",  // required, string, format: user_name/repo_name
        repoId: "[repo id]",  // required, string, generate it on Giscus's website
        category: "[category name]",  // required, string
        categoryId: "[category id]",  // required, string, generate it on Giscus's website
        mapping: "[page <-> discussion mapping]",  // optional, string, default="title"
        reactionsEnabled: "[enable reactions or not?]",  // optional, boolean, default=true
        theme: "[theme]", // optional, string, default="light"
        lang: "[language]",  // optional, string, default="auto" (follow the site's language, fell to "en" if your site's language is not supported by Giscus)
        crossorigin: "[crossorigin]"  // optional, string, default="anonymous"
      }
    ]
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
