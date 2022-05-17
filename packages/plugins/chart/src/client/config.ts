import { defineClientConfig } from "@vuepress/client";
import Chart from "./Chart";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Chart", Chart);
  }
});
