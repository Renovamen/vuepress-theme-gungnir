<template>
  <main class="home-blog">
    <div class="hero" :style="{ 'background-image': bgImagePath }">
      <div
        v-if="bgImageMask"
        class="hero-mask"
        :style="{
          background: bgImageMask
        }"
      />

      <div class="hero-content" :style="{ opacity: headerOpacity }">
        <img
          class="hero-avatar hide-on-mobile"
          :src="withBase(personalInfo.avatar)"
          alt="hero"
          @mouseover="fetchHitokoto"
        />

        <div v-if="hitokotoAPI" class="hero-bubble">
          <div class="hero-bubble__body">
            <p>{{ hitokotoText }}</p>
          </div>
          <div class="hero-bubble__tile" />
        </div>

        <div class="hero-info">
          <h1>{{ personalInfo.name }}</h1>
          <p class="description">
            {{ personalInfo.description }}
          </p>
        </div>

        <SNS class="hide-on-mobile" large />

        <button class="hero-img-prev hide-on-mobile" @click="switchImage(-1)">
          <VIcon name="fa-chevron-left" />
        </button>
        <button class="hero-img-next hide-on-mobile" @click="switchImage(1)">
          <VIcon name="fa-chevron-right" />
        </button>

        <span class="hero-arrow-down hide-on-mobile" @click="scrollToPost()">
          <VIcon name="fa-chevron-down" animation="float" />
        </span>
      </div>
    </div>

    <PostList />
  </main>
</template>

<script setup lang="ts">
import PostList from "@theme/PostList.vue";
import SNS from "@theme/SNS.vue";
import { withBase } from "@vuepress/client";
import { computed, onMounted, ref } from "vue";
import type { PersonalConfig } from "../../shared";
import { useThemeLocaleData } from "../composables";

const themeLocale = useThemeLocaleData();
const bgImages = themeLocale.value.homeHeaderImages;

const bgImageID = ref(-1);
const headerOpacity = ref(1);

// -------- Scroll --------

const scrollToPost = () => {
  window.scrollTo({
    top: document.querySelector(".hero")?.clientHeight,
    behavior: "smooth"
  });
};

// -------- Hitokoto --------
const hitokotoAPI = themeLocale.value.hitokoto;
const hitokotoText = ref("正在加载一言...");
let hasFetchedHitokoto = false;

const fetchHitokoto = () => {
  if (!hitokotoAPI || hasFetchedHitokoto) return;

  hasFetchedHitokoto = true;

  let api = hitokotoAPI;
  api = typeof api === "string" ? api : "https://v1.hitokoto.cn";

  fetch(api)
    .then((response) => response.json())
    .then((data) => (hitokotoText.value = data.hitokoto))
    .catch((error) => {
      console.log(`Get ${api} error: `, error);
    });
};

onMounted(() => {
  if (bgImages && bgImages.length > 0)
    bgImageID.value = Math.floor(Math.random() * bgImages.length);
});

// -------- Header images --------

const switchImage = (n: number) => {
  if (!(bgImages && bgImages.length > 0)) return;
  const len = bgImages.length;
  bgImageID.value = (bgImageID.value + n + len) % len;
};

const bgImagePath = computed(() => {
  return bgImages && bgImages.length > 0 && bgImageID.value !== -1
    ? `url(${withBase(bgImages[bgImageID.value].path)})`
    : "none";
});

const bgImageMask = computed(() => {
  return bgImages && bgImages.length > 0 && bgImageID.value !== -1
    ? bgImages[bgImageID.value].mask
    : null;
});

// -------- Other configs --------

const personalInfo = themeLocale.value.personalInfo as PersonalConfig;
</script>
