import type { Plugin } from "@vuepress/core";
import { giscusPlugin } from "vuepress-plugin-giscus";
import type { GungnirGiscusOptions, GungnirThemeData } from "../../shared";

export const getGiscusPlugin = (
  localeOptions: GungnirThemeData,
  giscus?: GungnirGiscusOptions | false
): Plugin | [] => {
  if (!giscus) return [];

  localeOptions.giscusDarkTheme = giscus.darkTheme
    ? giscus.darkTheme
    : "dark_dimmed";
  localeOptions.giscusLightTheme = giscus.theme ? giscus.theme : "light";
  giscus.theme = localeOptions.giscusLightTheme;

  delete giscus.darkTheme;

  return giscusPlugin(giscus);
};
