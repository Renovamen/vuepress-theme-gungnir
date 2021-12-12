export interface GiscusOptions {
  /**
   * The name of repository to store discussions.
   */
  repo: string;

  /**
   * The ID of repository to store discussions.
   */
  repoId: string;

  /**
   * The name of the discussion category.
   */
  category: string;

  /**
   * The ID of the discussion category.
   */
  categoryId: string;

  /**
   * Page - discussion mapping.
   *
   * @default "title"
   */
  mapping?: string;

  /**
   * Enable reactions or not?
   *
   * @default true
   */
  reactionsEnabled?: boolean;

  /**
   * Theme of Giscus component.
   *
   * @default auto (github light / dark dimmed)
   */
  theme?: string;

  /**
   * Language of Giscus component.
   *
   * @default auto
   */
  lang?: string;

  /**
   * Crossorigin.
   *
   * @default "anonymous"
   */
  crossorigin?: string;
}
