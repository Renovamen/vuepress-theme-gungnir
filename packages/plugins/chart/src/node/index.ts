import { path } from "@vuepress/utils";
import type MarkdownIt from "markdown-it";
import { chart } from "./markdown-it-chart";

const chartPlugin = (option, app) => {
  return {
    name: "vuepress-plugin-chart",

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    extendsMarkdown: (md: MarkdownIt): void => {
      md.use(chart);
    }
  };
};

export default chartPlugin;
