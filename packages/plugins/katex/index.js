const path = require("path");
const katex = require("./katex");

module.exports = (options, ctx) => {
  return {
    name: "@renovamen/vuepress-plugin-katex",
    enhanceAppFiles: path.resolve(__dirname, "enhanceApp.js"),
    extendMarkdown: (md) => {
      md.set({
        html: true
      });
      md.use(katex, options);
    }
  };
};
