import { pageData } from "@vuepress/client";
import { computed } from "vue";
import { useThemeLocaleData } from ".";

export const useCatalog = () => {
  const themeLocale = useThemeLocaleData();

  return computed(
    () =>
      pageData.value.frontmatter.layout === "Post" &&
      pageData.value.frontmatter.catalog !== false &&
      (themeLocale.value.catalog || pageData.value.frontmatter.catalog) &&
      pageData.value.headers.length > 0
  );
};
