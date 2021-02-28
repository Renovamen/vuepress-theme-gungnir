<template>
  <Common>
    <article class="error-content">
      <h2 class="error-emoji">
        {{ getEmoji() }}
      </h2>
      <h2>404 - {{ $themeLocales.notFound }}</h2>
      <router-link to="/">
        <h2>$ cd /home/</h2>
      </router-link>
    </article>
  </Common>
</template>

<script>
import Common from "@theme/components/Common.vue";

const emojiArray = [
  "\\(o_o)/",
  "(o^^)o",
  "(˚Δ˚)b",
  "(^-^*)",
  "(^_^)b",
  "(╯‵□′)╯",
  "(='X'=)",
  "(>_<)",
  "\\(°ˊДˋ°)/",
  "ㄟ(▔▽▔)ㄏ"
];

export default {
  components: {
    Common
  },

  methods: {
    getEmoji() {
      return emojiArray[Math.floor(Math.random() * emojiArray.length)];
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.error-content
  position absolute
  text-align center
  left 0
  right 0
  top 50%
  margin-top -140px
  h2
    font-size 30px
    font-weight bold
    margin-bottom -15px
    gungnir-font()
  .error-emoji
    font-size 50px
    margin-bottom 10px
  a
    color var(--text-color)
    :hover
      color var(--accent-color)

@media (max-width: $MQMobileNarrow)
  .error-content
    h2
      font-size 25px
    .error-emoji
      font-size 45px
</style>

<style src="../styles/theme.styl" lang="stylus"></style>
