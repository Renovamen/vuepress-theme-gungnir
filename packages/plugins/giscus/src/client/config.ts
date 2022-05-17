/* eslint-disable no-undef */

import { defineClientConfig } from "@vuepress/client";
import Giscus from "./Giscus";

export default defineClientConfig({
  enhance: ({ app }) => {
    if (__VUEPRESS_SSR__) return;
    app.component("Giscus", Giscus);
  }
});
