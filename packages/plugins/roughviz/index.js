const path = require("path");
const roughviz = require("./lib/markdown-it-roughviz");

module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-roughviz",
    enhanceAppFiles: path.resolve(__dirname, "./enhanceApp.js"),
    chainMarkdown(config) {
      config.plugin("roughviz").use(roughviz);
    }
  };
};
