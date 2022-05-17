import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { KatexOptions } from "katex";
import type * as MarkdownIt from "markdown-it";
import MarkdownItKatex from "./markdown-it-katex";

export const katexPlugin = (option: KatexOptions = {}): Plugin => ({
  name: "@renovamen/vuepress-plugin-katex",

  clientConfigFile: path.resolve(__dirname, "../client/config.js"),

  extendsMarkdown: (md: MarkdownIt): void => {
    md.use(MarkdownItKatex, option);
  }
});

export default katexPlugin;
