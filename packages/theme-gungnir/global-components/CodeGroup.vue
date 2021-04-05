<template>
  <ClientOnly>
    <div class="theme-code-group">
      <div class="theme-code-group__nav">
        <ul class="theme-code-group__ul">
          <li
            v-for="(tab, i) in codeTabs"
            :key="tab.title"
            class="theme-code-group__li"
          >
            <button
              class="theme-code-group__nav-tab"
              :class="{
                'theme-code-group__nav-tab-active': i === activeCodeTabIndex
              }"
              @click="changeCodeTab(i)"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
      <slot />
      <pre v-if="codeTabs.length < 1" class="pre-blank">
// Make sure to add code blocks to your code group</pre
      >
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: "CodeGroup",
  data() {
    return {
      codeTabs: [],
      activeCodeTabIndex: -1
    };
  },
  watch: {
    activeCodeTabIndex(index) {
      this.activateCodeTab(index);
    }
  },
  mounted() {
    this.loadTabs();
  },
  methods: {
    changeCodeTab(index) {
      this.activeCodeTabIndex = index;
    },
    loadTabs() {
      this.codeTabs = (this.$slots.default || [])
        .filter((slot) => Boolean(slot.componentOptions))
        .map((slot, index) => {
          if (slot.componentOptions.propsData.active === "") {
            this.activeCodeTabIndex = index;
          }

          return {
            title: slot.componentOptions.propsData.title,
            elm: slot.elm
          };
        });

      if (this.activeCodeTabIndex === -1 && this.codeTabs.length > 0) {
        this.activeCodeTabIndex = 0;
      }

      this.activateCodeTab(0);
    },
    activateCodeTab(index) {
      this.codeTabs.forEach((tab) => {
        if (tab.elm) {
          tab.elm.classList.remove("theme-code-block__active");
        }
      });

      if (this.codeTabs[index].elm) {
        this.codeTabs[index].elm.classList.add("theme-code-block__active");
      }
    }
  }
};
</script>

<style lang="stylus">
h2, h3, h4, h5, h6
  & + .theme-code-group
    margin-top 12px
.custom-block.details
  .theme-code-group
    box-shadow none
    margin 0.85rem -1.6rem
    border-radius 0
    &__nav
      border-top-left-radius 0
      border-top-right-radius 0
    div[class*="language-"]
      margin 0.85rem 0
</style>

<style lang="stylus" scoped>
.theme-code-group
  box-shadow 0 4px 9px rgba(0, 0, 0, 45%)
  border-radius 6px
  &__nav
    margin-bottom -35px
    background-color $codeBgColor
    padding-bottom 22px
    border-top-left-radius 6px
    border-top-right-radius 6px
    padding-left 10px
    padding-top 10px
  &__ul
    margin auto 0
    padding-left 0
    display inline-flex
    list-style none
    margin-bottom 0 !important
    padding-left 0 !important
  &__nav-tab
    border 0
    padding 5px
    cursor pointer
    background-color transparent
    font-size 0.85em
    line-height 1.4
    color rgba(255, 255, 255, 0.9)
    font-weight 600
    outline none
  &__nav-tab-active
    border-bottom $accentColorDark 1px solid
  .pre-blank
    color $accentColorDark

@media (max-width: $MQMobileNarrow)
  .theme-code-group
    box-shadow none
    border-radius 4px
    &__nav
      border-top-left-radius 4px
      border-top-right-radius 4px
</style>
