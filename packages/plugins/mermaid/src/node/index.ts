import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type * as MarkdownIt from "markdown-it";
import type { MermaidOptions } from "../shared";
import MarkdownItMermaid from "./markdown-it-mermaid";

export const mermaidPlugin = (options: MermaidOptions = {}): Plugin => ({
  name: "@renovamen/vuepress-plugin-mermaid",

  define: {
    __MERMAID_OPTIONS__: options
  },

  clientConfigFile: path.resolve(__dirname, "../client/config.js"),

  extendsMarkdown: (md: MarkdownIt): void => {
    md.use(MarkdownItMermaid(options.token));
  }
});

export default mermaidPlugin;
export * from "../shared";
