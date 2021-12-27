import type { Plugin } from "@vuepress/core";
import type MarkdownIt from "markdown-it";
import footnote from "markdown-it-footnote";
import mark from "markdown-it-mark";
import type { MdPlusOptions } from "./types";

const mdPlusPlugin: Plugin<MdPlusOptions> = (options: MdPlusOptions, app) => {
  return {
    name: "@renovamen/vuepress-plugin-md-plus",
    extendsMarkdown: (md: MarkdownIt): void => {
      if (options.footnote || options.all) md.use(footnote);
      if (options.mark || options.all) md.use(mark);
    }
  };
};

export * from "./types";
export default mdPlusPlugin;
