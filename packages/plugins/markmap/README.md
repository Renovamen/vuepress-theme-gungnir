# vuepress-plugin-markmap

A plugin for adding [markmap](https://github.com/gera2ld/markmap) to [VuePress](https://vuepress.vuejs.org/) to visualize your Markdown as mindmaps.

[Demo](https://vuepress-theme-gungnir.vercel.app/zh/docs/plugins/markmap.html)


&nbsp;

## Installation

Install this plugin with:

```bash
yarn add vuepress-plugin-markmap
# or
npm install vuepress-plugin-markmap
```

Then add it to your `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-markmap'
    ]
  ]
}
```


&nbsp;

## Usage

The token info of the code block should be `markmap`, for example:

~~~markdown
```markmap
# Fruit

## Red

- [Apple](https://en.wikipedia.org/wiki/Apple)
- *Cherry*

## Yellow

- **Lemon**
- Banana
- ~~Pumpkin~~
```
~~~

Refer to the [documentation of markmap](https://markmap.js.org/repl) for more information.


&nbsp;

## Warning

Theoretically, using code blocks highlighted by [Prism.js](https://prismjs.com/) in markmap is also supported (see [here](https://markmap.js.org/repl)). However, markmap will import syntax highlighting styles if code blocks are used, which are conflited with this theme's highlighting styles. So you'd better not use code blocks in this plugin (before I find out an appropriate solution).


&nbsp;

## License

[MIT](LICENSE)
