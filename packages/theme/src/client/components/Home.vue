<template>
  <main class="home-blog">
    <div class="hero" :style="{ 'background-image': `url(${bgImagePath})` }">
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
          :src="$withBase(personalInfo.avatar)"
          alt="hero"
        />

        <div v-if="hitokotoAPI" class="hero-bubble">
          <div class="hero-bubble__body">
            <p id="hitokoto">正在加载一言...</p>
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
          <VIcon name="chevron-left" />
        </button>
        <button class="hero-img-next hide-on-mobile" @click="switchImage(1)">
          <VIcon name="chevron-right" />
        </button>

        <span class="hero-arrow-down hide-on-mobile" @click="scrollToPost()">
          <VIcon name="chevron-down" animation="float" />
        </span>
      </div>
    </div>

    <PostList />
  </main>
</template>

<script lang="ts">
import { withBase } from "@vuepress/client";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useThemeLocaleData } from "../composables";
import PostList from "./PostList.vue";
import SNS from "./SNS.vue";

export default defineComponent({
  name: "Home",

  components: {
    PostList,
    SNS
  },

  setup() {
    const themeLocaleDataRef = useThemeLocaleData();
    const bgImages = themeLocaleDataRef.value.homeHeaderImages;

    const bgImageID = ref(
      bgImages && bgImages.length > 0
        ? Math.floor(Math.random() * bgImages.length)
        : 0
    );
    const headerOpacity = ref(1);

    // -------- Scroll --------

    const scrollToPost = () => {
      window.scrollTo({
        top: (document.querySelector(".hero") as HTMLElement).clientHeight,
        behavior: "smooth"
      });
    };

    // -------- Hitokoto --------

    const hitokotoAPI = themeLocaleDataRef.value.hitokoto;

    const fetchHitokoto = () => {
      let api = hitokotoAPI;
      api = typeof api === "string" ? api : "https://v1.hitokoto.cn";

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          const hitokoto = document.querySelector("#hitokoto") as HTMLElement;
          hitokoto.innerHTML = data.hitokoto;
        })
        .catch((error) => {
          console.log(`Get ${api} error: `, error);
        });
    };

    onMounted(() => {
      if (hitokotoAPI) fetchHitokoto();
    });

    // -------- Header images --------

    const switchImage = (n: number) => {
      if (!(bgImages && bgImages.length > 0)) return;
      const len = bgImages.length;
      bgImageID.value = (bgImageID.value + n + len) % len;
    };

    const bgImagePath = computed(() => {
      return bgImages && bgImages.length > 0
        ? withBase(bgImages[bgImageID.value].path)
        : null;
    });

    const bgImageMask = computed(() => {
      return bgImages && bgImages.length > 0
        ? bgImages[bgImageID.value].mask
        : null;
    });

    // -------- Other configs --------

    const personalInfo = themeLocaleDataRef.value.personalInfo;

    return {
      switchImage,
      bgImagePath,
      bgImageMask,
      headerOpacity,
      personalInfo,
      hitokotoAPI,
      scrollToPost
    };
  }
});
</script>
