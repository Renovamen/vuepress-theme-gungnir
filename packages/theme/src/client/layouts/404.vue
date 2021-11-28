<template>
  <Common>
    <template #page>
      <main class="not-found-wrapper">
        <p class="emoji">{{ getEmoji() }}</p>
        <h1>404 - {{ getMsg() }}</h1>
        <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
      </main>
    </template>
  </Common>
</template>

<script setup lang="ts">
import { useRouteLocale } from "@vuepress/client";
import Common from "../components/Common.vue";
import { useThemeLocaleData } from "../composables";

const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();

const messages = themeLocale.value.notFound ?? ["Not Found"];
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)];
const homeLink = themeLocale.value.home ?? routeLocale.value;
const homeText = themeLocale.value.backToHome ?? "$ cd /home/";

const emojiArray = [
  "\\(o_o)/",
  "(o^^)o",
  "(˚Δ˚)b",
  "(^-^*)",
  "(^_^)b",
  "(╯‵□′)╯",
  "(='X'=)",
  "(>_<)",
  "\\(°ˊДˋ°)/",
  "ㄟ(▔▽▔)ㄏ"
];

const getEmoji = (): string =>
  emojiArray[Math.floor(Math.random() * emojiArray.length)];
</script>
