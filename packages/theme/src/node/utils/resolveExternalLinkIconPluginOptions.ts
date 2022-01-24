import type { ExternalLinkIconPluginOptions } from "@vuepress/plugin-external-link-icon";
import type {
  GungnirThemeData,
  GungnirThemePluginsOptions
} from "../../shared";

/**
 * Resolve options for @vuepress/plugin-external-link-icon
 */
export const resolveExternalLinkIconPluginOptions = (
  themePlugins: GungnirThemePluginsOptions,
  localeOptions: GungnirThemeData
): ExternalLinkIconPluginOptions | boolean => {
  if (themePlugins?.externalLinkIcon === false) {
    return false;
  }

  return {
    locales: Object.entries(localeOptions.locales || {}).reduce(
      (result, [key, value]) => {
        result[key] = {
          openInNewWindow:
            value.openInNewWindow ?? localeOptions.openInNewWindow
        };
        return result;
      },
      {}
    )
  };
};
