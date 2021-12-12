# Gungnir V2

[![npm](https://img.shields.io/npm/v/vuepress-theme-gungnir/next.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-theme-gungnir/v/next) [![docs](https://img.shields.io/badge/Docs-Gungnir-26A2FF?style=flat-square)](https://v2-vuepress-theme-gungnir.vercel.app/docs/) [![license](https://img.shields.io/badge/License-Apache--2.0-green?style=flat-square)](LICENSE)

A blog theme for [VuePress 2](https://v2.vuepress.vuejs.org/), **WIP**. 

See [main](https://github.com/Renovamen/vuepress-theme-gungnir) branch for the stable version (v0.x) based on [VuePress 1](https://vuepress.vuejs.org/).


&nbsp;

## Preview

https://v2-vuepress-theme-gungnir.vercel.app


&nbsp;

## Dev

Clone the repo and install dependencies:

```bash
yarn
```

Start watching source files:

```bash
yarn dev
```

Open another terminal, and start developing the documentation site:

```bash
yarn docs:dev
```


&nbsp;

## Plugins

This repo also contains the following plugins:

- [plugin-giscus](packages/plugins/giscus): use [Giscus](https://github.com/giscus/giscus) (a comments system powered by [GitHub Discussions](https://docs.github.com/en/discussions)) in Vuepress 2
- [plugin-katex](packages/plugins/katex): [KaTeX](https://katex.org/)
- [plugin-chart](packages/plugins/chart): [Chart.js](https://www.chartjs.org)
- [plugin-mermaid](packages/plugins/mermaid): [Mermaid](https://mermaid-js.github.io)
- [plugin-reading-time](packages/plugins/reading-time): word count and reading time
- [plugin-code-enhance](packages/plugins/code-enhance): full-screen and ~~copy~~ button for code blocks


&nbsp;

## Some of the changes

- With the power of [VuePress 2](https://v2.vuepress.vuejs.org/), [Vue 3](https://v3.vuejs.org/), [Vite](https://vitejs.dev/) and [Webpack 5](https://webpack.js.org/), written using [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html), of course
- Stylus -> SCSS
- Drop external fonts to increase load speed
- Built-in comments system: move from [Vssue](https://github.com/meteorlxy/vssue) (isn't compatable with Vue 3 as for now) to [Giscus](https://github.com/giscus/giscus)


&nbsp;

## License

VuePress theme Gungnir is [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) licensed, see the [LICENSE](LICENSE) file for details.
