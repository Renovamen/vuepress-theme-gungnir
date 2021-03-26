<template>
  <div class="vuepress-markmap">
    <svg :id="id" ref="markmap"></svg>
  </div>
</template>

<script>
import { transform, getUsedAssets } from "markmap-lib/dist/transform";
import { Markmap, loadCSS, loadJS } from "markmap-lib/dist/view";
import * as markmap from "markmap-lib/dist/view";

export default {
  name: "Markmap",
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
  data() {
    return {
      mm: null
    };
  },
  mounted() {
    // transform markdown
    const { root, features } = transform(this.code);
    // get assets required by used features
    const { styles, scripts } = getUsedAssets(features);

    // load assets
    if (styles) loadCSS(styles);
    if (scripts) loadJS(scripts, { getMarkmap: () => markmap });

    // create markmap
    const svg = this.$refs.markmap;
    this.mm = Markmap.create(svg, null, root);
    this.rescale();

    // rescale graph when window size changes
    const that = this;
    window.onresize = () => {
      return (() => {
        that.rescale();
      })();
    };
  },
  methods: {
    rescale() {
      // resize svg and fit graph
      // https://github.com/gera2ld/markmap/issues/63
      const svg = this.$refs.markmap;
      const that = this;
      this.mm.rescale(1).then(function () {
        svg.style.height = svg.getBBox().height + 10 + "px";
        that.mm.fit();
      });
    }
  }
};
</script>

<style lang="stylus">
.vuepress-markmap
  margin 30px 0
  width 100%
  svg
    display block
    width 100%
</style>
