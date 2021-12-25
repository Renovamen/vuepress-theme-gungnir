import type { Plugin } from "@vuepress/core";
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

export const readingTimePlugin: Plugin<ReadingTimeOptions> = (
  options: ReadingTimeOptions,
  app
) => {
  return {
    name: "@renovamen/vuepress-plugin-reading-time",

    extendsPageData: (page): { readingTime?: ReadingTime } => {
      if (!page.content) return {};

      if (page.frontmatter && page.frontmatter.readingTime) {
        return {
          readingTime: page.frontmatter.readingTime as ReadingTime
        };
      }

      if (options.includes && options.includes.length > 0) {
        // `options.includes` is specified, ignores `options.excludes`
        const includePage = pagePathRegex(options.includes, page.path);
        if (!includePage) return {};
      } else {
        // `options.includes` is not specified
        const excludePage = pagePathRegex(options.excludes, page.path);
        if (excludePage) return {};
      }

      return {
        readingTime: readingTime(page.content, options)
      };
    }
  };
};
