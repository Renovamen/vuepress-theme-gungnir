import type { Plugin, PluginObject } from "@vuepress/core";
import { logger, path } from "@vuepress/utils";

export interface BaiduTongjiPluginOptions {
  id: string;
}

export const baiduTongjiPlugin =
  ({ id }: BaiduTongjiPluginOptions): Plugin =>
  (app) => {
    const plugin: PluginObject = {
      name: "@renovamen/vuepress-plugin-baidu-tongji"
    };

    if (!id) {
      logger.warn(`[${plugin.name}] 'id' is required`);
      return plugin;
    }

    if (app.env.isDev) {
      return plugin;
    }

    return {
      ...plugin,

      clientConfigFile: path.resolve(__dirname, "../client/config.js"),

      define: {
        __BA_ID__: id
      }
    };
  };
