import { defineClientAppEnhance } from "@vuepress/client";
import Giscus from "./Giscus";

export default defineClientAppEnhance(({ app }) => {
  app.component("Giscus", Giscus);
});
