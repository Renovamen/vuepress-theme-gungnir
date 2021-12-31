/* eslint-disable no-undef */

import { defineClientAppEnhance } from "@vuepress/client";
import Giscus from "./Giscus";

export default defineClientAppEnhance(({ app }) => {
  if (__VUEPRESS_SSR__) return;
  app.component("Giscus", Giscus);
});
