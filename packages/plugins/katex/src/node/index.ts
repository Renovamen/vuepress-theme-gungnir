import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { KatexOptions } from "katex";
import type MarkdownIt from "markdown-it";
import { katex } from "./markdown-it-katex";

const katexPlugin: Plugin<KatexOptions> = (option: KatexOptions, app) => {
  return {
    name: "@renovamen/vuepress-plugin-katex",
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),
    extendsMarkdown: (md: MarkdownIt): void => {
      md.use(katex, option);
    }
  };
};

export default katexPlugin;
