/* eslint-disable no-undef */

import { defineClientConfig } from "@vuepress/client";
import { useBaiduTongji } from "./composables";

declare const __BA_ID__: string;

const id = __BA_ID__;

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) return;
    useBaiduTongji(id);
  }
});
