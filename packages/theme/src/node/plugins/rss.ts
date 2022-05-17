import { rssPlugin } from "@renovamen/vuepress-plugin-rss";
import type { RSSOptions } from "@renovamen/vuepress-plugin-rss";
import type { Plugin } from "@vuepress/core";
import type { GungnirThemeData } from "../../shared";

export const getRssPlugin = (
  localeOptions: GungnirThemeData,
  rss?: RSSOptions | false
): Plugin | [] => {
  if (!rss) return [];

  if (!rss.filter) rss.filter = (page) => page.frontmatter.layout === "Post";
  if (!rss.author) rss.author = localeOptions.personalInfo?.name;

  return rssPlugin(rss);
};
