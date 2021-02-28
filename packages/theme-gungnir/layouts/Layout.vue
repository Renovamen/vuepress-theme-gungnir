<template>
  <Common :sidebar-items="sidebarItems">
    <Page :sidebar-items="sidebarItems" />
  </Common>
</template>

<script>
import Page from "@theme/components/Page";
import Common from "@theme/components/Common";
import { resolveSidebarItems } from "@theme/utils/utils";

export default {
  components: {
    Page,
    Common
  },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    }
  }
};
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
