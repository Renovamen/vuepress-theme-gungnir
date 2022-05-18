import { createPage } from "@vuepress/core";
import type { App } from "@vuepress/core";
import type { GungnirThemeData } from "../../shared";

export const createPages = async (
  app: App,
  localeOptions: GungnirThemeData
) => {
  /**
   * Create page for pagination manully to avoid the issues caused by
   * dynamic routes, see https://github.com/Renovamen/vuepress-theme-gungnir/issues/28.
   */
  const blogNum = app.pages.filter(
    (page) => page.frontmatter.layout === "Post"
  ).length;
  const maxPageIndex = Math.max(
    1,
    Math.ceil(blogNum / (localeOptions.blogNumPerPage as number))
  );

  for (let i = 1; i <= maxPageIndex; i++) {
    const pagination = await createPage(app, {
      path: `/page/${i}`,
      frontmatter: {
        title: "Home",
        layout: "HomePage"
      }
    });
    app.pages.push(pagination);
  }
};
