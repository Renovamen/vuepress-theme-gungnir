# Gungnir V2

[![npm](https://img.shields.io/npm/v/vuepress-theme-gungnir/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-theme-gungnir/v/next) [![docs](https://img.shields.io/badge/Docs-Gungnir-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE) [![awesome-vuepress](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@a7b5b7805ecc00b3396acb35022cf6e2c0699e03/media/badge-flat.svg)](https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#themes)

A blog theme for [VuePress 2](https://v2.vuepress.vuejs.org/), **WIP**. 

**Gungnir** is the spear of the god Odin in Norse mythology.

![preview](https://raw.githubusercontent.com/Renovamen/vuepress-theme-gungnir/main/docs/.vuepress/public/img/docs/gungnir.jpg)


&nbsp;

## Features

- Simple and beautiful
- Responsive design
- Multi-level navigation
- Switchable cover images for home page
- Dark and light mode: system theme detection with a theme-switcher to set the theme as per the user preference
- Search
- Table of contents
- Full screening the code blocks (inspired by WordPress theme [Sakura](https://github.com/mashirozx/Sakura))
- Tex support ([Katex](https://github.com/KaTeX/KaTeX))
- Draw charts and graphs in Markdown easily: [Chart.js](https://www.chartjs.org), [Mermaid](https://mermaid-js.github.io)
- Markdown enhancements:
  - Footnote ([markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))
  - Mark ([markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))
- Analytics ([Google Analytics](https://analytics.google.com/) and [Baidu Tongji](https://tongji.baidu.com/))
- Comment ([Giscus](https://github.com/giscus/giscus))
- RSS
- Reading time
- Multi-language support (English, Simplified Chinese)
- Archive page with tags and links page

TODO:

- [roughViz.js](https://github.com/jwilber/roughViz) and [markmap](https://github.com/gera2ld/markmap)


&nbsp;

## Installation

Please make sure you are using the latest version of VuePress (2.0.0-beta.49) and theme Gungnir.

```bash
pnpm install -D vuepress vuepress-theme-gungnir@next
```


&nbsp;

## Documentation & Live Demos

- Documentation: [v2-vuepress-theme-gungnir.vercel.app](https://v2-vuepress-theme-gungnir.vercel.app)
- My blog: [blog.zxh.io](https://blog.zxh.io)


&nbsp;

## Plugins

This repository also contains the following plugins:

- [plugin-giscus](packages/plugins/giscus): use [Giscus](https://github.com/giscus/giscus) (a comments system powered by [GitHub Discussions](https://docs.github.com/en/discussions)) in Vuepress 2
- [plugin-katex](packages/plugins/katex): [KaTeX](https://katex.org/)
- [plugin-chart](packages/plugins/chart): [Chart.js](https://www.chartjs.org)
- [plugin-mermaid](packages/plugins/mermaid): [Mermaid](https://mermaid-js.github.io)
- [plugin-reading-time](packages/plugins/reading-time): word count and reading time
- [plugin-baidu-tongji](packages/plugins/baidu-tongji): [百度统计](https://tongji.baidu.com/)
- [plugin-rss](packages/plugins/rss): RSS
- [plugin-code-enhance](packages/plugins/code-enhance): full-screen and ~~copy~~ button for code blocks
- [plugin-search](packages/plugins/search): edit [@vuepress/plugin-search](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/plugin-search) to make it compatible with Gungnir


&nbsp;

## Changes (v0 -> v2)

- With the power of [VuePress 2](https://v2.vuepress.vuejs.org/), [Vue 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/) and [Webpack 5](https://webpack.js.org/), written using [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html), of course
- Stylus -> SCSS
- Drop external fonts to increase load speed
- Built-in comments system: move from [Vssue](https://github.com/meteorlxy/vssue) (doesn't support VuePress 2 yet) to [Giscus](https://github.com/giscus/giscus)


&nbsp;

## Contribution

See [Contributing Guide](CONTRIBUTING.md).


&nbsp;

## Other Versions

No further update expected for the following previous versions:

- [VuePress 1 theme](https://github.com/Renovamen/vuepress-theme-gungnir/tree/v0)
- [Jekyll theme](https://github.com/Renovamen/jekyll-theme-gungnir)


&nbsp;

## License

VuePress theme Gungnir is [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) licensed, see the [LICENSE](LICENSE) file for details.

Plugins are licensed by MIT.
