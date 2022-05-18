import type { MdPlusOptions } from "@renovamen/vuepress-plugin-md-plus";
import type { MermaidOptions } from "@renovamen/vuepress-plugin-mermaid";
import type { ReadingTimeOptions } from "@renovamen/vuepress-plugin-reading-time";
import type { RSSOptions } from "@renovamen/vuepress-plugin-rss";
import type { SearchPluginOptions } from "@renovamen/vuepress-plugin-search";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import type { BlogOptions } from "vuepress-plugin-blog2";
import type { ChartOptions } from "vuepress-plugin-chart";
import type { CodeEnhanceOptions } from "vuepress-plugin-code-enhance";
import type { GiscusOptions } from "vuepress-plugin-giscus";

export interface GungnirGiscusOptions extends GiscusOptions {
  darkTheme?: string;
}

export interface GungnirThemeContainerOptions {
  info?: boolean;
  tip?: boolean;
  warning?: boolean;
  danger?: boolean;
  details?: boolean;
  codeGroup?: boolean;
  codeGroupItem?: boolean;
  link?: boolean | { siteDomain?: boolean };
}

export interface GungnirThemeBlogPluginOptions
  extends Pick<BlogOptions, "filter"> {
  /**
   * @default "/tags/"
   */
  tag?: string;

  /**
   * @default "/tags/:name/"
   */
  tagItem?: string;
}

export interface GungnirThemePluginsOptions {
  /**
   * Enable @vuepress/plugin-active-header-links or not
   */
  activeHeaderLinks?: boolean;

  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: GungnirThemeContainerOptions;

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean;

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   *
   * @default true
   */
  mediumZoom?: boolean;

  /**
   * Enable @vuepress/plugin-nprogress or not
   *
   * @default true
   */
  nprogress?: boolean;

  /**
   * Enable @vuepress/plugin-prismjs or not
   *
   * @default true
   */
  prismjs?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-katex or not
   *
   * @default false
   */
  katex?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-mermaid or not
   *
   * @default false
   */
  mermaid?: boolean | MermaidOptions;

  /**
   * Enable @renovamen/vuepress-plugin-chart or not
   *
   * @default false
   */
  chartjs?: boolean | ChartOptions;

  /**
   * Enable @renovamen/vuepress-plugin-reading-time or not
   * and pass it's options
   */
  readingTime?: false | ReadingTimeOptions;

  /**
   * Enable vuepress-plugin-code-enhance or not and pass it's options
   */
  codeEnhance?: false | CodeEnhanceOptions;

  /**
   * Enable vuepress-plugin-giscus or not and pass it's options
   *
   * @default false
   */
  giscus?: false | GungnirGiscusOptions;

  /**
   * Enable @vuepress/plugin-google-analytics or not and pass your
   * Measurement ID
   *
   * @default false
   */
  ga?: false | string;

  /**
   * Enable @renovamen/vuepress-plugin-baidu-tongji or not and pass
   * your tracking code
   *
   * @default false
   */
  ba?: false | string;

  /**
   * Enable @renovamen/vuepress-plugin-md-plus or not
   *
   * @default false
   */
  mdPlus?: false | MdPlusOptions;

  /**
   * Enable @renovamen/vuepress-plugin-rss or not and pass it's options
   *
   * @default false
   */
  rss?: false | RSSOptions;

  /**
   * Enable @vuepress/vuepress-plugin-pwa or not and pass it's options
   *
   * @default false
   */
  pwa?: boolean | PwaPluginOptions;

  /**
   * Enable @renovamen/vuepress-plugin-search or not and pass it's options
   *
   * @default {}
   */
  search?: false | SearchPluginOptions;

  /**
   * Options for vuepress-plugin-blog2
   */
  blog?: GungnirThemeBlogPluginOptions;
}
