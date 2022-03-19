import type { MermaidOptions } from "@renovamen/vuepress-plugin-mermaid";
import type { GungnirThemePluginsOptions } from "../../shared";

/**
 * Resolve options for plugin-mermaid
 */
export const resolveMermaidOptions = (
  themePlugins: GungnirThemePluginsOptions
): MermaidOptions | false => {
  if (!themePlugins.mermaid) return false;

  const options = themePlugins.mermaid === true ? {} : themePlugins.mermaid;
  options.darkClass = options.darkClass ? options.darkClass : "dark";
  options.darkSelector = options.darkSelector ? options.darkSelector : "html";

  return options;
};
