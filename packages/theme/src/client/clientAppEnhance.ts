import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { h } from "vue";
import Badge from "./components/global/Badge.vue";
import CodeGroup from "./components/global/CodeGroup";
import CodeGroupItem from "./components/global/CodeGroupItem.vue";
import OutboundLink from "./components/global/OutboundLink.vue";
import { useScrollPromise } from "./composables";
import icons from "./icons";

import "./styles/index.scss";

// We avoid importing icons from "oh-vue-icons" directly for dev speed.
addIcons(...icons);

export default defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);

  // unregister the built-in `<OutboundLink>` to avoid warning
  delete app._context.components.OutboundLink;
  // override the built-in `<OutboundLink>`
  app.component("OutboundLink", OutboundLink);

  // compat with @vuepress/plugin-search
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("SearchBox");
    if (SearchComponent) {
      return h(SearchComponent);
    }
    return null;
  });

  // icons
  app.component("VIcon", OhVueIcon);

  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
