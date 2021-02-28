<template>
  <div class="footer-wrapper">
    <span v-html="$themeConfig.footer" />
  </div>
</template>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'

.footer-wrapper
  padding 1.5rem 2.5rem
  text-align center
  line-height 1.5rem
  font-size 14px
  sans-serif()
  color var(--text-color-sub)
  span
    & >>> a
      transition(color .2s ease)
      color var(--text-color-sub)
      &:hover
        color var(--accent-color)
</style>
