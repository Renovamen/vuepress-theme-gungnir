import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  BiLayoutSidebarInset,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCircle,
  FaEnvelope,
  FaFacebookF,
  FaGithubAlt,
  FaLinkedinIn,
  FaListUl,
  FaMagic,
  FaMoon,
  FaPencilAlt,
  FaRegularCalendar,
  FaRegularUser,
  FaSun,
  FaTwitter,
  HiTranslate,
  RiRssFill,
  RiSearch2Line,
  RiTimerLine,
  RiWeiboFill,
  RiZhihuLine
} from "oh-vue-icons/icons";
import Badge from "./components/global/Badge.vue";
import CodeGroup from "./components/global/CodeGroup";
import CodeGroupItem from "./components/global/CodeGroupItem.vue";
import { useScrollPromise } from "./composables";
import "./styles/index.scss";

addIcons(
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaMagic,
  FaSun,
  FaMoon,
  FaGithubAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  RiZhihuLine,
  RiWeiboFill,
  FaEnvelope,
  RiRssFill,
  FaCircle,
  FaPencilAlt,
  FaRegularUser,
  FaRegularCalendar,
  RiTimerLine,
  FaListUl,
  BiLayoutSidebarInset,
  HiTranslate,
  RiSearch2Line
);

export default defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);

  // icons
  app.component("VIcon", OhVueIcon);

  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
