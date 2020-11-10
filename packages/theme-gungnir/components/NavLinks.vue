<template>
  <nav class="nav-links" v-if="userLinks.length">
    <!-- navbar link buttons -->
    <div class="nav-item" v-for="item in userLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item"/>
      <NavLink v-else :item="item"/>
    </div>
    <!-- search button -->
    <div
      v-if="$themeConfig.search !== false && $frontmatter.search !== false"
      class="nav-item">
      <a
        class="nav-link faa-parent animated-hover"
        @click="$emit('toggle-search')"
        style="cursor: pointer;"
      >
        <i class="fa fa-search faa-wrench" style="font-size: 15px" />
        Search
      </a>
    </div>
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink'
import NavLink from '@theme/components/NavLink'
import { resolveNavLinkItem } from '@theme/utils/utils'

export default {
  components: {
    NavLink,
    DropdownLink
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$themeConfig.nav || []
    },

    nav () {
      const { $site: { locales }, userNav } = this
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } 
            else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...userNav, languageDropdown]
      }

      return userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    }
  }
}
</script>

<style lang="stylus">
.navbar
  &.invert, &.is-fixed
    .nav-links a.router-link-active
      color var(--accent-color)

.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover //, &.router-link-active
      color var(--accent-color)
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    text-transform uppercase
    margin-left 25px
    i
      width 18px
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>
