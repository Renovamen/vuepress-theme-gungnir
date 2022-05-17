import type { Plugin } from "@vuepress/core";
import { fs, logger, path } from "@vuepress/utils";
import * as RSS from "rss";
import type { RSSOptions } from "./options";

export const rssPlugin = (options: RSSOptions): Plugin => ({
  name: "@renovamen/vuepress-plugin-rss",

  async onGenerated(app): Promise<void> {
    const { filter = () => true, count = 20 } = options;
    const rssURL = `${options.siteURL}/rss.xml`;

    const feed = new RSS({
      title:
        options.title ||
        app.options.title ||
        app.options.locales["/"].title ||
        "",
      description:
        options.description ||
        app.options.description ||
        app.options.locales["/"].description ||
        "",
      feed_url: rssURL,
      site_url: `${options.siteURL}`,
      copyright: `${options.copyright || ""}`,
      language: "en"
    });

    app.pages
      .filter((page) => filter(page))
      .map((page) => ({
        ...page,
        date: new Date(page.frontmatter.date || "")
      }))
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .map((page) => ({
        title: page.frontmatter.title || "",
        description: page.excerpt || "",
        author: page.frontmatter.author || options.author || "",
        url: `${options.siteURL}${page.path}`,
        date: page.date
      }))
      .slice(0, count)
      .forEach((page) => feed.item(page));

    const outputPath = path.resolve(app.dir.dest("rss.xml"));
    fs.writeFile(outputPath, feed.xml());

    logger.success(
      `RSS has been generated to: ${outputPath}, you can see it via: ${rssURL}`
    );
  }
});
