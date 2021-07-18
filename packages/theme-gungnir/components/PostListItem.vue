<template>
  <div class="post-item-img">
    <div class="post-item-img__img" @click="$router.push(item.path)">
      <img :src="$withBase(item.frontmatter.header_img)" />
    </div>
    <div class="else">
      <p v-if="item.frontmatter.date" class="post-item-img__date">
        {{ item.frontmatter.date | formatDateValue }}
      </p>
      <router-link :to="item.path" class="post-item-img__title">
        <h2>
          {{ item.frontmatter.title }}
        </h2>
        <h3 v-if="item.frontmatter.subtitle">
          {{ item.frontmatter.subtitle }}
        </h3>
      </router-link>
      <div class="post-item-img__content" v-html="item.excerpt" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "@theme/utils/time";

export default {
  filters: {
    // format the original time value: 2019-09-20T18:22:30.000Z
    // to: 2019-09-20 18:22:30
    formatDateValue(value) {
      if (!value) return "";
      value = value.replace("T", " ").slice(0, value.lastIndexOf("."));

      const h = Number(value.substr(11, 2)); // hours
      const m = Number(value.substr(14, 2)); // minutes
      const s = Number(value.substr(17, 2)); // seconds

      if (h > 0 || m > 0 || s > 0) {
        // if user set hours, minutes or seconds manully
        return formatDate(value);
      } else {
        return formatDate(value, "yyyy-MM-dd");
      }
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'

.post-item-img
  margin 80px auto 100px
  position relative
  padding 0 40px
  display block
  &__img
    display inline-block
    width 600px
    height 340px
    overflow hidden
    position relative
    z-index 1
    border-radius 5px
    img
      display block
      width 100%
      height 100%
      object-fit cover
      transition(all .6s)
    &::after
      content ""
      width 100%
      height 100%
      top 0
      left 0
      position absolute
      background var(--image-mask-color)
    &:hover
      img
        transform(scale(1.1))
  &:nth-child(odd)
    text-align left
    .else
      left 620px
  &:nth-child(even)
    text-align right
    .else
      right 620px
  .else
    position absolute
    text-align left
    top 20px
    height 360px
    width 490px
    border 1px solid var(--border-color)
    border-radius 5px
    overflow-y hidden
  &__date
    color var(--text-color-sub)
    font-size 12px
    margin 80px 0 0 80px
  &__title
    color var(--text-color)
    &:hover, &:focus
      text-decoration none
      color var(--accent-color)
    h2
      font-size 30px
      font-weight normal
      line-height 1.1
      margin 10px 100px 0 80px
    h3
      font-size 16px
      font-weight normal
      margin 10px 100px 0 80px
      line-height 1.8
  &__content >>> p
    line-height 1.8
    font-size 14px
    margin 10px 100px 0 80px

@media (max-width: $MQLarge)
  .post-item-img
    &__img
      width 480px
      height 280px
    &:nth-child(odd) .else
      left 500px
    &:nth-child(even) .else
      right 500px
    .else
      top 10px
      width 420px
      height 290px
    &__date
      font-size 12px
      margin 50px 0 0 60px
    &__title
      h2
        font-size 24px
        margin 10px 60px 0 60px
      h3
        margin 10px 60px 0 60px
    &__content >>> p
      margin 10px 60px 0 60px

@media (max-width: $MQIpad)
  .post-item-img
    padding 0
    margin-top 80px
    background var(--bg-color)
    padding-bottom 30px
    border-bottom 1px solid var(--border-color)
    &__img
      display block
      margin 0 auto
      margin-top -30px
      width 570px
      height 320px
      border-radius 10px
    .else
      height auto
      position static
      width 100%
      margin 0 auto
      background transparent
      border none
    &__date
      margin 30px 0 0 20px
    &__title h2
      font-size 24px
      margin 10px 20px 0 20px
    &__title h3,
    &__content >>> p
      margin 10px 20px 0 20px

@media (max-width: $MQMobile)
  .post-item-img
    margin-top 100px
    border-bottom none
    max-width 400px
    &__img
      width 100%
      height 210px
      margin-top -60px
    &__date,
    &__title h2,
    &__title h3,
    &__content >>> p
      margin-left 5px
</style>
