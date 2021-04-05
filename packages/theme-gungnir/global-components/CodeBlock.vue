<template>
  <div class="theme-code-block" :class="{ 'theme-code-block__active': active }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CodeBlock",
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.$parent && this.$parent.loadTabs) {
      this.$parent.loadTabs();
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-code-block
  display none
  & > pre
    background-color orange
  & >>> div[class*="language-"]
    box-shadow none
    pre, pre[class*="language-"]
      padding-top 1em
    .highlight-lines
      padding-top 1.1rem
    .code-button
      display none
    &::before
      top -2.6em
.theme-code-block__active
  display block
</style>
