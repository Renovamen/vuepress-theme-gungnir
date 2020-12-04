import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { registerCodeThemeCss, registerLinks } from '@theme/utils/other'
import VueIcon from 'oh-vue-icons/components/Icon'

export default ({
  Vue,
  siteData,
  isServer
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.component('v-icon', VueIcon)
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
    registerLinks()
  }
}