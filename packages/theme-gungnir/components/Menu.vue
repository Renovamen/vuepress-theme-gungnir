<template>
  <div class="menu-btn-container" :class="{ open: isMenuOpen }">
    <div class="menu-btn-wrapper">
      <div class="menu-btn" @click="toggleMenu">
        <div v-show="isBtnIconVisible" class="menu-btn-icon">
          <span />
          <span />
          <span />
        </div>
        <div v-show="isTextVisible" class="menu-text">
          {{ menuText }}
        </div>
        <svg class="menu-svg">
          <circle
            ref="menu_border"
            class="menu-border"
            cx="50%"
            cy="50%"
            r="48%"
            :style="{ 'stroke-dasharray': borderLen }"
          />
        </svg>
      </div>
      <div class="menu-btn-child-wrapper">
        <ToggleMode class="menu-btn-child" />
        <div class="menu-btn-child" @click="goToBottom">
          <v-icon name="fa-chevron-down" />
        </div>
        <div class="menu-btn-child" @click="goToTop">
          <v-icon name="fa-chevron-up" />
        </div>
        <div
          v-if="$page.frontmatter.catalog && $page.headers"
          class="menu-btn-child menu-toc-btn"
          @click="$emit('toggle-catalog')"
        >
          <v-icon name="fa-list-ul" />
        </div>
        <div
          class="menu-btn-child menu-btn-sidebar"
          @click="$emit('toggle-sidebar')"
        >
          <v-icon name="bi-layout-sidebar-inset" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleMode from "@theme/components/ToggleMode";

export default {
  components: {
    ToggleMode
  },

  data() {
    return {
      isMenuOpen: false,
      isTextVisible: false,
      isBtnIconVisible: true,
      menuText: 0,
      borderLen: "0% 314.15926%"
    };
  },

  computed: {},

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const currentTop = window.pageYOffset;
      const docuHeight =
        document.getElementById("theme-container").offsetHeight;
      const windowHeight = document.documentElement.clientHeight;

      let percent = (currentTop / (docuHeight - windowHeight)) * 100;
      if (percent > 100) percent = 100;

      if (isNaN(percent) || Math.round(percent) <= 0) {
        percent = 0;
        this.isTextVisible = false;
        this.isBtnIconVisible = true;
      } else {
        this.isTextVisible = true;
        this.menuText = Math.round(percent) + "%";
        this.isBtnIconVisible = false;
      }

      this.borderLen = 3.1415926 * (percent || 0) + "% 314.15926%";
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    goToBottom() {
      var docuHeight = document.getElementById("theme-container").offsetHeight;
      window.scrollTo({
        top: docuHeight,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'

// Variables
$menu-btn-size = 50px
$menu-btn-radius = 70px
$menu-btn-transform-origin = $menu-btn-radius + (0.8 * $menu-btn-size / 2)

// Colors
$menu-btn-primary-color = $accentColor
$menu-btn-gray = lighten(black, 35%)

// Easings
$bounce = cubic-bezier(0.5, -0.5, 0.5, 1.5)
$bezier = cubic-bezier(0.64, 0.04, 0.35, 1)

// Timings
$delay = 400ms
$time = 250ms
$longer-time = ($time*2)

.menu-btn-container
  position fixed
  bottom 20px
  right 20px
  width $menu-btn-size
  height $menu-btn-size
  z-index 40

  .menu-btn-wrapper
    position relative
    width 100%
    height 100%

  .menu-text
    gungnir-font()
    color white
    font-weight 400
    text-align center
    line-height $menu-btn-size
    font-size 15px

  .menu-svg
    $wider = 6px
    position absolute
    // bottom $wider
    bottom (- $wider / 2)
    right (- $wider / 2)
    width $menu-btn-size + $wider
    height $menu-btn-size + $wider
    .menu-border
      stroke $menu-btn-primary-color
      opacity .9
      stroke-width 1px
      fill none
      transform(rotate(-90deg))
      transform-origin 50% 50%
      stroke-dasharray 0% 314.15926%

  &.open
    .menu-btn
      span
        width 3px
        $menu-btn-open-transition = margin $time, transform $time, border-radius $time, height $time $longer-time
        transition($menu-btn-open-transition)
        &:first-child,
        &:last-child
          margin 0
          height 20px
          border-radius 5px
        &:first-child
          transform(translate(-50%, -50%) rotate(45deg))
        &:nth-of-type(2)
          opacity 0
        &:last-child
          transform(translate(-50%, -50%) rotate(-45deg))

    .menu-btn-child-wrapper
      transform(translateX((- $menu-btn-radius)))
      transition-delay 0s

    .menu-btn-child
      transition-delay $delay
      & >>> .ov-icon
        opacity 1
        color #fff
        visibility visible
        transition-delay $delay
        width 18px
        height auto
      &:nth-child(2)
        transform(rotate(45deg))
      &:nth-child(3)
        transform(rotate(90deg))
      &:nth-child(4)
        transform(translateY(- ($menu-btn-radius - 0.3 * $menu-btn-size)) rotate(90deg))
      &:nth-child(5)
        transform(translateY(- ($menu-btn-radius - 0.3 * $menu-btn-size)) rotate(45deg))
    .menu-btn-sidebar, .menu-toc-btn
      display none
      @media (max-width: $MQMobile)
        display flex

.menu-btn,
.menu-btn-child-wrapper
  position absolute
  width 100%
  height 100%
  top 0
  right 0
  bottom 0
  left 0
  margin auto

.menu-btn
  border-radius 50%
  background-color $menu-btn-primary-color
  z-index 5
  box-shadow 0px 0px 5px 1px rgba(0, 0, 0, 0.2)
  transition(all $time ease-in-out $delay)

  span
    position absolute
    top 50%
    left 50%
    width 5px
    height 5px
    background-color #fff
    border-radius 50%
    $menu-btn-transition = height $time, transform $time $longer-time, margin $time $longer-time,
                          background-color $longer-time, border-radius $longer-time
    transition($menu-btn-transition)
    transform(translate(-50%, -50%))
    &:first-child
      margin-left -10px
    &:last-child
      margin-left 10px

.menu-btn-child-wrapper
  transition(transform 0.3s $bounce $delay)
  z-index 4
  width 80%
  height 80%

.menu-btn-child
  position absolute
  display flex
  align-items center
  justify-content center
  width 100%
  height 100%
  top 0
  right 0
  bottom 0
  left 0
  border-radius 50%
  // border 3px solid $menu-btn-gray
  background-color $menu-btn-gray
  transform-origin $menu-btn-transform-origin
  transition(all $time $bezier)

  &:nth-child(2), &:nth-child(5)
    .ov-icon
      transform(rotate(-45deg))

  &:nth-child(3), &:nth-child(4)
    .ov-icon
      transform(rotate(-90deg))

  & >>> .ov-icon
    opacity 0
    visibility hidden
</style>
