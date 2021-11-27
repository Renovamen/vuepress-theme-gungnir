import type { Theme, ThemeConfig } from "@vuepress/core";
import { createPage } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions
} from "../shared";
import {
  assignDefaultLocaleOptions,
  resolveActiveHeaderLinksPluginOptions,
  resolveContainerPluginOptions,
  resolveContainerPluginOptionsForCodeGroup,
  resolveContainerPluginOptionsForCodeGroupItem,
  resolveContainerPluginOptionsForDetails,
  resolveGitPluginOptions,
  resolveMediumZoomPluginOptions
} from "./utils";

export interface GungnirThemeOptions
  extends ThemeConfig,
    GungnirThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: GungnirThemePluginsOptions;
}

export const gungnirTheme: Theme<GungnirThemeOptions> = ({
  themePlugins = {},
  ...localeOptions
}) => {
  assignDefaultLocaleOptions(localeOptions);

  return {
    name: "vuepress-theme-gungnir",

    layouts: path.resolve(__dirname, "../client/layouts"),

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    clientAppSetupFiles: path.resolve(__dirname, "../client/clientAppSetup.js"),

    // use the relative file path to generate edit link
    extendsPageData: ({ filePathRelative }) => ({ filePathRelative }),

    plugins: [
      [
        "@vuepress/active-header-links",
        resolveActiveHeaderLinksPluginOptions(themePlugins)
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptions(themePlugins, localeOptions, "info")
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptions(themePlugins, localeOptions, "tip")
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptions(themePlugins, localeOptions, "warning")
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptions(themePlugins, localeOptions, "danger")
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptionsForDetails(themePlugins)
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptionsForCodeGroup(themePlugins)
      ],
      [
        "@vuepress/container",
        resolveContainerPluginOptionsForCodeGroupItem(themePlugins)
      ],
      ["@vuepress/git", resolveGitPluginOptions(themePlugins, localeOptions)],
      ["@vuepress/medium-zoom", resolveMediumZoomPluginOptions(themePlugins)],
      ["@vuepress/nprogress", themePlugins.nprogress !== false],
      ["@vuepress/palette", { preset: "sass" }],
      ["@vuepress/prismjs", themePlugins.prismjs !== false],
      ["@vuepress/theme-data", { themeData: localeOptions }],
      ["@renovamen/vuepress-plugin-katex", themePlugins.katex !== false],
      ["@renovamen/vuepress-plugin-mermaid", themePlugins.mermaid !== false]
    ],

    async onInitialized(app) {
      const homepage = await createPage(app, {
        path: "/",
        frontmatter: {
          layout: "HomePage"
        }
      });
      app.pages.push(homepage);
    }
  };
};
