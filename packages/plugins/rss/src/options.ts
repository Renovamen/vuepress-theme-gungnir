import type { Page } from "@vuepress/core";

export interface RSSOptions {
  /**
   * URL of your site.
   */
  siteURL: string;

  /**
   * Title of your site.
   */
  title?: string;

  /**
   * Description of your site.
   *
   * @default ""
   */
  description?: string;

  /**
   * Copyright of your site.
   *
   * @default ""
   */
  copyright?: string;

  /**
   * Number of posts to be generated.
   *
   * @default 20
   */
  count?: number;

  /**
   * A filter function to choose which posts to be generated.
   */
  filter?: (page: Page) => boolean;
}
