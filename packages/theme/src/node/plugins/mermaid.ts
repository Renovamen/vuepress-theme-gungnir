import { mermaidPlugin } from "@renovamen/vuepress-plugin-mermaid";
import type { MermaidOptions } from "@renovamen/vuepress-plugin-mermaid";
import type { Plugin } from "@vuepress/core";

export const getMermaidPlugin = (
  mermaid?: MermaidOptions | boolean
): Plugin | [] => {
  if (!mermaid) return [];

  mermaid = mermaid === true ? {} : mermaid;
  mermaid.darkClass = mermaid.darkClass ? mermaid.darkClass : "dark";
  mermaid.darkSelector = mermaid.darkSelector ? mermaid.darkSelector : "html";

  return mermaidPlugin(mermaid);
};
