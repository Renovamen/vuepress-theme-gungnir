import type { Plugin } from "@vuepress/core";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";

export const getActiveHeaderLinksPlugin = (
  activeHeaderLinks?: boolean
): Plugin | [] => {
  if (activeHeaderLinks === false) return [];

  return activeHeaderLinksPlugin({
    headerLinkSelector: "a.sidebar-item",
    headerAnchorSelector: ".header-anchor",
    // should greater than page transition duration
    delay: 300
  });
};
