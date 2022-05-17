import type { Page, Plugin } from "@vuepress/core";
import { readingTime } from "./reading-time";
import type { ReadingTime, ReadingTimeOptions } from "./types";

const pagePathRegex = (paths: string[] | undefined, page: string) => {
  const match =
    paths &&
    paths.some((p) => {
      const testRegex = new RegExp(p);
      return testRegex.test(page);
    });
  return match;
};

export const readingTimePlugin = (
  options: ReadingTimeOptions = {}
): Plugin => ({
  name: "@renovamen/vuepress-plugin-reading-time",

  extendsPage: (page: Page<{ readingTime?: ReadingTime }>): void => {
    if (!page.content) return;

    if (page.frontmatter && page.frontmatter.readingTime) {
      page.data.readingTime = page.frontmatter.readingTime as ReadingTime;
    }

    if (options.includes && options.includes.length > 0) {
      // `options.includes` is specified, ignores `options.excludes`
      const includePage = pagePathRegex(options.includes, page.path);
      if (!includePage) return;
    } else {
      // `options.includes` is not specified
      const excludePage = pagePathRegex(options.excludes, page.path);
      if (excludePage) return;
    }

    page.data.readingTime = readingTime(page.content, options);
  }
});
