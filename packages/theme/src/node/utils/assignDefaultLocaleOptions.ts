import type {
  GungnirThemeData,
  GungnirThemeI18n,
  GungnirThemeLocaleOptions
} from "../../shared";
import { en } from "../i18n";

const deleteSelectLanguageName = (options: GungnirThemeI18n) => {
  const newOptions = { ...options };
  delete newOptions.selectLanguageName;
  return newOptions;
};

export const DEFAULT_LOCALE_OPTIONS: GungnirThemeLocaleOptions = {
  // home page
  blogNumPerPage: 10,
  hitokoto: false,
  personalInfo: null,
  homeHeaderImages: null,

  pages: null,
  catalog: true,

  // color mode
  colorMode: "auto",
  colorModeSwitch: true,

  // search
  searchIcon: "ri-search-2-line",

  // language switcher icon
  langIcon: "hi-translate",

  // navbar
  navbar: [],

  // sidebar
  sidebar: "auto",
  sidebarDepth: 2,

  // page meta
  repo: null,
  editLink: true,
  lastUpdated: true,
  contributors: false,

  // footer
  footer: `
    Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
  `,

  ...deleteSelectLanguageName(en)
};

export const DEFAULT_LOCALE_DATA: GungnirThemeData = {
  // navbar
  selectLanguageName: en.selectLanguageName
};

/**
 * Assign default options
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
    ...DEFAULT_LOCALE_DATA,
    ...localeOptions.locales["/"]
  });
};
