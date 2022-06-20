import { usePreferredDark, useStorage } from "@vueuse/core";
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watch
} from "vue";
import type { InjectionKey, Ref, WritableComputedRef } from "vue";
import { useThemeLocaleData } from ".";

export type CurrentModeRef = WritableComputedRef<string>;
export type IsDarkModeRef = Ref<boolean>;

export const darkModeSymbol: InjectionKey<{
  currentMode: CurrentModeRef;
  isDarkMode: IsDarkModeRef;
}> = Symbol(
  /* eslint-disable no-undef */
  __VUEPRESS_DEV__ ? "darkMode" : ""
);

/**
 * Inject dark mode global computed
 */
export const useDarkMode = (): {
  currentMode: CurrentModeRef;
  isDarkMode: IsDarkModeRef;
} => {
  const mode = inject(darkModeSymbol);
  if (!mode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return mode;
};

/**
 * Create dark mode ref and provide as global computed in setup
 */
export const setupDarkMode = (): void => {
  const themeLocale = useThemeLocaleData();
  const darkStorage = useStorage(
    "vuepress-color-scheme",
    themeLocale.value.colorMode
  );

  const currentMode = computed<"auto" | "dark" | "light">({
    get() {
      // disable color mode switching
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode || "auto";
      }
      // storage value
      return darkStorage.value || "auto";
    },
    set(val) {
      darkStorage.value = val;
    }
  });

  const isDarkMode = ref<boolean>(false);
  provide(darkModeSymbol, { currentMode, isDarkMode });

  updateHtmlDarkClass(currentMode, isDarkMode);
};

export const updateHtmlDarkClass = (
  currentMode: CurrentModeRef,
  isDarkMode: IsDarkModeRef
): void => {
  const isDarkPreferred = usePreferredDark();

  const update = (): void => {
    // auto detected from prefers-color-scheme
    isDarkMode.value =
      currentMode.value === "auto"
        ? isDarkPreferred.value
        : currentMode.value === "dark";

    // set `class="dark"` on `<html>` element
    const htmlEl = window?.document.querySelector("html");
    htmlEl?.classList.toggle("dark", isDarkMode.value);
  };

  onMounted(() => {
    watch([currentMode, isDarkPreferred], update, { immediate: true });
  });

  onUnmounted(() => update());
};
