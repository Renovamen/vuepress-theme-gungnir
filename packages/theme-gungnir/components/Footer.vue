<template>
  <div class="footer-wrapper">
    <span>
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2020
      <br>
      Powered by <a href="https://vuepress.vuejs.org/" target="_blank">VuePress</a> & <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    </span>
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
  a
    transition(color .2s ease)
    color var(--text-color-sub)
    &:hover
      color var(--accent-color)
</style>