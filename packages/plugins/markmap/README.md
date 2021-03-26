# vuepress-plugin-markmap

A plugin for adding [markmap](https://github.com/gera2ld/markmap) to [VuePress](https://vuepress.vuejs.org/) to visualize your Markdown as mindmaps.

&nbsp;

## Installation

Install this plugin with:

```bash
yarn add vuepress-plugin-markmap
# or
npm install vuepress-plugin-markmap
```

And add it to your `.vuepress/config.js`:

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

Then you can use [markmap](https://github.com/gera2ld/markmap) in Markdown:

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

&nbsp;

## License

[MIT](LICENSE)
