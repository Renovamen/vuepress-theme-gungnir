<template>
  <header
    class="navbar"
    ref="navbar"
    :class="{
      'is-fixed': (isFixed || isSidebar),
      'is-visible': (isVisible || isSidebar),
      'invert': isInvert
    }"
  >
    <router-link
      :to="$localePath"
      class="home-link"
    >
      <span
        ref="siteName"
        class="site-name"
      >
        $ cd /home/
      </span>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}">

      <!-- <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"/> -->
      <NavLinks
        class="can-hide"
        @toggle-search="$emit('toggle-search')"
      />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import NavLinks from '@theme/components/NavLinks'

export default {
  components: {
    NavLinks,
    AlgoliaSearchBox
  },
  props: ['isSidebar'],
  data () {
    return {
      linksWrapMaxWidth: null,
      // visible: false,
      previousTop: 0,
      navHeight: 0,
      isFixed: false,
      isVisible: false,
      isInvert: true
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING -
          (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    window.addEventListener('scroll', this.handleScroll)

    this.navHeight = this.$refs.navbar.offsetHeight
    this.handleInvert()
  },

  watch: {
    '$route' () {
      this.handleInvert()
    }
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods: {
    handleScroll () {
      var currentTop = window.pageYOffset
    
      if (currentTop < this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && this.isFixed) this.isVisible = true
        else {
          this.isVisible = false
          this.isFixed = false
        }
      }
      else {
        //if scrolling down...
        this.isVisible = false
        if (currentTop > this.navHeight && !this.isFixed) this.isFixed = true
      }
      this.previousTop = currentTop
    },
    handleInvert () {
      if(
        // home page
        this.$page.path == '/'
        // pagination on home page
        || this.$page.path.indexOf('/page/') != -1
        // posts with header image
        || (this.$page.id == 'posts' && this.$page.frontmatter.header_style == 'image')
        // tags page with header image
        || (['Tags', 'Tag'].indexOf(this.$page.frontmatter.layout) != -1
            && this.$themeConfig.pageConfig.tags
            && this.$themeConfig.pageConfig.tags.bgImage)
        // links page with header image
        || (this.$page.frontmatter.layout == 'Links'
            && this.$themeConfig.pageConfig.links
            && this.$themeConfig.pageConfig.links.bgImage)
      ) this.isInvert = false
      else this.isInvert = true
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
@require '../styles/mode.styl'
@require '../styles/mixins.styl'

$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  // box-shadow var(--box-shadow)
  // background transparent
  a, span, img
    display inline-block
  .site-name
    font-size 1.1rem
    font-weight 600
    // color var(--text-color)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.8rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    background-color transparent
    // text-transform: uppercase
    .search-box
      flex: 0 0 auto
      vertical-align top
      input
        width 12rem
        border-radius $borderRadius
        color var(--text-color)
        background-color transparent
        &:focus
          border 1px solid var(--accent-color)

@media (max-width: $MQMobile)
  .navbar
    .site-name
      margin-left: -0.5rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>
