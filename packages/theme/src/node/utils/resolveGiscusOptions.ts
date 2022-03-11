import type { GiscusOptions } from "vuepress-plugin-giscus";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions
} from "../../shared";

/**
 * Resolve options for plugin-giscus
 */
export const resolveGiscusOptions = (
  themePlugins: GungnirThemePluginsOptions,
  localeOptions: GungnirThemeLocaleOptions
): GiscusOptions | false => {
  if (!themePlugins.giscus) {
    return false;
  }

  localeOptions.giscusDarkTheme = themePlugins.giscus.darkTheme
    ? themePlugins.giscus.darkTheme
    : "dark_dimmed";
  localeOptions.giscusLightTheme = themePlugins.giscus.theme
    ? themePlugins.giscus.theme
    : "light";
  themePlugins.giscus.theme = localeOptions.giscusLightTheme;

  delete themePlugins.giscus.darkTheme;

  return themePlugins.giscus;
};
