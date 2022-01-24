import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import Badge from "./components/global/Badge.vue";
import CodeGroup from "./components/global/CodeGroup";
import CodeGroupItem from "./components/global/CodeGroupItem.vue";
import { useScrollPromise } from "./composables";
import icons from "./icons";

import "./styles/index.scss";

// We avoid importing icons from "oh-vue-icons" directly for dev speed.
addIcons(...icons);

export default defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);

  // icons
  app.component("VIcon", OhVueIcon);

  // dynamic routes
  router.addRoute({
    path: "/page/:id",
    name: "homepage",
    component: () => import("./layouts/HomePage.vue")
  });

  router.addRoute({
    path: "/tags",
    name: "tags",
    component: () => import("./layouts/Tags.vue")
  });

  router.addRoute({
    path: "/tags/:id",
    name: "tag",
    component: () => import("./layouts/Tags.vue")
  });

  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
