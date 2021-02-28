<template>
  <div class="pager">
    <router-link v-if="data.next" class="next" :to="data.next.link">
      {{ data.next.text }}<br />
      <span v-if="data.next.subtext">
        {{ data.next.subtext }}
      </span>
    </router-link>
    <router-link v-if="data.prev" class="previous" :to="data.prev.link">
      {{ data.prev.text }}<br />
      <span v-if="data.prev.subtext">
        {{ data.prev.subtext }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mode.styl'
@require '../styles/mixins.styl'

.pager
  margin 20px auto 0
  padding 0px
  list-style none
  a
    border 1px solid var(--border-color-sub)
    border-radius 3px
    background-color transparent
    padding 15px 20px
    max-width 48%
    sans-serif()
    text-transform uppercase
    font-size 13px
    font-weight 800
    letter-spacing 1px
    color var(--text-color)
    &.next
      float left
    &.previous
      float right
    span
      font-weight normal
      color var(--text-color-sub)
    &:hover, &:focus
      color white
      background-color $accentColor
      border 1px solid $accentColor
      > span
        color white !important

@media (max-width: $MQMobile)
  .pager a
    padding 15px 25px

@media (max-width: $MQMobileNarrow)
  .pager a
    padding 12px 8px
</style>
