import type { ReadingTimeOptions } from "@renovamen/vuepress-plugin-reading-time";
import type { GungnirThemePluginsOptions } from "../../shared";

/**
 * Resolve options for @renovamen/vuepress-plugin-reading-time
 */
export const resolveReadingTimePluginOptions = (
  themePlugins: GungnirThemePluginsOptions
): ReadingTimeOptions | boolean => {
  if (themePlugins?.readingTime === false) {
    return false;
  }

  const options = Object.assign(
    {
      excludes: ["/tags/.*", "/links"]
    },
    themePlugins.readingTime
  );
  return options;
};
