import type { Plugin } from "@vuepress/core";
import { path } from "@vuepress/utils";
import type { CodeEnhanceOptions } from "../shared";

export * from "../shared";

const codeEnhancePlugin: Plugin<CodeEnhanceOptions> = (
  options: CodeEnhanceOptions,
  app
) => {
  return {
    name: "vuepress-plugin-code-enhance",

    define: {
      __CODE_ENHANCE_OPTIONS__: options
    },

    clientAppSetupFiles: path.resolve(__dirname, "../client/clientAppSetup.js")
  };
};

export default codeEnhancePlugin;
