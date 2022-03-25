<template>
  <div class="custom-container link">
    <AutoLink :item="linkItem"></AutoLink>
    <VIcon v-if="icon" :name="icon" class="custom-container-identifier" />
    <img
      v-else-if="image"
      alt="link-image"
      :src="image"
      class="custom-container-identifier"
    />
    <div class="custom-container-title">{{ title }}</div>
    <div class="custom-container-description">
      <p v-if="linkText" class="custom-container-link-text">
        <VIcon name="fa-chevron-right"></VIcon> {{ linkText }}
      </p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import AutoLink from "@theme/AutoLink.vue";
import { isLinkHttp } from "@vuepress/shared";
import { computed, toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ""
  },
  link: {
    type: String,
    required: false,
    default: "/"
  },
  icon: {
    type: String,
    required: false,
    default: ""
  },
  image: {
    type: String,
    required: false,
    default: ""
  },
  siteDomain: {
    type: String,
    required: false,
    default: "true",
    validator: function (value: string) {
      return value === "true" || value === "false";
    }
  }
});

const { link, siteDomain } = toRefs(props);

const linkItem = computed(() => ({
  link: link.value,
  icon: false
}));

const linkText = computed(() =>
  siteDomain.value === "true" && isLinkHttp(link.value)
    ? link.value.split("/")[2]
    : ""
);
</script>
