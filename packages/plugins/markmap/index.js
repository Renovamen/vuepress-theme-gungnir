const path = require("path");
const markmap = require("./lib/markdown-it-markmap");

module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-markmap",
    enhanceAppFiles: path.resolve(__dirname, "./enhanceApp.js"),
    chainMarkdown(config) {
      config.plugin("markmap").use(markmap);
    }
  };
};
