const path = require("path");
const RSS = require("rss");
const chalk = require("chalk");

module.exports = (pluginOptions, ctx) => {
  return {
    name: "@renovamen/vuepress-plugin-rss",

    generated() {
      const fs = require("fs-extra");
      const { pages, sourceDir } = ctx;
      const { filter = () => true, count = 20 } = pluginOptions;
      const siteData = require(path.resolve(sourceDir, ".vuepress/config.js"));

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `${pluginOptions.site_url}/rss.xml`,
        site_url: `${pluginOptions.site_url}`,
        copyright: `${
          pluginOptions.copyright ? pluginOptions.copyright : "Coralo 2018"
        }`,
        language: "en"
      });

      pages
        .filter((page) => page.id === "posts")
        .filter((page) => filter(page.frontmatter))
        .map((page) => ({
          ...page,
          date: new Date(page.frontmatter.date || "")
        }))
        .sort((a, b) => b.date - a.date)
        .map((page) => ({
          title: page.frontmatter.title,
          description: page.excerpt,
          url: `${pluginOptions.site_url}${page.path}`,
          date: page.date
        }))
        .slice(0, count)
        .forEach((page) => feed.item(page));

      fs.writeFile(path.resolve(ctx.outDir, "rss.xml"), feed.xml());
      console.log(chalk.green.bold("RSS has been generated!"));
    }
  };
};
