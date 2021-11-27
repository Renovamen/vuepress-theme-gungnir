import { path } from "@vuepress/utils";
import { mermaid } from "./markdown-it-mermaid";

const markdownEnhancePlugin = (option, app) => {
  return {
    name: "@renovamen/vuepress-plugin-mermaid",

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      "../client/clientAppEnhance.js"
    ),

    extendsMarkdown: (md): void => {
      md.use(mermaid);
    }
  };
};

export default markdownEnhancePlugin;
