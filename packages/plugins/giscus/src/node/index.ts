import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { GiscusOptions } from "../shared";

export * from "../shared";

export const giscusPlugin =
  (options: GiscusOptions): Plugin =>
  (app) => ({
    name: "vuepress-plugin-giscus",

    define: {
      __GISCUS_OPTIONS__: options,
      __SITE_LOCALES__: app.siteData.locales,
      __SITE_LANG__: app.siteData.lang
    },

    clientConfigFile: path.resolve(__dirname, "../client/config.js")
  });

export default giscusPlugin;
