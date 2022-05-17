import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import type { CodeEnhanceOptions } from "../../shared";

declare const __CODE_ENHANCE_OPTIONS__: CodeEnhanceOptions;
const options = __CODE_ENHANCE_OPTIONS__;

export const codeEnhance = (): void => {
  let unregisterRouterHook;

  /**
   * Make the code block full-screen.
   */

  const fullScreen = (block: HTMLElement): void => {
    const HTMLDom = document.querySelector<HTMLElement>("html");

    if (block.classList.contains("fullscreen-mode")) {
      block.classList.remove("fullscreen-mode");
      HTMLDom?.classList.remove("fixed");
    } else {
      block.classList.add("fullscreen-mode");
      HTMLDom?.classList.add("fixed");
    }
  };

  /**
   * Add buttons to full screen the code blocks.
   */
  const insertFullScreenButtons = (block: HTMLElement): void => {
    if (block.hasAttribute("fullscreen-code-inserted")) return;

    const btn = document.createElement("div");
    btn.classList.add("fullscreen-code-button");

    // Click to full screen the code block
    btn.addEventListener("click", () => fullScreen(block));

    block.appendChild(btn);
    block.setAttribute("fullscreen-code-inserted", "");
  };

  const insertButtons = (): void => {
    const selector = options.selector || "div[class*='language-']";

    setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(selector)
        .forEach((block: HTMLElement) => {
          if (options.fullScreen !== false) insertFullScreenButtons(block);
        });
    }, options.delay || 500);
  };

  onMounted(() => {
    insertButtons();

    const router = useRouter();
    unregisterRouterHook = router.afterEach(() => {
      insertButtons();
    });
  });

  onUnmounted(() => {
    unregisterRouterHook();
  });
};
