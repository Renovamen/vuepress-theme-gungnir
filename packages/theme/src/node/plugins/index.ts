import { baiduTongjiPlugin } from "@renovamen/vuepress-plugin-baidu-tongji";
import { katexPlugin } from "@renovamen/vuepress-plugin-katex";
import { mdPlusPlugin } from "@renovamen/vuepress-plugin-md-plus";
import { readingTimePlugin } from "@renovamen/vuepress-plugin-reading-time";
import { searchPlugin } from "@renovamen/vuepress-plugin-search";
import type { PluginConfig } from "@vuepress/core";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { palettePlugin } from "@vuepress/plugin-palette";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import { chartPlugin } from "vuepress-plugin-chart";
import { codeEnhancePlugin } from "vuepress-plugin-code-enhance";
import type {
  GungnirThemeData,
  GungnirThemePluginsOptions
} from "../../shared";
import { getActiveHeaderLinksPlugin } from "./activeHeaderLinks";
import { getBlogPlugin } from "./blog";
import { getContainerPlugin } from "./container";
import { getGiscusPlugin } from "./giscus";
import { getGitPlugin } from "./git";
import { getMediumZoomPlugin } from "./mediumZoom";
import { getMermaidPlugin } from "./mermaid";
import { getPwaPlugin, getPwaPopupPlugin } from "./pwa";
import { getRssPlugin } from "./rss";

export const getPlugins = (
  plugins: GungnirThemePluginsOptions,
  localeOptions: GungnirThemeData
): PluginConfig => {
  const pluginConfig = [
    // @vuepress/plugin-active-header-link
    getActiveHeaderLinksPlugin(plugins.activeHeaderLinks),
    // @vuepress/plugin-git
    getGitPlugin(localeOptions, plugins.git),
    // @vuepress/plugin-medium-zoom
    getMediumZoomPlugin(plugins.mediumZoom),
    // @vuepress/plugin-nprogress
    plugins.nprogress !== false ? nprogressPlugin() : [],
    // @vuepress/plugin-palette
    palettePlugin({ preset: "sass" }),
    // @vuepress/plugin-prismjs
    plugins.prismjs !== false ? prismjsPlugin() : [],
    // @vuepress/plugin-theme-data
    themeDataPlugin({ themeData: localeOptions }),
    // @renovamen/vuepress-plugin-search
    plugins.search !== false ? searchPlugin(plugins.search) : [],
    // @renovamen/vuepress-plugin-katex
    plugins.katex ? katexPlugin() : [],
    // @renovamen/vuepress-plugin-mermaid
    getMermaidPlugin(plugins.mermaid),
    // vuepress-plugin-chart
    plugins.chartjs
      ? chartPlugin(plugins.chartjs === true ? {} : plugins.chartjs)
      : [],
    // @renovamen/vuepress-plugin-reading-time
    plugins.readingTime !== false ? readingTimePlugin(plugins.readingTime) : [],
    // vuepress-plugin-code-enhance
    plugins.codeEnhance !== false ? codeEnhancePlugin(plugins.codeEnhance) : [],
    // @renovamen/vuepress-plugin-rss
    getRssPlugin(localeOptions, plugins.rss),
    // vuepress-plugin-giscus
    getGiscusPlugin(localeOptions, plugins.giscus),
    // @vuepress/plugin-google-analytics
    typeof plugins.ga === "string"
      ? googleAnalyticsPlugin({ id: plugins.ga })
      : [],
    // @renovamen/vuepress-plugin-baidu-tongji
    typeof plugins.ba === "string" ? baiduTongjiPlugin({ id: plugins.ba }) : [],
    // @renovamen/vuepress-plugin-md-plus
    plugins.mdPlus ? mdPlusPlugin(plugins.mdPlus) : [],
    // @vuepress/plugin-pwa
    getPwaPlugin(plugins.pwa),
    // @vuepress/plugin-pwa-popup
    getPwaPopupPlugin(localeOptions, plugins.pwa),
    // vuepress-plugin-blog2
    getBlogPlugin(localeOptions, plugins.blog)
  ];

  const containerConfig = getContainerPlugin(localeOptions, plugins.container);

  return pluginConfig.concat(containerConfig);
};
