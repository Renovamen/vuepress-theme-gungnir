import type { ActiveHeaderLinksPluginOptions } from "@vuepress/plugin-active-header-links";
import type { GungnirThemePluginsOptions } from "../../shared";

/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
export const resolveActiveHeaderLinksPluginOptions = (
  themePlugins: GungnirThemePluginsOptions
): ActiveHeaderLinksPluginOptions | boolean => {
  if (themePlugins?.activeHeaderLinks === false) {
    return false;
  }

  return {
    headerLinkSelector: "a.sidebar-item",
    headerAnchorSelector: ".header-anchor",
    // should greater than page transition duration
    delay: 300
  };
};
