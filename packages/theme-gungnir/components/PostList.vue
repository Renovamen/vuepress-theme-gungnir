<template>
  <div class="postlist-wrapper">
    <PostListItem v-for="item in data" :key="item.path" :item="item" />
    <Pager :data="getPagerData" />
  </div>
</template>

<script>
import PostListItem from "@theme/components/PostListItem";
import Pager from "@theme/components/Pager";

export default {
  components: {
    PostListItem,
    Pager
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    getPagerData() {
      var pagerData = {};
      if (this.$pagination.hasPrev) {
        pagerData.next = {};
        pagerData.next.text = this.$themeLocales.homePrev;
        pagerData.next.link = this.$pagination.prevLink;
      }
      if (this.$pagination.hasNext) {
        pagerData.prev = {};
        pagerData.prev.text = this.$themeLocales.homeNext;
        pagerData.prev.link = this.$pagination.nextLink;
      }
      return pagerData;
    }
  }
};
</script>

<style lang="stylus">
// pager
.postlist-wrapper .pager
  width inherit
  padding 0px 40px

@media (max-width: $MQMobile)
  .postlist-wrapper .pager
    padding 0 !important
</style>
