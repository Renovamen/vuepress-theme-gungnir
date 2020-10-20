<template>
  <div>
    <i v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title"
       class="far fa-user">
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </i>

    <i v-if="pageInfo.frontmatter.date" class="fas fa-clock">
      <span>{{ pageInfo.frontmatter.date | formatDateValue }}</span>
    </i>

    <i v-if="pageInfo.frontmatter.tags" class="fas fa-tag tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click.stop="goTags(subItem)">{{subItem}}</span>
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
  color: var(--text-color-sub);
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
    font-size: 13px;
    font-weight: normal;
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color var(-accent-color)
    &:hover
      color var(-accent-color)
@media (max-width: $MQMobile)
  .tags
    display block
    margin-left 0 !important
</style>