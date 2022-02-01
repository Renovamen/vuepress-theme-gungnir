import type { RSSOptions } from "@renovamen/vuepress-plugin-rss";
import type { GungnirThemePluginsOptions } from "../../shared";

/**
 * Resolve options for @vuepress/plugin-medium-zoom
 */
export const resolveRSSPluginOptions = (
  themePlugins: GungnirThemePluginsOptions
): RSSOptions | boolean => {
  const rssOptions = themePlugins.rss;

  if (!rssOptions) return false;

  if (!rssOptions.filter)
    rssOptions.filter = (page) => page.frontmatter.layout === "Post";

  return rssOptions;
};
