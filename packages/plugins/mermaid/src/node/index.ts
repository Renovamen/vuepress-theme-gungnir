import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type MarkdownIt from "markdown-it";
import type { MermaidOptions } from "../shared";
import { mermaid } from "./markdown-it-mermaid";

const mermaidPlugin: Plugin<MermaidOptions> = (
  options: MermaidOptions,
  app
) => {
  return {
    name: "@renovamen/vuepress-plugin-mermaid",

    define: {
      __MERMAID_OPTIONS__: options
    },

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    extendsMarkdown: (md: MarkdownIt): void => {
      md.use(mermaid);
    }
  };
};

export default mermaidPlugin;
export * from "../shared";
