import type { ReadingTimeOptions } from "@renovamen/vuepress-plugin-reading-time";
import type { ThemeData } from "@vuepress/plugin-theme-data";
import type { LocaleData } from "@vuepress/shared";
import type { NavbarConfig, SidebarConfig } from "./nav";
import type { PersonalConfig } from "./personal";

export interface GungnirThemePluginsOptions {
  /**
   * Enable @vuepress/plugin-active-header-links or not
   */
  activeHeaderLinks?: boolean;

  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: {
    info?: boolean;
    tip?: boolean;
    warning?: boolean;
    danger?: boolean;
    details?: boolean;
    codeGroup?: boolean;
    codeGroupItem?: boolean;
  };

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean;

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   */
  mediumZoom?: boolean;

  /**
   * Enable @vuepress/plugin-nprogress or not
   */
  nprogress?: boolean;

  /**
   * Enable @vuepress/plugin-prismjs or not
   */
  prismjs?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-katex or not
   */
  katex?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-mermaid or not
   */
  mermaid?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-chart or not
   */
  chartjs?: boolean;

  /**
   * Enable @renovamen/vuepress-plugin-reading-time or not
   * and pass it's options
   */
  readingTime?: false | ReadingTimeOptions;
}

export type GungnirThemeLocaleOptions = GungnirThemeData;

export type GungnirThemeData = ThemeData<GungnirThemeLocaleData>;

export interface GungnirThemeLocaleData extends LocaleData {
  /**
   * Home path of current locale
   *
   * Used as the link of back-to-home
   */
  home?: string;

  /**
   * Enable hitokoto or not?
   */
  hitokoto?: boolean | string;

  /**
   * Personal information
   */
  personalInfo?: null | PersonalConfig;

  /**
   * Header images on home page
   */
  homeHeaderImages?: null | Array<{ path: string; mask?: string }>;

  /**
   * Display catalog for all posts or not. Catalog can also be configured
   * in page frontmatter.
   */
  catalog?: boolean;

  /**
   * Post pagers config.
   *
   * The text to replace the default "Previous" and "Next"
   */
  postNext?: string;
  postPrev?: string;

  /**
   * Home page pagers config.
   *
   * The text to replace the default "Older Posts →" and "← Newer Posts"
   */
  homeNext?: string;
  homePrev?: string;

  /**
   * Maximum number of posts per page.
   *
   * Default: 10
   */
  postNumPerPage?: number;

  /**
   * Navbar config
   *
   * Set to `false` to disable navbar in current locale
   */
  navbar?: false | NavbarConfig;

  /**
   * Navbar dark mode button config
   *
   * Enable dark mode switching and display a button in navbar or not
   */
  darkMode?: boolean;

  /**
   * Navbar repository config
   *
   * Used for the repository link of navbar
   */
  repo?: null | string;

  /**
   * Navbar repository config
   *
   * Used for the repository text of navbar
   */
  repoLabel?: string;

  /**
   * Navbar language selection config
   *
   * Text of the language selection dropdown
   */
  selectLanguageText?: string;

  /**
   * Navbar language selection config
   *
   * Aria label of of the language selection dropdown
   */
  selectLanguageAriaLabel?: string;

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string;

  /**
   * Sidebar config
   *
   * Set to `false` to disable sidebar in current locale
   */
  sidebar?: "auto" | false | SidebarConfig;

  /**
   * Sidebar depth
   *
   * - Set to `0` to disable all levels
   * - Set to `1` to include `<h2>`
   * - Set to `2` to include `<h2>` and `<h3>`
   * - ...
   *
   * The max value depends on which headers you have extracted
   * via `markdown.extractHeaders.level`.
   *
   * The default value of `markdown.extractHeaders.level` is `[2, 3]`,
   * so the default max value of `sidebarDepth` is `2`
   */
  sidebarDepth?: number;

  /**
   * Page meta - edit link config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean;

  /**
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string;

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string;

  /**
   * Page meta - edit link config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string;

  /**
   * Page meta - edit link config
   *
   * Set this config if the branch of your docs is not 'main'
   */
  docsBranch?: string;

  /**
   * Page meta - edit link config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string;

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean;

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string;

  /**
   * Page meta - contributors config
   *
   * Whether to show "Contributors" or not
   */
  contributors?: boolean;

  /**
   * Page meta - contributors config
   *
   * The text to replace the default "Contributors"
   */
  contributorsText?: string;

  /**
   * Custom block config
   *
   * Default title of TIP custom block
   */
  tip?: string;

  /**
   * Custom block config
   *
   * Default title of WARNING custom block
   */
  warning?: string;

  /**
   * Custom block config
   *
   * Default title of DANGER custom block
   */
  danger?: string;

  /**
   * 404 page config
   *
   * Not Found messages for 404 page
   */
  notFound?: string[];

  /**
   * 404 page config
   *
   * Text of back-to-home link in 404 page
   */
  backToHome?: string;

  /**
   * A11y text for `<OutboundLink>`
   */
  openInNewWindow?: string;

  /**
   * A11y text for dark mode toggle button
   */
  toggleDarkMode?: string;

  /**
   * A11y text for sidebar toggle button
   */
  toggleSidebar?: string;

  /**
   * Footer, support HTML
   */
  footer?: string;
}
