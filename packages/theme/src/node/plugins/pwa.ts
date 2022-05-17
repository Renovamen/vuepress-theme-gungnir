import type { Plugin } from "@vuepress/core";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import type { PwaPluginOptions } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import type { GungnirThemeData } from "../../shared";

export const getPwaPlugin = (pwa?: PwaPluginOptions | boolean): Plugin | [] => {
  return pwa ? pwaPlugin(pwa === true ? {} : pwa) : [];
};

export const getPwaPopupPlugin = (
  localeOptions: GungnirThemeData,
  pwa?: PwaPluginOptions | boolean
): Plugin | [] => {
  if (!pwa || !localeOptions.locales) {
    return [];
  }

  const options = Object.assign({
    locales: {}
  });

  for (const local in localeOptions.locales) {
    const message =
      localeOptions.locales[local]?.pwaPopupMessage ||
      "New content is available.";
    const buttonText =
      localeOptions.locales[local]?.pwaPopupButtonText || "Refresh";
    options.locales[local] = {};
    options.locales[local].message = message;
    options.locales[local].buttonText = buttonText;
  }

  return pwaPopupPlugin(options);
};
