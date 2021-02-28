<template>
  <aside class="sidebar">
    <slot name="top" />

    <NavLinks @toggle-search="$emit('toggle-search')" />

    <SidebarLinks :depth="0" :items="items" />

    <slot name="bottom" />
  </aside>
</template>

<script>
import SidebarLinks from "@theme/components/SidebarLinks";
import NavLinks from "@theme/components/NavLinks";

export default {
  name: "Sidebar",

  components: {
    SidebarLinks,
    NavLinks
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.sidebar
  font-size 16px
  background-color var(--bg-color)
  width $sidebarWidth
  position fixed
  z-index 20
  margin 0
  top $navbarHeight
  left 0
  bottom 0
  box-sizing border-box
  border-right 1px solid var(--border-color)
  overflow-y auto
  .personal-info-wrapper
    display none
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid var(--border-color)
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
      &.router-link-active
        color var(--accent-color)
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1em
      padding 0.5rem 0 0.5rem 1.5rem
      button span
        font-size 1em
        color: var(--text-color)
  .nav-buttons
    display none
    padding 0.5rem 0 0.75rem 0
    margin-left 0.4rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem
  & > .sidebar-links
    li.sidebar-header > a.sidebar-link.active
      background-color var(--bg-color-secondary)

@media (max-width: $MQNarrow)
  .sidebar
    font-size 15px
    width $mobileSidebarWidth

@media (max-width: $MQMobile)
  .sidebar
    top 0
    padding-top $navbarHeight
    transform(translateX(-100%))
    transition(transform .2s ease)
    .personal-info-wrapper
      display block
      gungnir-font()
    .nav-links
      display block
      gungnir-font()
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    .nav-buttons
      display block
    & > .sidebar-links
      padding 1rem 0
</style>
