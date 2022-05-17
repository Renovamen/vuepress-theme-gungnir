import { defineClientConfig } from "@vuepress/client";
import { codeEnhance } from "./composables";

import "./styles/main.css";

export default defineClientConfig({
  setup: () => {
    codeEnhance();
  }
});
