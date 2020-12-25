import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { registerCodeThemeCss, registerLinks } from '@theme/utils/other'

// icons
import VueIcon from 'oh-vue-icons/components/Icon'

import {
  FaRegularUser, FaRegularCalendar, RiTimerLine,
  FaSun, FaMoon, FaMagic,
  FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown,
  FaListUl, RiSideBarLine,
  FaSearch, FaPencilAlt,
  FaCircle, FaRss, FaGithubAlt, FaLinkedinIn, FaFacebookF, FaTwitter, RiZhihuLine, FaWeibo, FaEnvelope
} from 'oh-vue-icons/icons'

VueIcon.add([
  FaRegularUser, FaRegularCalendar, RiTimerLine,
  FaSun, FaMoon, FaMagic,
  FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown,
  FaListUl, RiSideBarLine,
  FaSearch, FaPencilAlt,
  FaCircle, FaRss, FaGithubAlt, FaLinkedinIn, FaFacebookF, FaTwitter, RiZhihuLine, FaWeibo, FaEnvelope
])

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