import type { Plugin } from "@vuepress/core";
import { readingTime } from "./reading-time";
import type { ReadingTime, ReadingTimeOptions } from "./types";

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

      const excludePage =
        options.excludes &&
        options.excludes.some((p) => {
          const testRegex = new RegExp(p);
          return testRegex.test(page.path);
        });

      if (excludePage) return {};

      return {
        readingTime: readingTime(page.content, options)
      };
    }
  };
};
