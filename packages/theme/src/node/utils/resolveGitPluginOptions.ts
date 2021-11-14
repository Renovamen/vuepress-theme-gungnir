import type { GitPluginOptions } from "@vuepress/plugin-git";
import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions
} from "../../shared";

/**
 * Resolve options for @vuepress/plugin-git
 */
export const resolveGitPluginOptions = (
  themePlugins: GungnirThemePluginsOptions,
  localeOptions: GungnirThemeLocaleOptions
): GitPluginOptions | boolean => {
  if (themePlugins?.git === false) {
    return false;
  }

  const enableUpdatedTime = localeOptions.lastUpdated !== false;
  const enableContributors = localeOptions.contributors !== false;

  if (!enableUpdatedTime && !enableContributors) {
    return false;
  }

  return {
    createdTime: false,
    updatedTime: enableUpdatedTime,
    contributors: enableContributors
  };
};
