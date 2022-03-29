import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type MarkdownIt from "markdown-it";
import { getChart } from "./markdown-it-chart";
import type { ChartOptions } from "./options";

const chartPlugin: Plugin<ChartOptions> = (options: ChartOptions, app) => {
  return {
    name: "vuepress-plugin-chart",

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    extendsMarkdown: (md: MarkdownIt): void => {
      md.use(getChart(options.token));
    }
  };
};

export default chartPlugin;
export * from "./options";
