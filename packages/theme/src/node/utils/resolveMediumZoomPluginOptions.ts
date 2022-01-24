import type { MediumZoomPluginOptions } from "@vuepress/plugin-medium-zoom";
import type { GungnirThemePluginsOptions } from "../../shared";

/**
 * Resolve options for @vuepress/plugin-medium-zoom
 */
export const resolveMediumZoomPluginOptions = (
  themePlugins: GungnirThemePluginsOptions
): MediumZoomPluginOptions | boolean => {
  if (themePlugins?.mediumZoom === false) {
    return false;
  }

  return {
    selector:
      ".theme-gungnir-content > img, .theme-gungnir-content :not(a) > img",
    zoomOptions: {},
    // should greater than page transition duration
    delay: 300
  };
};
