<template>
  <nav v-if="userLinks.length" class="nav-links">
    <!-- navbar link buttons -->
    <div v-for="item in userLinks" :key="item.link" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- search button -->
    <div
      v-if="$themeConfig.search && $frontmatter.search !== false"
      class="nav-item"
    >
      <a
        class="nav-link ov-parent ov-hover"
        style="cursor: pointer"
        @click="$emit('toggle-search')"
      >
        <v-icon
          v-if="$themeConfig.searchIcon"
          :name="$themeConfig.searchIcon"
          animation="wrench"
          hover
        />
        {{ $themeLocales.search }}
      </a>
    </div>
  </nav>
</template>

<script>
import DropdownLink from "@theme/components/DropdownLink";
import NavLink from "@theme/components/NavLink";
import { resolveNavLinkItem } from "@theme/utils/utils";

export default {
  components: {
    NavLink,
    DropdownLink
  },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$themeConfig.nav || [];
    },

    nav() {
      const {
        $site: { locales },
        userNav
      } = this;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;

        if (!this.isLanguageSwitcher) return userNav;

        const routes = this.$router.options.routes;
        const themeLocales = this.$themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          items: Object.keys(locales).map((path) => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some((route) => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          }),
          icon: this.$themeConfig.languageIcon
        };
        return [...userNav, languageDropdown];
      }

      return userNav;
    },

    userLinks() {
      return (this.nav || []).map((link) => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    },

    isLanguageSwitcher() {
      // show language switcher only on docs page
      return this.$page.frontmatter.layout === undefined;
    }
  }
};
</script>

<style lang="stylus">
.navbar
  &.invert, &.is-fixed
    .nav-links a.router-link-active
      color var(--accent-color)

.nav-links
  display inline-block
  a
    line-height 1.4rem
    color var(--text-color)
    &:hover //, &.router-link-active
      color var(--accent-color)
  .nav-item
    position relative
    display inline-block
    vertical-align middle
    margin-left 1.5rem
    line-height 2rem
    text-transform uppercase
    margin-left 25px
    .ov-icon
      width 17px
      margin-bottom -2px
      margin-right 1px
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
</style>
