import postMixin from "@theme/mixins/posts";
import localMixin from "@theme/mixins/locales";
import { registerCodeThemeCss, registerLinks } from "@theme/utils/other";

// icons
import OhVueIcon from "oh-vue-icons/dist-css/v2/icon.umd.min";
import "oh-vue-icons/dist-css/v2/icon.css";

import {
  FaRegularUser,
  FaRegularCalendar,
  RiTimerLine,
  FaSun,
  FaMoon,
  FaMagic,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaListUl,
  RiSideBarLine,
  FaSearch,
  FaPencilAlt,
  FaCircle,
  FaRss,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  FaWeibo,
  FaEnvelope,
  RiEarthFill
} from "oh-vue-icons/icons";

OhVueIcon.add([
  FaRegularUser,
  FaRegularCalendar,
  RiTimerLine,
  FaSun,
  FaMoon,
  FaMagic,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
  FaListUl,
  RiSideBarLine,
  FaSearch,
  FaPencilAlt,
  FaCircle,
  FaRss,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  FaWeibo,
  FaEnvelope,
  RiEarthFill
]);

export default ({ Vue, siteData, isServer }) => {
  Vue.mixin(postMixin);
  Vue.mixin(localMixin);
  Vue.component("VIcon", OhVueIcon);
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme);
    registerLinks();
  }
};
