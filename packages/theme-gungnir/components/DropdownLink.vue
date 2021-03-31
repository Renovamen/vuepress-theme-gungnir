<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <a class="dropdown-title" @click="toggle">
      <span class="title ov-parent ov-hover">
        <v-icon v-if="item.icon" :name="item.icon" animation="wrench" hover />
        {{ item.text }}
      </span>
      <span class="arrow" :class="open ? 'down' : 'right'" />
    </a>

    <DropdownTransition>
      <ul v-show="open" class="nav-dropdown">
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
        >
          <h4 v-if="subItem.type === 'links'">
            {{ subItem.text }}
          </h4>

          <ul v-if="subItem.type === 'links'" class="dropdown-subitem-wrapper">
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
            >
              <NavLink :item="childSubItem" />
            </li>
          </ul>

          <NavLink v-else :item="subItem" />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink";
import DropdownTransition from "@theme/components/DropdownTransition";

export default {
  components: { NavLink, DropdownTransition },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      open: false
    };
  },

  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mode.styl'

.dropdown-wrapper
  cursor pointer
  .dropdown-title
    display block
    &:hover
      border-color transparent
    .arrow
      vertical-align middle
      margin-top -1px
      margin-left 0.4rem
  .nav-dropdown
    .dropdown-item
      line-height 1.9rem
      text-transform none
      h4
        margin 0.45rem 0 0
        border-top 1px solid var(--border-color)
        padding 1rem 1.5rem 0.45rem 1.25rem
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        color var(--text-color)
        display block
        line-height 1.9rem
        position relative
        border-bottom none
        margin-bottom 0
        padding 0 1.5rem 0 1.25rem
        font-weight 500
        &:hover
          color var(--accent-color)
        &.router-link-active
          color var(--accent-color)
          &::after
            content ""
            width 0
            height 0
            border-left 5px solid var(--accent-color)
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 9px
      &:first-child h4
        margin-top 0
        padding-top 0
        border-top 0

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .nav-dropdown
      transition height .1s ease-out
      overflow hidden
      .dropdown-item
        h4
          border-top 0
          margin-top 0
          padding-top 0
        h4, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width: $MQMobile)
  .dropdown-wrapper
    // height 1.8rem
    &:hover .nav-dropdown
      // override the inline style.
      display block !important
    .dropdown-title .arrow
      // make the arrow always down at desktop
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid var(--text-color-sub)
      border-bottom 0
    .nav-dropdown
      display none
      // Avoid height shaked by clicking
      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      right 0
      background-color var(--bg-color)
      padding 0.6rem 0
      box-shadow: var(--box-shadow);
      text-align left
      border-radius $borderRadius
      white-space nowrap
      margin 0
      .dropdown-item
        &:hover
          background-color var(--bg-color-secondary)
</style>
