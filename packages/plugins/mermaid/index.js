const path = require("path");
const mermaid = require("./lib/markdown-it-mermaid");

module.exports = (options, ctx) => {
  return {
    name: "@renovamen/vuepress-plugin-mermaid",
    enhanceAppFiles: path.resolve(__dirname, "./enhanceApp.js"),
    chainMarkdown(config) {
      config.plugin("mermaid").use(mermaid);
    }
  };
};
