import { defineClientAppEnhance } from "@vuepress/client";
import Chart from "./Chart";

export default defineClientAppEnhance(({ app }) => {
  app.component("Chart", Chart);
});
