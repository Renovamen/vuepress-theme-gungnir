# @renovamen/vuepress-plugin-mermaid@next

Plugin `@renovamen/vuepress-plugin-mermaid@next` for adding [Mermaid](https://mermaid-js.github.io) to [VuePress 2](https://v2.vuepress.vuejs.org/) to create complex diagrams in Markdown.

[Demo](https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/mermaid.html)


&nbsp;

## Install

```bash
yarn add @renovamen/vuepress-plugin-mermaid@next
# or
npm install @renovamen/vuepress-plugin-mermaid@next
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      "@renovamen/vuepress-plugin-mermaid"
    ]
  ]
}
```


&nbsp;

## Usage

The token info of the code block should be `mermaidjs`, for example:

~~~
```mermaidjs
sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end
```
~~~

Refer to the [documentation of Mermaid](https://mermaid-js.github.io) for more information.


&nbsp;

## License

[MIT](https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE)
