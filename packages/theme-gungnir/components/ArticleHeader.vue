<template>
  <div>
    <slot></slot>
    <div class="header-content">
      <div v-if="articleInfo.frontmatter.tags" class="tags">
        <span
          v-for="(subItem, subIndex) in articleInfo.frontmatter.tags"
          :key="subIndex"
          class="tag"
          :class="{ 'active': currentTag == subItem }"
          @click.stop="goTags(subItem)">{{subItem}}</span>
      </div>
      
      <h1 class="title">{{articleInfo.title}}</h1>
      <h3 v-if="articleInfo.frontmatter.subtitle" class="subtitle">{{$page.frontmatter.subtitle}}</h3>

      <div class="icons">

        <div class="icon" v-if="articleInfo.frontmatter.author || $themeConfig.author || $site.title">
          <v-icon name="fa/regular/user" scale="0.9" />
          <span>{{ articleInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
        </div>

        <div class="icon" v-if="articleInfo.frontmatter.date">
          <v-icon name="fa/regular/calendar" scale="0.9" />
          <span>{{ articleInfo.frontmatter.date | formatDateValue }}</span>
        </div>

        <div class="icon" v-if="articleInfo.readingTime">
          <v-icon name="fa/regular/clock" scale="0.9" />
          <span>{{ articleInfo.readingTime.minutes }} min</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@theme/utils/time'
// icons
import 'oh-vue-icons/icons/fa/regular/user'
import 'oh-vue-icons/icons/fa/regular/calendar'
import 'oh-vue-icons/icons/fa/regular/clock'

export default {
  props: {
    articleInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      numStyle: {
        fontSize: '.9rem',
        fontWeight: 'normal',
        color: '#999'
      }
    }
  },
  filters: {
    // format the original time value: 2019-09-20T18:22:30.000Z
    // to: 2019-09-20 18:22:30
    formatDateValue (value) {
      if (!value) return ''
    
      value = value.replace('T', ' ').slice(0, value.lastIndexOf('.'))
      const h = Number(value.substr(11, 2))  // hours
      const m = Number(value.substr(14, 2))  // minutes
      const s = Number(value.substr(17, 2))  // seconds

      if (h > 0 || m > 0 || s > 0) {
        // if user set hours, minutes or seconds manully
        return formatDate(value)
      }
      else {
        return formatDate(value, 'yyyy-MM-dd')
      }
    }
  },
  methods: {
    goTags (tag) {
      if (this.$route.path !== `/tags/${tag}/`) {
        this.$router.push({ path: `/tags/${tag}/` })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.header-content
  @extend $wrapper
  padding-top 0
  padding-bottom 0
  .icons
    .icon
      display inline-block
      line-height 1.5rem
      color var(--text-color-sub)
      &:not(:last-child)
        margin-right 1rem
      span
        margin-left 0.3rem
        font-size 13px
        font-weight normal
  .tags
    margin-bottom -20px
    .tag
      border 1px solid var(--text-color)
      color var(--text-color)
      background-color transparent
      font-size 12px
      line-height 24px
      padding 0 10px
      &.active, &:hover
        background-color rgba(0, 0, 0, 0.05) !important

  @media (max-width: $MQMobile)
    .tags
      margin-left 0 !important
      margin-bottom 0
</style>