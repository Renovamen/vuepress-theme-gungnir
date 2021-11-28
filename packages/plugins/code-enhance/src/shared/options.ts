export interface CodeEnhanceOptions {
  /**
   * Add full-screen button or not?
   *
   * @default true
   */
  fullScreen?: boolean;

  /**
   * Add copy button or not?
   *
   * @default true
   */
  copy?: boolean;

  /**
   * Code block selector
   *
   * @default "div[class*='language-']"
   */
  selector?: string;

  /**
   * The delay of registering buttons (minutes).
   *
   * @default 500
   */
  delay?: number;
}
