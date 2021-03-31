import postMixin from "@theme/mixins/posts";
import localMixin from "@theme/mixins/locales";
import { registerCodeThemeCss, registerLinks } from "@theme/utils/other";

import OhVueIcon from "oh-vue-icons";

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
  BiLayoutSidebarInset,
  FaPencilAlt,
  FaCircle,
  FaRss,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  FaWeibo,
  FaEnvelope
} from "oh-vue-icons/icons";

OhVueIcon.add(
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
  BiLayoutSidebarInset,
  FaPencilAlt,
  FaCircle,
  FaRss,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  FaWeibo,
  FaEnvelope
);

export default ({ Vue, siteData, isServer }) => {
  Vue.mixin(postMixin);
  Vue.mixin(localMixin);
  Vue.component("VIcon", OhVueIcon);
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme);
    registerLinks();
  }
};
