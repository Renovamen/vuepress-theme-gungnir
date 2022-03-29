export interface MermaidOptions {
  /**
   * Custom fenced code block token.
   *
   * @default "mermaidjs"
   */
  token?: string;

  /**
   * Theme of Mermaid diagrams.
   *
   * @default "default"
   */
  theme?: string;

  /**
   * Theme of Mermaid diagrams when dark mode is enabled.
   * Only works when "darkSelector" and "darkClass" are set.
   *
   * @default "dark"
   */
  darkTheme?: string;

  /**
   * A CSS selector for the plugin to select an element and check
   * if the dark mode is enabled by darkClass.
   *
   * @default undefined
   */
  darkSelector?: string;

  /**
   * A class name for the plugin to check if the dark mode is enabled.
   *
   * @default undefined
   */
  darkClass?: string;
}
