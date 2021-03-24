<template>
  <div class="search-page">
    <span class="search-close" @click="$emit('toggle-search')">
      <v-icon name="fa-chevron-down" scale="1.8" />
    </span>
    <div class="search-box">
      <input
        ref="input"
        aria-label="Search"
        :value="query"
        :class="{ focused: focused }"
        :placeholder="placeholder"
        autocomplete="off"
        spellcheck="false"
        @input="query = $event.target.value"
        @focus="focused = true"
        @blur="focused = false"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
      />
      <ul
        v-if="showSuggestions"
        class="suggestions"
        :class="{ 'align-right': alignRight }"
        @mouseleave="unfocus"
      >
        <li
          v-for="(s, i) in suggestions"
          :key="i"
          class="suggestion"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="page-title">
              {{ s.title || s.path }}
            </span>
            <span v-if="s.frontmatter.subtitle" class="header">
              {{ s.frontmatter.subtitle }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import matchQuery from "@vuepress/plugin-search/match-query";

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
export default {
  name: "SearchBox",

  data() {
    return {
      query: "",
      focused: false,
      focusIndex: 0,
      placeholder: undefined
    };
  },

  computed: {
    showSuggestions() {
      return this.suggestions && this.suggestions.length;
    },

    suggestions() {
      const query = this.query.trim().toLowerCase();
      if (!query) {
        return;
      }

      const { pages } = this.$site;
      const max =
        this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS;
      const localePath = this.$localePath;
      const res = [];
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break;
        const p = pages[i];

        // we only search posts
        if (p.id != "posts") {
          continue;
        }

        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue;
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue;
        }

        // title and tags
        if (matchQuery(query, p)) {
          res.push(p);
        }
        // subtitle
        else if (
          p.frontmatter.subtitle &&
          matchQuery(query, p, p.frontmatter.subtitle)
        ) {
          res.push(p);
        }
        // headers
        else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break;
            const h = p.headers[j];
            if (h.title && matchQuery(query, p, h.title)) {
              res.push(p);
              break;
            }
          }
        }
      }
      return res;
    },

    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length;
      const repo = this.$site.repo ? 1 : 0;
      return navCount + repo <= 2;
    }
  },

  mounted() {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || "";
    document.addEventListener("keydown", this.onHotkey);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onHotkey);
  },

  methods: {
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
          return localePath;
        }
      }
      return "/";
    },

    isSearchable(page) {
      let searchPaths = SEARCH_PATHS;

      // all paths searchables
      if (searchPaths === null) {
        return true;
      }

      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths);

      return (
        searchPaths.filter((path) => {
          return page.path.match(path);
        }).length > 0
      );
    },

    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },

    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },

    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },

    go(i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = "";
      this.focusIndex = 0;
    },

    focus(i) {
      this.focusIndex = i;
    },

    unfocus() {
      this.focusIndex = -1;
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mode.styl'
@require '../styles/mixins.styl'

.search-page
  background-color var(--bg-color)
  position fixed
  bottom 0
  left 0
  width 100%
  height 100%
  margin 0
  overflow hidden
  z-index 50
  transition(transform .25s)
  transform(translateY(100%))
  .search-close
    float right
    margin-right 25px
    margin-top 25px
    color #bdbbbb
    transition(.3s ease)
    &:hover
      color #696868
  .search-box
    margin 100px auto 0
    display block
    width 50%
    height 100%
    input
      gungnir-font()
      width 100%
      height auto
      font-size 28px
      font-weight bold
      padding 5px 0
      border none
      outline none
      background transparent
      color var(--text-color)
      &::-webkit-input-placeholder
        color var(--text-color-sub)
      &::-moz-placeholder
        color var(--text-color-sub)
      &:-moz-placeholder
        color var(--text-color-sub)
      &:-ms-input-placeholder
        color var(--text-color-sub)
    .suggestions
      gungnir-font()
      height 70%
      width 100%
      margin-top 30px
      overflow-y scroll
      padding 0
      .suggestion
        padding 0.6rem 0
        a
          white-space normal
          color var(--text-color)
          .page-title
            font-size 20px
            line-height 1.5
            font-weight 600
            display block
          .header
            font-size 16px
            line-height 1.5
            margin-top 5px
            display block
            margin-left 0
        &.focused
          background-color transparent
          a
            color var(--accent-color)

@media (max-width: $MQIpad)
  .search-page
    .search-box
        width 80%

@media (max-width: $MQMobileNarrow)
  .search-page
    .search-box
      input
        font-size 24px
      .suggestions
        margin-top 20px
        padding 0
        .suggestion
          padding 0.4rem 0
          a
            .page-title
              font-size 18px
              line-height 1.3
            .header
              font-size 14px
              line-height 1.3
</style>
