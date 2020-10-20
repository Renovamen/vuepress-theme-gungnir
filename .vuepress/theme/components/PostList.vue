<template>
  <div class="postlist-wrapper">
    <PostListItem v-for="(item) in data" :key="item.path"
                  :item="item" :currentTag="currentTag" />
    
    <ul class="pager">
      <li v-if="$pagination.hasPrev" class="previous">
        <router-link :to="$pagination.prevLink">&larr; Newer Posts</router-link>
      </li>
      <li v-if="$pagination.hasNext" class="next">
        <router-link :to="$pagination.nextLink">Older Posts &rarr;</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PostListItem from './PostListItem'

export default {
  components: {
    PostListItem
  },
  props: ['data', 'currentTag'],
}
</script>

<style lang="stylus">
// pager
.postlist-wrapper .pager {
  width: inherit;
  padding: 0px 40px;
}

@media (max-width: $MQMobile) {
  .postlist-wrapper .pager {
    padding: 0 !important;
  }
}
</style>