import type { Page, Theme, ThemeConfig } from "@vuepress/core";
import { createPage } from "@vuepress/core";
import { fs, path } from "@vuepress/utils";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePageData,
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
  resolveMediumZoomPluginOptions,
  resolvePWAPopupOptions,
  resolveRSSPluginOptions
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

export const gungnirTheme: Theme<GungnirThemeOptions> = (
  { themePlugins = {}, ...localeOptions },
  app
) => {
  if (app.options.bundler.endsWith("vite")) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    app.options.bundlerConfig.viteOptions = require("vite").mergeConfig(
      app.options.bundlerConfig.viteOptions,
      {
        css: {
          preprocessorOptions: {
            scss: { charset: false }
          }
        }
      }
    );
  }

  assignDefaultLocaleOptions(localeOptions);

  return {
    name: "vuepress-theme-gungnir",

    layouts: path.resolve(__dirname, "../client/layouts"),

    templateBuild: path.resolve(__dirname, "../../templates/index.build.html"),

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

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    clientAppSetupFiles: path.resolve(__dirname, "../client/clientAppSetup.js"),

    extendsPage: (page: Page<GungnirThemePageData>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative;
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title;
    },

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
      ["@renovamen/vuepress-plugin-search", localeOptions.search],
      ["@renovamen/vuepress-plugin-katex", themePlugins.katex === true],
      ["@renovamen/vuepress-plugin-mermaid", themePlugins.mermaid === true],
      ["vuepress-plugin-chart", themePlugins.chartjs === true],
      ["@renovamen/vuepress-plugin-reading-time", themePlugins.readingTime],
      ["vuepress-plugin-code-enhance", themePlugins.codeEnhance],
      ["@renovamen/vuepress-plugin-rss", resolveRSSPluginOptions(themePlugins)],
      [
        "vuepress-plugin-giscus",
        themePlugins.giscus === undefined ? false : themePlugins.giscus
      ],
      [
        "@vuepress/plugin-google-analytics",
        typeof themePlugins.ga === "string" ? { id: themePlugins.ga } : false
      ],
      [
        "@renovamen/vuepress-plugin-baidu-tongji",
        typeof themePlugins.ba === "string" ? { id: themePlugins.ba } : false
      ],
      [
        "@renovamen/vuepress-plugin-md-plus",
        themePlugins.mdPlus === undefined ? false : themePlugins.mdPlus
      ],
      [
        "@vuepress/plugin-google-analytics",
        typeof themePlugins.ga === "string" ? { id: themePlugins.ga } : false
      ],
      ["@vuepress/plugin-pwa", themePlugins.pwa ? themePlugins.pwa : false],
      [
        "@vuepress/plugin-pwa-popup",
        resolvePWAPopupOptions(themePlugins, localeOptions)
      ]
    ],

    async onInitialized(app) {
      const homepage = await createPage(app, {
        path: "/",
        frontmatter: {
          layout: "HomePage"
        }
      });
      app.pages.push(homepage);

      const tags = await createPage(app, {
        path: "/tags",
        frontmatter: {
          layout: "Tags"
        }
      });
      app.pages.push(tags);

      /**
       * Create page for each tag manully to avoid the issues caused by
       * dynamic routes, see https://github.com/Renovamen/vuepress-theme-gungnir/issues/28.
       */
      const addedTags = {};
      let postNum = 0;

      for (const page of app.pages) {
        if (page.frontmatter.layout !== "Post") continue;

        for (const tag of page.frontmatter.tags as string[]) {
          if (addedTags[tag] === true) continue;

          console.log(tag);

          const tagPage = await createPage(app, {
            path: `/tags/${tag}`,
            frontmatter: {
              layout: "Tags"
            }
          });
          app.pages.push(tagPage);

          addedTags[tag] = true;
        }

        postNum++;
      }

      /**
       * Create page for pagination manully to avoid the issues caused by
       * dynamic routes.
       */
      const maxPageIndex = Math.max(
        1,
        Math.ceil(postNum / (localeOptions.postNumPerPage as number))
      );

      for (let i = 1; i <= maxPageIndex; i++) {
        const pagination = await createPage(app, {
          path: `/page/${i}`,
          frontmatter: {
            layout: "HomePage"
          }
        });
        app.pages.push(pagination);
      }
    }
  };
};
