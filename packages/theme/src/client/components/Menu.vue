<template>
  <div class="menu-btn-container" :class="{ open: state.isMenuOpen }">
    <div class="menu-btn-wrapper">
      <div class="menu-btn" @click="toggleMenu">
        <div v-show="state.isBtnIconVisible" class="menu-btn-icon">
          <span />
          <span />
          <span />
        </div>

        <div v-show="state.isTextVisible" class="menu-text">
          {{ state.menuText }}
        </div>

        <svg class="menu-progress">
          <circle
            class="menu-border"
            cx="50%"
            cy="50%"
            r="48%"
            :style="{ 'stroke-dasharray': state.borderLen }"
          />
        </svg>
      </div>

      <div class="menu-btn-child-wrapper">
        <ToggleDarkModeButton class="menu-btn-child" />

        <div class="menu-btn-child" @click="scrollToBottom">
          <VIcon name="fa-chevron-down" scale="1.5" />
        </div>

        <div class="menu-btn-child" @click="scrollToTop">
          <VIcon name="fa-chevron-up" />
        </div>

        <div
          v-if="isShowTocButton"
          class="menu-btn-child menu-toc-btn"
          @click="$emit('toggle-catalog')"
        >
          <VIcon name="fa-list-ul" />
        </div>

        <ToggleSidebarButton
          class="menu-btn-child menu-btn-sidebar"
          @toggle="$emit('toggle-sidebar')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToggleDarkModeButton from "@theme/ToggleDarkModeButton.vue";
import ToggleSidebarButton from "@theme/ToggleSidebarButton.vue";
import { pageData } from "@vuepress/client";
import { computed, onBeforeUnmount, onMounted, reactive } from "vue";
import { useCatalog } from "../composables";

defineEmits(["toggle-sidebar", "toggle-catalog"]);

const state = reactive({
  isMenuOpen: false,
  isTextVisible: false,
  isBtnIconVisible: true,
  menuText: "0",
  borderLen: "0% 314.15926%"
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const currentTop = window.pageYOffset;
  const siteHeight = getSiteHeight();
  const windowHeight = document.documentElement.clientHeight;

  let percent = (currentTop / (siteHeight - windowHeight)) * 100;
  if (percent > 100) percent = 100;

  if (isNaN(percent) || Math.round(percent) <= 0) {
    percent = 0;
    state.isTextVisible = false;
    state.isBtnIconVisible = true;
  } else {
    state.isTextVisible = true;
    state.menuText = Math.round(percent) + "%";
    state.isBtnIconVisible = false;
  }

  state.borderLen = 3.1415926 * (percent || 0) + "% 314.15926%";
};

const toggleMenu = (): void => {
  state.isMenuOpen = !state.isMenuOpen;
};

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: getSiteHeight(),
    behavior: "smooth"
  });
};

const getSiteHeight = () => {
  const container = document.querySelector<HTMLElement>(".theme-container");
  return container ? container.offsetHeight : 0;
};

const isShowTocButton = useCatalog();
</script>
