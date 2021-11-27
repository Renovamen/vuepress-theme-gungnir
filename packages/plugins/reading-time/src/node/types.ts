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
   * Exclude all content inside code blocks or not
   *
   * @default false
   */
  excludeCodeBlock?: boolean;

  /**
   * Exclude all content inside tex blocks or not
   *
   * @default false
   */
  excludeTexBlock?: boolean;

  /**
   * Exclude pages by their path via a regular expression.
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
