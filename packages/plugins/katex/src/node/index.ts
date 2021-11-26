import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { KatexOptions } from "katex";
import { katex } from "./markdown-it-katex";

const markdownEnhancePlugin: Plugin<KatexOptions> = (option, app) => {
  return {
    name: "@renovamen/vuepress-plugin-katex",
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),
    extendsMarkdown: (md): void => {
      md.use(katex, option);
    }
  };
};

export default markdownEnhancePlugin;
