<template>
  <div>
    <slot />

    <div class="header-content">
      <div v-if="articleInfo.frontmatter.tags" class="tags">
        <span
          v-for="(subItem, subIndex) in articleInfo.frontmatter.tags"
          :key="subIndex"
          class="tag"
          :class="{ active: currentTag == subItem }"
          @click.stop="goTags(subItem)"
        >
          {{ subItem }}
        </span>
      </div>

      <h1 class="title">
        {{ articleInfo.title }}
      </h1>
      <h3 v-if="articleInfo.frontmatter.subtitle" class="subtitle">
        {{ $page.frontmatter.subtitle }}
      </h3>

      <div class="icons">
        <div
          v-if="
            articleInfo.frontmatter.author ||
            $themeConfig.personalInfo.name ||
            $site.title
          "
          class="icon"
        >
          <v-icon name="fa-regular-user" />
          <span>{{
            articleInfo.frontmatter.author ||
            $themeConfig.personalInfo.name ||
            $site.title
          }}</span>
        </div>

        <div v-if="articleInfo.frontmatter.date" class="icon">
          <v-icon name="fa-regular-calendar" />
          <span>{{ articleInfo.frontmatter.date | formatDateValue }}</span>
        </div>

        <div v-if="articleInfo.readingTime" class="icon">
          <v-icon name="ri-timer-line" />
          <span>{{ articleInfo.readingTime.minutes }} min</span>
        </div>
      </div>
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
    articleInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    currentTag: {
      type: String,
      default: ""
    }
  },
  methods: {
    goTags(tag) {
      if (this.$route.path !== `/tags/${tag}/`) {
        this.$router.push({ path: `/tags/${tag}/` });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.header-content
  @extend $wrapper
  padding-top 0
  padding-bottom 0
  .icons
    .icon
      display inline-block
      line-height 1.5rem
      color var(--text-color-sub)
      &:not(:last-child)
        margin-right 1rem
      .ov-icon
        width 17px
        height auto
        margin-right -3px
      span
        margin-left 0.3rem
        font-size 13px
        font-weight normal
  .tags
    margin-bottom -20px
    .tag
      border 1px solid var(--text-color)
      color var(--text-color)
      background-color transparent
      font-size 12px
      line-height 24px
      padding 0 10px
      &.active, &:hover
        background-color rgba(0, 0, 0, 0.05) !important

@media (max-width: $MQMobile)
  .header-content
    .tags
      margin-left 0 !important
      margin-bottom 0
</style>
