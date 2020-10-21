<template>
  <div>
    <div v-if="pageInfo.frontmatter.tags" class="tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="page-tag"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)">{{subItem}}</span>
    </div>
    
    <h1 class="title">{{pageInfo.title}}</h1>
    <h3 v-if="pageInfo.frontmatter.subtitle" class="subtitle">{{$page.frontmatter.subtitle}}</h3>

    <i v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title"
       class="far fa-user">
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </i>

    <i v-if="pageInfo.frontmatter.date" class="fas fa-clock">
      <span>{{ pageInfo.frontmatter.date | formatDateValue }}</span>
    </i>
  </div>
</template>

<script>
import { formatDate } from '@theme/utils/time'

export default {
  props: {
    pageInfo: {
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
      if (this.$route.path !== `/tag/${tag}/`) {
        this.$router.push({ path: `/tag/${tag}/` })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
i
  display inline-block
  line-height 1.5rem
  color var(--text-color-sub)
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
    font-size 13px
    font-weight normal
.tags
  margin-bottom -20px
  .page-tag
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