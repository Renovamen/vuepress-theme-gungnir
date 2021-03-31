<template>
  <router-link
    v-if="!isExternal(link)"
    class="nav-link ov-parent ov-hover"
    :to="link"
    :exact="exact"
  >
    <v-icon v-if="item.icon" :name="item.icon" animation="wrench" hover />
    {{ item.text }}
  </router-link>
  <a
    v-else
    class="nav-link external ov-parent ov-hover"
    :href="link"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <v-icon v-if="item.icon" :name="item.icon" animation="wrench" hover />
    {{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "@theme/utils/utils";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );
      }
      return this.link === "/";
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
};
</script>
