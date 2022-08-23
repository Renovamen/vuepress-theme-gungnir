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
        <ToggleColorModeButton
          v-if="themeLocale.colorModeSwitch"
          class="menu-btn-child"
        />

        <div class="menu-btn-child" @click="scrollToBottom">
          <VIcon name="fa-chevron-down" />
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
import ToggleColorModeButton from "@theme/ToggleColorModeButton.vue";
import ToggleSidebarButton from "@theme/ToggleSidebarButton.vue";
import { useScroll, useWindowSize } from "@vueuse/core";
import { onMounted, reactive, watch } from "vue";
import { useCatalog, useThemeLocaleData } from "../composables";

defineEmits(["toggle-sidebar", "toggle-catalog"]);

const themeLocale = useThemeLocaleData();

const state = reactive({
  isMenuOpen: false,
  isTextVisible: false,
  isBtnIconVisible: true,
  menuText: "0",
  borderLen: "0% 314.15926%"
});

onMounted(() => {
  const { y } = useScroll(document);
  const windowH = useWindowSize().height;

  const handleScroll = () => {
    const siteH = getSiteHeight();

    let percent = (y.value / (siteH - windowH.value)) * 100;
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

  watch(y, handleScroll);
});

const toggleMenu = () => {
  state.isMenuOpen = !state.isMenuOpen;
};

const scrollToTop = () => {
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
  const site = document.querySelector<HTMLElement>(".theme-container");
  return site?.offsetHeight || 0;
};

const isShowTocButton = useCatalog();
</script>
