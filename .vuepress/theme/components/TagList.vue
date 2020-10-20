<template>
  <div class="tags">
    <span
      v-for="(item, index) in tags"
      :key="index"
      :class="{'active': item.name == currentTag, 'tag-all': item.path == '/tag/'}"
      :style="{ 'backgroundColor': item.tagColor }"
      @click="tagClick(item)">
      {{item.name}}
      <sup v-if="item.path == '/tag/'">{{ $getAllPosts.length }}</sup>
      <sup v-else>{{ item.pages.length }}</sup>
    </span>
  </div>
</template>

<script>
import { tagCloud } from '@theme/utils/tagCloud'

export default {
  props: {
    currentTag: {
      type: String,
      default: ''
    }
  },
  computed: {
    tags () {
      var tagList = tagCloud(this.$tags.list)
      return [{ name: this.$themeLocales.tag.all, path: '/tag/' }, ...tagList]
    }
  },
  methods: {
    tagClick (tag) {
      this.$emit('getCurrentTag', tag)
    },
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
@require '../styles/mixins.styl'

.tags
  margin 30px 0
  span
    vertical-align: middle;
    display: inline-block;
    margin: 0 4px 8px;
    padding: 0 10px 0 12px;
    border-radius: 999em;
    cursor: pointer;
    text-decoration: none;
    background: #fff;
    color: #fff;
    font-size: 14px;
    border: none;
    line-height: 28px;
    transition(all .5s ease);
    > sup
      margin-top: -5px;
      font-weight: 700;
      display: inline-block;
    &:hover:not(.tag-all),
    &.active:not(.tag-all),
    &.focus:not(.tag-all)
      background-color: var(--accent-color) !important;
    &.active, &.focus
      box-shadow: rgba(0,0,0,.117647) 0 1px 6px, rgba(0,0,0,.239216) 0 1px 4px;
  .tag-all
    font-weight: 700;
    color: var(--accent-color) !important;
    background-color: #f3f5f5 !important;
    &:hover, &:active, &.focus
      background-color: #e4e4e4 !important;
</style>