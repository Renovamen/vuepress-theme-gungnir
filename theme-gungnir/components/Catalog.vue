<script>
import { isActive } from '@theme/utils/utils'

export default {
  computed: {
    headers () {
      return this.$showCatalog ? this.$page.headers : []
    },
    widthStyle () {
      return this.headers.length > 0 ? {} : { width: '0' }
    }
  },
  methods: {
    isLinkActive (header) {
      const active = isActive(this.$route, this.$page.path + '#' + header.slug)
      if (active) {
        setTimeout(() => {
          document.querySelector(`.toc-link-${header.slug}`).scrollIntoView()
        }, 300)
      }
      return active
    }
  },
  render (h) {
    return h('ul', {
      class: { 'catalog-wrapper': true },
      style: this.headers.length > 0 ? {} : { width: '0' }
    }, [
      ...this.headers.map(header => {
        return h('li', {
          class: {
            active: this.isLinkActive(header),
            [`level-${header.level}`]: true
          },
          attr: { key: header.title }
        }, [
          h('router-link', {
            class: { 'sidebar-link': true, [`toc-link-${header.slug}`]: true },
            props: { to: `${this.$page.path}#${header.slug}` }
          }, header.title)
        ])
      })
    ])
  }
}

</script>

<style lang="stylus" scoped>
.catalog-wrapper
  width ($catalogWidth - 2rem)
  padding-left 0
  list-style none
  font-size 14px
  bottom 40px !important
  top 120px !important
  overflow-x hidden
  li
    cursor pointer
    border-left 2px solid var(--border-color)
    a
      padding-left 0
      padding-right 1rem
      line-height 1
      vertical-align middle
      overflow-x hidden
      white-space nowrap
      text-overflow ellipsis
      color var(--text-color)
      &:hover
        color var(--accent-color)
    &.active
      border-left 2px solid var(--accent-color)
      a
        color var(--accent-color)
        font-weight bold
    &.level-2
      padding-left .4rem
    &.level-3
      padding-left 1.2rem
    &.level-4
      padding-left 2rem
    &.level-5
      padding-left 2.8rem
</style>