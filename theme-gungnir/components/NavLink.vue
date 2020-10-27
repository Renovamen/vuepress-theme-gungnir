<template>
  <router-link class="nav-link faa-parent animated-hover" :to="link"
               v-if="!isExternal(link)" :exact="exact">
    <i v-if="item.icon" :class="item.icon" class="faa-wrench" style="font-size: 15px" />
    {{ item.text }}
  </router-link>
  <a v-else class="nav-link external" :href="link"
     :target="isMailto(link) || isTel(link) ? null : '_blank'"
     :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'">
    <i v-if="item.icon" :class="item.icon" class="faa-wrench" style="font-size: 15px" />
    {{ item.text }}
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '@theme/utils/utils'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
