import { defineClientAppSetup } from "@vuepress/client";
import { provide } from "vue";
import {
  pagesSymbol,
  resolvePages,
  setupDarkMode,
  setupSidebarItems
} from "./composables";

export default defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();

  // make posts global computed
  const pages = resolvePages();
  provide(pagesSymbol, pages);
});
