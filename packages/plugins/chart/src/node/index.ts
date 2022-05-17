import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type * as MarkdownIt from "markdown-it";
import MarkdownItChart from "./markdown-it-chart";
import type { ChartOptions } from "./options";

export const chartPlugin = (options: ChartOptions = {}): Plugin => ({
  name: "vuepress-plugin-chart",

  clientConfigFile: path.resolve(__dirname, "../client/config.js"),

  extendsMarkdown: (md: MarkdownIt): void => {
    md.use(MarkdownItChart(options.token));
  }
});

export default chartPlugin;
export * from "./options";
