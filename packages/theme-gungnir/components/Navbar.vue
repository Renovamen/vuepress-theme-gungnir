<template>
  <header
    ref="navbar"
    class="navbar"
    :class="{
      'is-fixed': isFixed || isSidebar,
      'is-visible': isVisible || isSidebar,
      invert: isInvert
    }"
  >
    <router-link to="/" class="home-link">
      <span ref="siteName" class="site-name"> $ cd /home/ </span>
    </router-link>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px'
            }
          : {}
      "
    >
      <NavLinks class="can-hide" @toggle-search="$emit('toggle-search')" />
    </div>
  </header>
</template>

<script>
import NavLinks from "@theme/components/NavLinks";

export default {
  components: {
    NavLinks
  },

  props: {
    isSidebar: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      linksWrapMaxWidth: null,
      // visible: false,
      previousTop: 0,
      navHeight: 0,
      isFixed: false,
      isVisible: false,
      isInvert: true
    };
  },

  watch: {
    $route() {
      this.handleInvert();
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
    window.addEventListener("scroll", this.handleScroll);

    this.navHeight = this.$refs.navbar.offsetHeight;
    this.handleInvert();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const currentTop = window.pageYOffset;

      if (currentTop < this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && this.isFixed) this.isVisible = true;
        else {
          this.isVisible = false;
          this.isFixed = false;
        }
      } else {
        //if scrolling down...
        this.isVisible = false;
        if (currentTop > this.navHeight && !this.isFixed) this.isFixed = true;
      }
      this.previousTop = currentTop;
    },
    handleInvert() {
      if (
        // home page
        this.$page.frontmatter.layout === "HomePage" ||
        // posts with header image
        (this.$page.id == "posts" &&
          this.$page.frontmatter.header_style == "image") ||
        // tags page with header image
        (["Tags", "Tag"].includes(this.$page.frontmatter.layout) &&
          this.$themeConfig.pages.tags &&
          this.$themeConfig.pages.tags.bgImage) ||
        // links page with header image
        (this.$page.frontmatter.layout == "Links" &&
          this.$themeConfig.pages.links &&
          this.$themeConfig.pages.links.bgImage)
      )
        this.isInvert = false;
      else this.isInvert = true;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
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
  z-index 10
  top 0
  left 0
  right 0
  height $navbarHeight
  box-sizing border-box
  background-color transparent
  position absolute
  transition(background-color 0.3s)
  transform(translate3d(0, 0, 0))
  a, span, img
    display inline-block
  a
    color #fff
    gungnir-font()
    font-weight bold
    &:hover,
    &:focus
      color rgba(#fff, .8)
  .site-name
    font-size 1.1rem
    font-weight 600
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
  &.invert
    a
      color var(--text-color)
      &:hover, &:focus
        color var(--accent-color)

@media (min-width: $MQMobile)
  .navbar
    &.is-fixed
      /* when the user scrolls down, we hide the header right above the viewport */
      position fixed
      top (- $navbarHeight)
      background-color var(--bg-color-transparent)
      border-bottom 1px solid var(--border-color)
      box-shadow var(--box-shadow)
      transition(transform .3s)
      a
        color var(--text-color)
        &:hover, &:focus
          color var(--accent-color)
    &.is-visible
      transform(translateY(100%))

@media (max-width: $MQMobile)
  .navbar
    .site-name
      margin-left: -0.5rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>
