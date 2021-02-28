const footnote = require("markdown-it-footnote");
const mark = require("markdown-it-mark");

module.exports = (options, ctx) => {
  return {
    name: "@renovamen/vuepress-plugin-md-plus",
    chainMarkdown(config) {
      if (options.footnote || options.all)
        config.plugin("footnote").use(footnote);
      if (options.mark || options.all) config.plugin("mark").use(mark);
    }
  };
};
