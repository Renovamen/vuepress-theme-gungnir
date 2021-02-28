const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const ba = options.ba || siteConfig.ba;
    const BA_ID = ba || false;
    return { BA_ID };
  },

  enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js")
});
