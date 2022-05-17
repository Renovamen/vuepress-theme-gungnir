import type { Plugin } from "@vuepress/core";
import type * as MarkdownIt from "markdown-it";
import * as MarkdownItFootnote from "markdown-it-footnote";
import * as MarkdownItMark from "markdown-it-mark";
import type { MdPlusOptions } from "./types";

export const mdPlusPlugin = (options: MdPlusOptions = {}): Plugin => ({
  name: "@renovamen/vuepress-plugin-md-plus",

  extendsMarkdown: (md: MarkdownIt): void => {
    if (options.footnote || options.all) md.use(MarkdownItFootnote);
    if (options.mark || options.all) md.use(MarkdownItMark);
  }
});

export * from "./types";
export default mdPlusPlugin;
