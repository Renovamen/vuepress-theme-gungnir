<template>
  <nav v-if="navbarLinks.length" class="navbar-items">
    <div v-for="item in navbarLinks" :key="item.text" class="navbar-item">
      <NavbarDropdown v-if="item.children" :item="item" />
      <AutoLink v-else :item="item" />
    </div>

    <!-- search button -->
    <div v-if="shouldShowSearchPage" class="navbar-item">
      <a style="cursor: pointer" @click="$emit('toggle-search')">
        <span v-if="themeLocale.searchIcon" class="nav-icon">
          <VIcon :name="themeLocale.searchIcon" />
        </span>
        <span>{{ themeLocale.searchText }}</span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AutoLink from "@theme/AutoLink.vue";
import NavbarDropdown from "@theme/NavbarDropdown.vue";
import {
  pageData,
  usePageFrontmatter,
  useRouteLocale,
  useSiteLocaleData
} from "@vuepress/client";
import { isString } from "@vuepress/shared";
import { computed } from "vue";
import type { ComputedRef } from "vue";
import { useRouter } from "vue-router";
import type {
  GungnirThemePageFrontmatter,
  NavbarGroup,
  NavbarItem,
  ResolvedNavbarItem
} from "../../shared";
import { useNavLink, useThemeLocaleData } from "../composables";

defineEmits(["toggle-search"]);

/**
 * Get navbar config of select language dropdown
 */
const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem[]> => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();

  return computed<ResolvedNavbarItem[]>(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    // do not display language selection dropdown if there is only one language
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = router.currentRoute.value.path;
    const currentFullPath = router.currentRoute.value.fullPath;
    const currentHash = router.currentRoute.value.hash;

    const languageDropdown: ResolvedNavbarItem = {
      text: themeLocale.value.selectLanguageText ?? "unknown language",
      ariaLabel:
        themeLocale.value.selectLanguageAriaLabel ??
        themeLocale.value.selectLanguageText ??
        "unknown language",
      icon: themeLocale.value.langIcon,
      children: localePaths.map((targetLocalePath) => {
        // target locale config of this language link
        const targetSiteLocale =
          siteLocale.value.locales?.[targetLocalePath] ?? {};
        const targetThemeLocale =
          themeLocale.value.locales?.[targetLocalePath] ?? {};
        const targetLang = `${targetSiteLocale.lang}`;

        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        let link;

        if (targetLang === siteLocale.value.lang) {
          // if the target language is current language
          // stay at current link
          link = currentFullPath;
        } else {
          // if the target language is not current language
          // try to link to the corresponding page of current page
          // or fallback to homepage
          const targetLocalePage = currentPath.replace(
            routeLocale.value,
            targetLocalePath
          );
          if (
            router.getRoutes().some((item) => item.path === targetLocalePage)
          ) {
            // try to keep current hash across languages
            link = `${targetLocalePage}${currentHash}`;
          } else {
            link = targetThemeLocale.home ?? targetLocalePath;
          }
        }

        return {
          text,
          link
        };
      })
    };

    return [languageDropdown];
  });
};

const resolveNavbarItem = (
  item: NavbarItem | NavbarGroup | string
): ResolvedNavbarItem => {
  if (isString(item)) {
    return useNavLink(item);
  }
  if ((item as NavbarGroup).children) {
    return {
      ...item,
      children: (item as NavbarGroup).children.map(resolveNavbarItem)
    };
  }
  return item as ResolvedNavbarItem;
};

const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData();
  return computed(() =>
    (themeLocale.value.navbar || []).map(resolveNavbarItem)
  );
};

const navbarConfig = useNavbarConfig();
const navbarSelectLanguage = useNavbarSelectLanguage();
const navbarLinks = computed(() => [
  ...navbarConfig.value,
  ...(isDocPage.value ? navbarSelectLanguage.value : [])
]);

const frontmatter = usePageFrontmatter<GungnirThemePageFrontmatter>();

const isDocPage = computed(() => {
  // Show language switcher only on docs page
  const router = useRouter();
  const path = router.currentRoute.value.path;
  return (
    frontmatter.value.layout === undefined &&
    path.indexOf("/page/") === -1 &&
    pageData.value.path !== ""
  );
});

// search button
const themeLocale = useThemeLocaleData();

const shouldShowSearchPage = computed(
  () => themeLocale.value.search && frontmatter.value.search !== false
);
</script>
