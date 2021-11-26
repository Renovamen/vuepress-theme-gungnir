<template>
  <Common>
    <template #page>
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <div
          class="post-wrapper"
          :class="{ 'show-catalog': shoudleShowCatalog }"
        >
          <ArticleHeader v-show="page.title" class="post-header" />

          <Page :key="page.path" class="post-content">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>

          <Catalog
            v-if="shoudleShowCatalog"
            :headers="headers"
            :active-link="state.activeLink"
            :class="{ fixed: state.isFixed }"
            :style="{ top: `${state.catalogTop}px !important` }"
          />
        </div>
      </Transition>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { pageData, usePageData, usePageFrontmatter } from "@vuepress/client";
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import type { GungnirThemePostFrontmatter } from "../../shared";
import ArticleHeader from "../components/ArticleHeader.vue";
import { Catalog } from "../components/Catalog";
import Common from "../components/Common.vue";
import Page from "../components/Page.vue";
import { useScrollPromise, useThemeLocaleData } from "../composables";

const page = usePageData();
const frontmatter = usePageFrontmatter<GungnirThemePostFrontmatter>();
const themeLocaleData = useThemeLocaleData();

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

// catalog
const shoudleShowCatalog = computed(
  () =>
    (themeLocaleData.value.catalog || frontmatter.value.catalog) &&
    pageData.value.headers.length > 0
);

const pageHeaders = computed(() =>
  shoudleShowCatalog.value ? pageData.value.headers : []
);
const flattenHeaders = (item: any) => {
  return item.children.length > 0
    ? [item].concat(...item.children.map(flattenHeaders))
    : item;
};
const headers = computed(() =>
  [].concat(...pageHeaders.value.map(flattenHeaders))
);
const state = reactive({
  headerHeight: 0,
  screenWidth: 0,
  catalogTop: 0,
  activeLink: "",
  isFixed: false
});

const catalogTopAbsolute = 40;
const catalogTopFixed = 80;

const handleScroll = () => {
  // active link
  for (let i = headers.value.length - 1; i >= 0; i--) {
    const slug = (headers.value[i] as any).slug;
    const headerTop = (
      document.querySelector(`#${slug}`) as HTMLElement
    ).getBoundingClientRect().top;
    if (headerTop <= 100) {
      state.activeLink = slug;
      break;
    }
  }

  // catalog position
  const currentTop = window.pageYOffset;
  if (currentTop > state.headerHeight + catalogTopAbsolute - catalogTopFixed) {
    state.isFixed = true;
    state.catalogTop = catalogTopFixed;
  } else {
    state.isFixed = false;
    state.catalogTop = state.headerHeight + catalogTopAbsolute;
  }
  // $MQMobile
  if (state.screenWidth <= 719) state.catalogTop = -15;
};

const initCatalog = () => {
  state.headerHeight = (
    document.querySelector(".post-header") as HTMLElement
  ).offsetHeight;
  state.screenWidth = document.body.clientWidth;
  if (state.screenWidth <= 719) state.catalogTop = -15;
  // $MQMobile
  else state.catalogTop = state.headerHeight + catalogTopAbsolute;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  initCatalog();
  window.onresize = () => {
    return (() => {
      initCatalog();
      handleScroll();
    })();
  };
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
