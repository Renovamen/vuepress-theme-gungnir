import type { ViteBundlerOptions } from "@vuepress/bundler-vite";
import type { Page, Theme } from "@vuepress/core";
import { fs, path } from "@vuepress/utils";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePageData,
  GungnirThemePluginsOptions
} from "../shared";
import { getPlugins } from "./plugins";
import { assignDefaultLocaleOptions, createPages } from "./utils";

export interface GungnirThemeOptions extends GungnirThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: GungnirThemePluginsOptions;
}

export const gungnirTheme =
  ({ themePlugins = {}, ...localeOptions }: GungnirThemeOptions = {}): Theme =>
  (app) => {
    assignDefaultLocaleOptions(localeOptions);

    localeOptions.search = !(themePlugins.search === false);

    return {
      name: "vuepress-theme-gungnir",

      layouts: path.resolve(__dirname, "../client/layouts"),

      templateBuild: path.resolve(
        __dirname,
        "../../templates/index.build.html"
      ),

      // use alias to make all components replaceable
      alias: Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, "../client/components"))
          .filter((file) => file.endsWith(".vue"))
          .map((file) => [
            `@theme/${file}`,
            path.resolve(__dirname, "../client/components", file)
          ])
      ),

      clientConfigFile: path.resolve(__dirname, "../client/config.js"),

      extendsBundlerOptions: (config: any, app): void => {
        const { bundler } = app.options;

        if (bundler.name.endsWith("vite")) {
          const bundlerConfig = config as ViteBundlerOptions;

          bundlerConfig.viteOptions = require("vite").mergeConfig(
            bundlerConfig.viteOptions as Record<string, unknown>,
            {
              optimizeDeps: {
                exclude: ["oh-vue-icons/icons"]
              },
              ssr: {
                noExternal: ["oh-vue-icons"]
              }
            }
          );
        }
      },

      extendsPage: (page: Page<GungnirThemePageData>) => {
        // save relative file path into page data to generate edit link
        page.data.filePathRelative = page.filePathRelative;
        // save title into route meta to generate navbar and sidebar
        page.routeMeta.title = page.title;
      },

      plugins: getPlugins(themePlugins, localeOptions),

      onInitialized: async (app): Promise<void> => {
        createPages(app, localeOptions);
      }
    };
  };
