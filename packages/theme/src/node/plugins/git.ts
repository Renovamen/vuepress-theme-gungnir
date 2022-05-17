import type { Plugin } from "@vuepress/core";
import { gitPlugin } from "@vuepress/plugin-git";
import type { GungnirThemeData } from "../../shared";

export const getGitPlugin = (
  localeOptions: GungnirThemeData,
  git?: boolean
): Plugin | [] => {
  if (git === false) return [];

  return gitPlugin({
    createdTime: false,
    updatedTime: localeOptions.lastUpdated !== false,
    contributors: localeOptions.contributors !== false
  });
};
