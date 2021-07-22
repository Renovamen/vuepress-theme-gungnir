<template>
  <div
    id="theme-container"
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      :is-sidebar="shouldShowSidebar"
      @toggle-search="toggleSearch(true)"
    />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar :items="sidebarItems" @toggle-search="toggleSearch(true)">
      <template slot="top">
        <div class="personal-info-wrapper">
          <div class="mobile-hero-avatar">
            <img
              :src="$withBase($themeConfig.personalInfo.avatar)"
              alt="hero"
            />
          </div>
          <p class="mobile-heading">
            {{ $themeConfig.personalInfo.name }}
          </p>
          <SNS />
          <hr />
        </div>
      </template>
      <slot slot="bottom" name="sidebar-bottom" />
    </Sidebar>

    <div class="content">
      <slot />
    </div>

    <SearchPage
      v-if="$themeConfig.search && $frontmatter.search !== false"
      @toggle-search="toggleSearch(false)"
    />
    <Menu @toggle-sidebar="toggleSidebar" @toggle-catalog="toggleCatalog" />
    <Footer v-if="!shouldShowSidebar" class="footer" />
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar";
import Sidebar from "@theme/components/Sidebar";
import SearchPage from "@theme/components/SearchPage";
import Menu from "@theme/components/Menu";
import Footer from "@theme/components/Footer";
import SNS from "@theme/components/SNS";

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

  data() {
    return {
      isSidebarOpen: false,
      isCatalogOpen: false,
      isSearchOpen: false
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;

      if (frontmatter.navbar === false || themeConfig.navbar === false)
        return false;

      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      return this.sidebarItems.length > 0;
    },

    pageClasses() {
      const userPageClass = this.$frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
          "catalog-open": this.isCatalogOpen,
          "search-open": this.isSearchOpen
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
      this.isSearchOpen = false;
      // this.isCatalogOpen = false
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    toggleCatalog(to) {
      this.isCatalogOpen = typeof to === "boolean" ? to : !this.isCatalogOpen;
      this.$emit("toggle-catalog", this.isCatalogOpen);
    },

    toggleSearch(to) {
      this.isSearchOpen = typeof to === "boolean" ? to : !this.isSearchOpen;
      this.$emit("toggle-search", this.isSearchOpen);
      // auto focus
      if (this.isSearchOpen) {
        setTimeout(function () {
          document.querySelector(".search-page input").focus();
        }, 400);
      }
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.theme-container
  display flex
  flex-direction column
  min-height 100%
  .content
    flex 1
  .sidebar-mask
    position fixed
    z-index 9
    top 0
    left 0
    width 100vw
    height 100vh
    display none
    background-color rgba(0, 0, 0, .55)
  .sidebar
    .mobile-hero-avatar
      margin 0 auto
      width 90px
      height 90px
      border-radius 100%
      padding 2px
      box-shadow var(--box-shadow-hover)
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
      margin 0 auto
      padding 0 5px
      text-align center
      position relative
      .icon-stack
        min-width 25px
        .icon-sns
          color var(--text-color)
  &.sidebar-open
    .sidebar-mask
      display block
  &.search-open
    .search-page
      transform(translateY(0))
  &.no-navbar
    .sidebar
      top 0

@media (min-width: ($MQMobile + 1px))
  .theme-container.no-sidebar
    .sidebar
      display none

@media (max-width: $MQMobile)
  .theme-container
    &.sidebar-open .sidebar
      transform(translateX(0))
    &.no-navbar .sidebar
      padding-top 0
    &.catalog-open .catalog
      transform(translateX(0))
      box-shadow var(--box-shadow)
</style>
