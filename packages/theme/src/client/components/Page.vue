<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-gungnir-content">
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import PageMeta from "./PageMeta.vue";
import PageNav from "./PageNav.vue";

let unregisterRouterHook;

onMounted(() => {
  initCodeButtons();

  const router = useRouter();
  unregisterRouterHook = router.afterEach(() => {
    initCodeButtons();
  });
});

onUnmounted(() => {
  unregisterRouterHook();
});

const initCodeButtons = () => {
  // full screen the code blocks
  const codeBlocks = Array.from(
    document.querySelectorAll("div[class*='language-']")
  ) as HTMLElement[];
  const htmlDom = document.querySelector("html") as HTMLElement;

  for (const block of codeBlocks) {
    if (checkButton(block)) continue;

    const btn = document.createElement("div");
    btn.classList.add("code-button");

    // click to full screen the code block
    btn.onclick = function () {
      if (block.classList.contains("code-block-fullscreen")) {
        block.classList.remove("code-block-fullscreen");
        htmlDom.classList.remove("screen-fixed");
      } else {
        block.classList.add("code-block-fullscreen");
        htmlDom.classList.add("screen-fixed");
      }
    };

    block.appendChild(btn);
  }
};

const checkButton = (block: HTMLElement) => {
  return Object.values(block.children).find((value: any) => {
    if (value.classList.contains("code-button")) return true;
    return false;
  });
};
</script>
