<template>
  <header
    ref="navbar"
    class="navbar"
    :class="{
      'is-fixed': isFixed || isSidebar,
      'is-visible': isVisible || isSidebar,
      invert: isInvert
    }"
  >
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="siteBrand">
      <RouterLink :to="siteBrandLink">
        <span class="site-name can-hide">
          {{ siteBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-links-wrapper" :style="linksWrapperStyle">
      <slot name="before" />

      <NavbarLinks class="can-hide" />

      <slot name="after" />

      <ToggleDarkModeButton v-if="enableDarkMode" />

      <NavbarSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useRouteLocale,
  useSiteLocaleData
} from "@vuepress/client";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import type {
  GungnirThemeNormalPageFrontmatter,
  GungnirThemePostFrontmatter
} from "../../shared";
import { useDarkMode, useThemeLocaleData } from "../composables";
import NavbarLinks from "./NavbarLinks.vue";
import ToggleDarkModeButton from "./ToggleDarkModeButton.vue";
import ToggleSidebarButton from "./ToggleSidebarButton.vue";

defineProps({
  isSidebar: {
    type: Boolean,
    required: true
  }
});
defineEmits(["toggle-sidebar"]);

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const isDarkMode = useDarkMode();
const frontmatter =
  usePageFrontmatter<
    GungnirThemeNormalPageFrontmatter | GungnirThemePostFrontmatter
  >();

const navbar = ref<HTMLElement | null>(null);
const siteBrand = ref<HTMLElement | null>(null);
const siteBrandLink = computed(
  () => themeLocale.value.home || routeLocale.value
);
const siteBrandTitle = computed(() => {
  return siteLocale.value.title ? siteLocale.value.title : "$ cd /home/";
});
const linksWrapperMaxWidth = ref(0);
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {};
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + "px"
  };
});
const enableDarkMode = computed(() => themeLocale.value.darkMode);

const previousTop = ref(0);
const isFixed = ref(false);
const isVisible = ref(false);
const isInvert = ref(true);

const handleScroll = () => {
  const currentTop = window.pageYOffset;

  if (currentTop < previousTop.value) {
    // Scrolling up
    if (currentTop > 0 && isFixed.value) isVisible.value = true;
    else {
      isVisible.value = false;
      isFixed.value = false;
    }
  } else {
    // Scrolling down
    isVisible.value = false;
    if (navbar.value && currentTop > navbar.value!.offsetHeight)
      isFixed.value = true;
  }
  previousTop.value = currentTop;
};

const handleInvert = () => {
  let invert = false;

  // Home page
  if (frontmatter.value.layout === "HomePage") invert = true;
  // Post with header image
  if (
    frontmatter.value.layout === "Post" &&
    (frontmatter.value as GungnirThemePostFrontmatter).useHeaderImage
  )
    invert = true;

  // // tags page with header image
  // (frontmatter.value.layout && ["Tags", "Tag"].includes(frontmatter.value.layout) &&
  //   this.$themeConfig.pages.tags &&
  //   this.$themeConfig.pages.tags.bgImage) ||
  // // links page with header image
  // (frontmatter.value.layout == "Links" &&
  //   this.$themeConfig.pages.links &&
  //   this.$themeConfig.pages.links.bgImage)

  isInvert.value = invert;
};

const router = useRouter();

// handle navbar color invert after navigation
let unregisterInvertHook;

// avoid overlapping of long title and long navbar links
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 719;
  const navbarHorizontalPadding =
    getCssValue(navbar.value, "paddingLeft") +
    getCssValue(navbar.value, "paddingRight");
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT || !navbar.value) {
      linksWrapperMaxWidth.value = 0;
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (siteBrand.value?.offsetWidth || 0);
    }
  };
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);
  window.addEventListener("orientationchange", handleLinksWrapWidth, false);

  handleInvert();
  unregisterInvertHook = router.afterEach(() => {
    handleInvert();
  });

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  unregisterInvertHook();
});

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ];
  const num = Number.parseInt(val, 10);
  return Number.isNaN(num) ? 0 : num;
}
</script>
