<script>
export default {
  data() {
    return {
      activeLink: ""
    };
  },
  computed: {
    headers() {
      return this.$showCatalog ? this.$page.headers : [];
    },
    widthStyle() {
      return this.headers.length > 0 ? {} : { width: "0" };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      for (let i = this.headers.length - 1; i >= 0; i--) {
        const headerTop = document
          .querySelector(`#${this.headers[i].slug}`)
          .getBoundingClientRect().top;
        if (headerTop <= 100) {
          this.activeLink = this.headers[i].slug;
          break;
        }
      }
    }
  },
  render(h) {
    return h(
      "ul",
      {
        class: { catalog: true },
        style: this.headers.length > 0 ? {} : { width: "0" }
      },
      this.headers.map((header) => {
        return h(
          "li",
          {
            class: {
              active: this.activeLink == header.slug,
              [`level-${header.level}`]: true,
              [`toc-link-${header.slug}`]: true
            },
            attr: { key: header.title },
            on: {
              click: () => {
                if (this.$route.hash !== `#${header.slug}`) {
                  this.$router.push(`#${header.slug}`);
                }
              }
            }
          },
          header.title
        );
      })
    );
  }
};
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'

.catalog
  width ($catalogWidth - 1rem)
  padding-left 0
  list-style none
  font-size 14px
  bottom 40px !important
  top 120px !important
  overflow-x hidden
  li
    cursor pointer
    border-left 2px solid var(--border-color)
    padding-right 1rem
    vertical-align middle
    overflow-x hidden
    white-space nowrap
    text-overflow ellipsis
    color var(--text-color-sub)
    &:hover
      color var(--accent-color)
    &.active
      border-left 2px solid var(--accent-color)
      color var(--accent-color)
      font-weight bold
    &.level-2
      padding-left .6rem
    &.level-3
      padding-left 1.4rem
    &.level-4
      padding-left 2.2rem
    &.level-5
      padding-left 3rem

@media (max-width: $MQMobile)
  .catalog
    transition(transform .5s)
    transform(translateX(calc(100% + 2rem)))
    position fixed
    top -15px !important
    right -2px
    padding-top 2rem
    width $catalogWidth !important
    height 100%
    background-color var(--bg-color)
    z-index 5
    li
      border-left none
      color var(--text-color)
      &.active
        border-left 2px solid var(--accent-color)
</style>
