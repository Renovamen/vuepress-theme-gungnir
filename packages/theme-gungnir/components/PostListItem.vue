<template>
  <!--
    <PageInfo :pageInfo="item" :currentTag="currentTag" />
  -->

  <div class="post-item-img">
    <div class="post-item-img__img" @click="$router.push(item.path)">
      <img :src="$withBase(item.frontmatter.header_img)" class="cover" />
    </div>
    <div class="else">
      <p v-if="item.frontmatter.date" class="post-item-img__date">{{ item.frontmatter.date | formatDateValue }}</p>
      <router-link :to="item.path" class="post-item-img__title">
        <h2>{{ item.frontmatter.title }}</h2>
        <h3 v-if="item.frontmatter.subtitle">{{ item.frontmatter.subtitle }}</h3>
      </router-link>
      <div v-html="item.excerpt" class="post-item-img__content"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@theme/utils/time'

export default {
  props: [
    'item',
    'currentTag'
  ],

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
  }
}
</script>

<style lang="stylus" scoped>

@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left 0 !important
</style>