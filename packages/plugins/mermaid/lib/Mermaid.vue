<template>
  <div :id="id" class="vuepress-mermaid">
    {{ code }}
  </div>
</template>

<script>
export default {
  name: "Mermaid",
  props: {
    id: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  mounted() {
    import("mermaid/dist/mermaid.min").then((mermaid) => {
      mermaid.initialize({
        startOnLoad: true
      });
      mermaid.init(undefined, "#" + this.id);
    });
  }
};
</script>

<style lang="stylus">
.vuepress-mermaid
  margin 30px 0
  overflow scroll
  text-align center
  display flex
  justify-content center
  align-items center
  @media (max-width: 419px)
    margin 0
</style>
