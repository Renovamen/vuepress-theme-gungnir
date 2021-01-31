const path = require('path')
const chart = require('./lib/markdown-it-chart')

module.exports = (options, ctx) => {
  return {
    name:'@renovamen/vuepress-plugin-chart',
    enhanceAppFiles: path.resolve(__dirname, './enhanceApp.js'),
    chainMarkdown(config) {
      config
        .plugin('chart')
        .use(chart)
    }
  }
}
