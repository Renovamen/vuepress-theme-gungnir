---
title: plugin-mermaid
date: 2021-12-12
---

<p>
  <a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid/v/next" target="_blank">
    <img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-mermaid/next.svg?style=flat-square&logo=npm" style="display: inline; margin: 0 4px 0 0" alt="npm">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/mermaid" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--mermaid-26A2FF?style=flat-square&logo=github" style="display: inline; margin: 0 4px 0 0" alt="github">
  </a>
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display: inline; margin: 0 4px 0 0" alt="license">
  </a>
</p>

Plugin `@renovamen/vuepress-plugin-mermaid@next` for adding [Mermaid](https://mermaid-js.github.io) to [VuePress 2](https://v2.vuepress.vuejs.org/) to create complex diagrams in Markdown.


## Install

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
pnpm install @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>

<CodeGroupItem title="YARN" active>

```bash
yarn add @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
npm install @renovamen/vuepress-plugin-mermaid@next
```

</CodeGroupItem>
</CodeGroup>


Then add it to your `.vuepress/config.js`:

```js
const { mermaidPlugin } = require("@renovamen/vuepress-plugin-mermaid");

module.exports = {
  plugins: [
    mermaidPlugin()
  ]
}
```

## Options

### token

- Type: `string`

- Default: `"mermaidjs"`

- Details: Custom token of the fenced code block.


### theme

- Type: `string`

- Default: `"default"`

- Details: Theme ([here](https://github.com/mermaid-js/mermaid/tree/develop/src/themes) are all themes supported by Mermaid)


### darkTheme

- Type: `string`

- Default: `"dark"`

- Details: Theme for dark mode. Only works when [darkSelector](#darkselector) and [darkClass](#darkclass) are set.


### darkSelector

- Type: `string`

- Default: `undefined`

- Details

  - A CSS selector for the plugin to select an element and check if the dark mode is enabled by [darkClass](#darkclass)
  - For default theme and Gungnir theme, this option should be `html`


### darkClass

- Type: `string`

- Default: `undefined`

- Details

  - A class name for the plugin to check if the dark mode is enabled
  - For default theme and Gungnir theme, this option should be `dark`


:::tip
The default theme and Gungnir theme will add a class name `dark` to the `html` element to enable dark mode.

Click the mode switcher in the lower right corner to see what happens!
:::


## Usage

The token info of the code block should be `mermaidjs` (or `options.token` if you set), for example:

```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```

::: details Code
~~~
```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```
~~~
:::

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.


## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE)
