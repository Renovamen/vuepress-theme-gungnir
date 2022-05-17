import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { CodeEnhanceOptions } from "../shared";

export * from "../shared";

export const codeEnhancePlugin = (
  options: CodeEnhanceOptions = {}
): Plugin => ({
  name: "vuepress-plugin-code-enhance",

  define: {
    __CODE_ENHANCE_OPTIONS__: options
  },

  clientConfigFile: path.resolve(__dirname, "../client/config.js")
});

export default codeEnhancePlugin;
