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
    <span ref="navbarBrand">
      <RouterLink :to="navbarBrandLink">
        <span class="site-name">
          {{ navbarBrandTitle }}
        </span>
      </RouterLink>
    </span>

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <NavbarItems class="can-hide" @toggle-search="$emit('toggle-search')" />
      <slot name="after" />
      <NavbarSearch />
    </div>
  </header>
</template>

<script setup lang="ts">
import NavbarItems from "@theme/NavbarItems.vue";
import { usePageFrontmatter } from "@vuepress/client";
import { useScroll } from "@vueuse/core";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import type {
  GungnirThemeNormalPageFrontmatter,
  GungnirThemePostFrontmatter
} from "../../shared";
import { useThemeLocaleData } from "../composables";

defineProps({
  isSidebar: {
    type: Boolean,
    required: true
  }
});

defineEmits(["toggle-search"]);

const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<
  GungnirThemeNormalPageFrontmatter | GungnirThemePostFrontmatter
>();
const router = useRouter();

const navbar = ref<HTMLElement | null>(null);
const navbarBrand = ref<HTMLElement | null>(null);
const navbarBrandLink = computed(() => themeLocale.value.home || "/");
const navbarBrandTitle = computed(() => themeLocale.value.navbarTitle);
const linksWrapperMaxWidth = ref(0);
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {};
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + "px"
  };
});

const isFixed = ref(false);
const isVisible = ref(false);
const isInvert = ref(true);

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

  // Tags page with header image
  if (
    frontmatter.value.layout === "Tags" &&
    themeLocale.value.pages &&
    themeLocale.value.pages.tags &&
    themeLocale.value.pages.tags.bgImage
  )
    invert = true;

  // Links page with header image
  if (
    frontmatter.value.layout === "Links" &&
    themeLocale.value.pages &&
    themeLocale.value.pages.links &&
    themeLocale.value.pages.links.bgImage
  )
    invert = true;

  isInvert.value = invert;
};

// handle navbar color invert after navigation
let unregisterRouterHook;

onMounted(() => {
  // avoid overlapping of long title and long navbar links
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
        (navbarBrand.value?.offsetWidth || 0);
    }
  };
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);
  window.addEventListener("orientationchange", handleLinksWrapWidth, false);

  // handle navbar styles while scrolling
  const { y, directions } = useScroll(document);

  const handleScroll = () => {
    if (directions.top) {
      // scrolling up
      if (y.value > 0 && isFixed.value) isVisible.value = true;
      else {
        isVisible.value = false;
        isFixed.value = false;
      }
    } else if (directions.bottom) {
      // scrolling down
      isVisible.value = false;
      if (navbar.value && y.value > navbar.value!.offsetHeight)
        isFixed.value = true;
    }
  };

  watch(y, handleScroll);

  handleInvert();
  unregisterRouterHook = router.afterEach(handleInvert);
});

onBeforeUnmount(() => {
  unregisterRouterHook();
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
