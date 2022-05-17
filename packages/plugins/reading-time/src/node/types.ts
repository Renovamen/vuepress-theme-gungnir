export interface ReadingTimeOptions {
  /**
   * Number of Chinese words per minute a user can read
   *
   * @default 300
   */
  wordsPerMinuteCN?: number;

  /**
   * Number of English words per minute a user can read
   *
   * @default 160
   */
  wordsPerMinuteEN?: number;

  /**
   * Excludes all content inside code blocks or not
   *
   * @default false
   */
  excludeCodeBlock?: boolean;

  /**
   * Excludes all content inside tex blocks or not
   *
   * @default false
   */
  excludeTexBlock?: boolean;

  /**
   * Includes pages by their path via a regular expression.
   * If specified, `excludes` will be ignored.
   *
   * @default []
   */
  includes?: string[];

  /**
   * Excludes pages by their path via a regular expression.
   * Will be ignored if `includes` is specified.
   *
   * @default []
   */
  excludes?: string[];
}

export interface ReadingTime {
  /**
   * Expect reading time (number of minutes)
   */
  minutes: number;
  /**
   * Number of words of the page
   */
  words: number;
}
