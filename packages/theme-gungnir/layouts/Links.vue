<template>
  <Common>
    <PageHeader :page-info="getPageInfo" />

    <div class="links-wrapper">
      <div
        v-for="(group, groupId) in $page.frontmatter.links"
        :key="`link-group-${groupId}`"
        class="section"
      >
        <h2>{{ group.title }}</h2>
        <div class="group">
          <div
            v-for="(item, itemId) in group.items"
            :key="`link-${itemId}`"
            class="item"
          >
            <div class="content">
              <a :href="item.url" target="_blank" rel="noopener noreferrer">
                <img
                  :src="
                    item.img
                      ? $withBase(item.img)
                      : require('@theme/assets/default-link-avatar.jpg')
                  "
                />
                <span class="sitename">
                  {{ item.sitename }}
                </span>
                <div class="desc">
                  {{ item.desc }}
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr style="visibility: hidden" />
      </div>
    </div>
  </Common>
</template>

<script>
import Common from "@theme/components/Common.vue";
import PageHeader from "@theme/components/PageHeader";

export default {
  components: {
    Common,
    PageHeader
  },
  computed: {
    getPageInfo() {
      let info =
        this.$themeConfig.pages && this.$themeConfig.pages.links
          ? this.$themeConfig.pages.links
          : {};
      info.title = this.$themeLocales.links;
      return info;
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.links-wrapper
  padding 10px 0 50px
  width 60%
  max-width 745px
  margin 0 auto
  h2, span, .desc
    gungnir-font()
  h2
    font-weight 400
    font-size 18px
    border-left 3px solid var(--accent-color)
    padding-left 10px
    margin-left 5px
    margin-top 50px
  .group
    width 100%
    list-style none
    margin-top 10px
    display grid
    grid-auto-flow row
    grid-template-columns repeat(3, 33.33%)
    .item
      margin 4px
      .content
        border 1px solid var(--border-color)
        border-radius 10px
        transition(all ease .3s)
        padding 13px 30px 13px 20px
        overflow hidden
        a
          text-decoration none
          img
            cursor auto
            padding 2px
            border-radius 100%
            max-width 100%
            float right
            box-shadow inset 0 0 10px var(--text-color)
            margin-top 5px
            margin-right -15px
            width 65px
            height 65px
            // transition(transform 1s)
          span.sitename
            color var(--accent-color)
            padding 5px 0 10px
            display block
            overflow hidden
            text-overflow ellipsis
            -o-text-overflow ellipsis
            white-space nowrap
            font-weight 600
          .desc
            color var(--text-color-sub)
            font-size 13px
            padding 10px 0
            border-top 1px dashed #ddd
            text-overflow ellipsis
            overflow hidden
            line-height 15px
        &:hover
          border 1px solid transparent
          // img
          //     transform(rotate(360deg))
          transform(translate(0px, -3px))
          box-shadow var(--box-shadow-hover)

@media (max-width $MQLarge)
  .links-wrapper
    width 75%

@media (max-width $MQIpad)
  .links-wrapper
    width 85%
    .group
      grid-template-columns repeat(2, 49.5%)

@media (max-width $MQMobileNarrow)
  .links-wrapper
    width 100%
    h2
      margin-left 17px
    .group
      grid-template-columns repeat(1, 100%)
      .item
        margin-left 15px
        margin-right 15px
</style>

<style src="@theme/styles/theme.styl" lang="stylus"></style>
