import type { GungnirThemeLocaleOptions } from "../../shared";
import { en } from "../i18n";

export const DEFAULT_LOCALE_OPTIONS: GungnirThemeLocaleOptions = {
  hitokoto: false,
  personalInfo: null,
  homeHeaderImages: null,
  pages: null,
  catalog: true,

  postNumPerPage: 10,

  // search
  searchIcon: "ri-search-2-line",

  // language switcher icon
  langIcon: "hi-translate",

  // navbar
  navbar: [],
  repo: null,

  // sidebar
  sidebar: "auto",
  sidebarDepth: 2,

  // page meta
  editLink: true,
  lastUpdated: true,
  contributors: false,

  // footer
  footer: `
    Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
  `,

  ...en
};

/**
 * Assign default options to `themeConfig`
 */
export const assignDefaultLocaleOptions = (
  localeOptions: GungnirThemeLocaleOptions
): void => {
  if (!localeOptions.locales) {
    localeOptions.locales = {};
  }

  if (!localeOptions.locales["/"]) {
    localeOptions.locales["/"] = {};
  }

  Object.assign(localeOptions, {
    ...DEFAULT_LOCALE_OPTIONS,
    ...localeOptions
  });

  Object.assign(localeOptions.locales["/"], {
    ...en,
    ...localeOptions.locales["/"]
  });
};
