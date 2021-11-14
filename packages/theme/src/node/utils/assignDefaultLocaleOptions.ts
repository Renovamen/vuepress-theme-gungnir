import type {
  GungnirThemeLocaleData,
  GungnirThemeLocaleOptions
} from "../../shared";

const defaultLocaleOptions: GungnirThemeLocaleOptions = {
  hitokoto: false,
  personalInfo: null,
  homeHeaderImages: null,
  title: "cd",

  // navbar
  navbar: [],
  darkMode: true,
  repo: null,
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",

  // sidebar
  sidebar: "auto",
  sidebarDepth: 2,

  // page meta
  editLink: true,
  editLinkText: "Edit this page",
  lastUpdated: true,
  lastUpdatedText: "Last Updated",
  contributors: true,
  contributorsText: "Contributors",

  // 404 page messages
  notFound: [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`
  ],
  backToHome: "Take me home",

  // a11y
  openInNewWindow: "open in new window",
  toggleDarkMode: "toggle dark mode",
  toggleSidebar: "toggle sidebar"
};

const defaultLocaleData: GungnirThemeLocaleData = {
  // navbar
  selectLanguageName: "English",
  title: "cd"
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
    ...defaultLocaleOptions,
    ...localeOptions
  });

  Object.assign(localeOptions.locales["/"], {
    ...defaultLocaleData,
    ...localeOptions.locales["/"]
  });
};
