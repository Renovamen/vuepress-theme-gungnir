import type { PwaPopupPluginOptions } from "@vuepress/plugin-pwa-popup";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions
} from "../../shared";

/**
 * Resolve options for @vuepress/plugin-pwa-popup
 */
export const resolvePWAPopupOptions = (
  themePlugins: GungnirThemePluginsOptions,
  localeOptions: GungnirThemeLocaleOptions
): PwaPopupPluginOptions | boolean => {
  if (!themePlugins?.pwa || !localeOptions.locales) {
    return false;
  }
  const option = Object.assign({
    locales: {}
  });
  for (const local in localeOptions.locales) {
    const message =
      localeOptions.locales[local]?.pwaPopupMessage ||
      "New content is available.";
    const buttonText =
      localeOptions.locales[local]?.pwaPopupButtonText || "Refresh";
    option.locales[local] = {};
    option.locales[local].message = message;
    option.locales[local].buttonText = buttonText;
  }
  return option;
};
