<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      :isSidebar="shouldShowSidebar"
      @toggle-search="toggleSearch(true)"
    />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar :items="sidebarItems" @toggle-search="toggleSearch(true)">
      <template slot="top">
        <div class="personal-info-wrapper">
          <div class="mobile-hero-avatar">
            <img
              :src="$withBase($themeConfig.authorAvatar)" 
              alt="hero" />
          </div>
          <p class="mobile-heading">{{ $themeConfig.author }}</p>
          <SNS />
          <hr>
        </div>
      </template>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>

    <slot></slot>

    <SearchPage
      v-if="$themeConfig.search !== false && $frontmatter.search !== false"
      @toggle-search="toggleSearch(false)" />
    <Menu @toggle-sidebar="toggleSidebar" @toggle-catalog="toggleCatalog" />
    <Footer v-if="!shouldShowSidebar" class="footer" />
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar'
import Sidebar from '@theme/components/Sidebar'
import SearchPage from '@theme/components/SearchPage'
import Menu from '@theme/components/Menu'
import Footer from '@theme/components/Footer'
import SNS from '@theme/components/SNS'

export default {
  components: {
    Sidebar,
    Navbar,
    SearchPage,
    Menu,
    Footer,
    SNS
  },

  props: {
    sidebarItems: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      isSidebarOpen: false,
      isCatalogOpen: false,
      isSearchOpen: false,
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page

      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false
      ) return false

      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      return this.sidebarItems.length > 0
    },

    pageClasses () {
      const userPageClass = this.$frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
          'catalog-open': this.isCatalogOpen,
          'search-open': this.isSearchOpen
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
      this.isSearchOpen = false
      // this.isCatalogOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    toggleCatalog (to) {
      this.isCatalogOpen = typeof to === 'boolean' ? to : !this.isCatalogOpen
      this.$emit('toggle-catalog', this.isCatalogOpen)
    },

    toggleSearch (to) {
      this.isSearchOpen = typeof to === 'boolean' ? to : !this.isSearchOpen
      this.$emit('toggle-search', this.isSearchOpen)
      // auto focus
      if (this.isSearchOpen) {
        setTimeout(function () {
          document.querySelector('.search-page input').focus();
        }, 400);
      }
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        }
        else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.theme-container
  .hide
    height 100vh
    overflow hidden
  .sidebar
    gungnir-font()
    .mobile-hero-avatar
      margin 0 auto
      width 90px
      height 90px
      border-radius 100%
      padding 2px
      box-shadow 0px 10px 25px 0px rgba(lighten($accentColor, 40%), 0.27)
      img
        border-radius 100%
        max-width 100%
    .mobile-heading
      text-align center
      font-size 17px
      line-height 1
      font-weight bold
      // margin-top -5px
    & >>> .sns-wrapper
      margin -10px auto 0
      text-align center
      font-size 11px
      position relative
      a
        font-size 13px
        .fa-stack
          width 25px
          .fa-circle
            display none
          .icon-sns
            color var(--text-color)
</style>