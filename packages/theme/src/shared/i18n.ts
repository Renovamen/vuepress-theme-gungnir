export interface GungnirThemeI18n {
  /**
   * Navbar brand title
   *
   * The text to replace the default "$ cd /home/"
   */
  navbarTitle?: string;

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string;

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
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string;

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string;

  /**
   * Page meta - contributors config
   *
   * The text to replace the default "Contributors"
   */
  contributorsText?: string;

  /**
   * Search config
   *
   * The text to replace the default "Search"
   */
  searchText?: string;

  /**
   * Custom block config
   *
   * Title of INFO custom block
   */
  info?: string;

  /**
   * Custom block config
   *
   * Title of TIP custom block
   */
  tip?: string;

  /**
   * Custom block config
   *
   * Title of WARNING custom block
   */
  warning?: string;

  /**
   * Custom block config
   *
   * Title of DANGER custom block
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
   * A11y text for external link icon
   */
  openInNewWindow?: string;

  /**
   * A11y text for color mode toggle button
   */
  toggleColorMode?: string;

  /**
   * A11y text for sidebar toggle button
   */
  toggleSidebar?: string;

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
   * Title of other pages like tags page and links page.
   */
  pageText?: {
    tags: string;
    links: string;
  };

  /**
   * Text of "show all tags" button.
   */
  showAllTagsText?: string;

  /**
   * plugin-pwa-popup box message.
   */
  pwaPopupMessage?: string;

  /**
   * plugin-pwa-popup button text.
   */
  pwaPopupButtonText?: string;

  /**
   * Blog header image credit.
   *
   * The text to replace the default "Image by".
   */
  headerImageCredit?: string;
}
