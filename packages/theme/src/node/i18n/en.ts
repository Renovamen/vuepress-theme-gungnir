import type { GungnirThemeI18n } from "../../shared";

const en: GungnirThemeI18n = {
  // language selector
  selectLanguageName: "English",
  selectLanguageText: "Languages",
  selectLanguageAriaLabel: "Select language",

  // page meta
  editLinkText: "Edit this page on GitHub",
  lastUpdatedText: "Last Updated",
  contributorsText: "Contributors",

  // custom containers
  info: "INFO",
  tip: "TIP",
  warning: "WARNING",
  danger: "DANGER",

  // 404 page
  notFound: [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`
  ],
  backToHome: "$ cd /home/",

  // a11y
  openInNewWindow: "open in new window",
  toggleDarkMode: "toggle dark mode",
  toggleSidebar: "toggle sidebar",

  // other pages
  pageText: {
    tags: "Tags",
    links: "Links"
  },

  // "show all tags" button
  showAllTagsText: "Show All",

  // post pager
  postNext: "Next",
  postPrev: "Previous",

  // home page pager
  homeNext: "← Newer Posts",
  homePrev: "Older Posts →"
};

export { en };
