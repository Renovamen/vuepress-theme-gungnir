import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { GiscusOptions } from "../shared";

export * from "../shared";

const giscusPlugin: Plugin<GiscusOptions> = (options: GiscusOptions, app) => {
  return {
    name: "vuepress-plugin-giscus",

    define: {
      __GISCUS_OPTIONS__: options
    },

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    )
  };
};

export default giscusPlugin;
