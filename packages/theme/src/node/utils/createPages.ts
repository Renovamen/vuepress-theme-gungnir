import { createPage } from "@vuepress/core";
import type { App } from "@vuepress/core";
import type { GungnirThemeData } from "../../shared";

export const createPages = async (
  app: App,
  localeOptions: GungnirThemeData
) => {
  const homepage = await createPage(app, {
    path: "/",
    frontmatter: {
      title: "Home",
      layout: "HomePage"
    }
  });
  app.pages.push(homepage);

  const tags = await createPage(app, {
    path: "/tags",
    frontmatter: {
      title: "Tags",
      layout: "Tags"
    }
  });
  app.pages.push(tags);

  /**
   * Create page for each tag manully to avoid the issues caused by
   * dynamic routes, see https://github.com/Renovamen/vuepress-theme-gungnir/issues/28.
   */
  const addedTags = {};
  let postNum = 0;

  for (const page of app.pages) {
    if (page.frontmatter.layout !== "Post") continue;

    for (const tag of page.frontmatter.tags as string[]) {
      if (addedTags[tag] === true) continue;

      const tagPage = await createPage(app, {
        path: `/tags/${tag}`,
        frontmatter: {
          title: "Tags",
          layout: "Tags"
        }
      });
      app.pages.push(tagPage);

      addedTags[tag] = true;
    }

    postNum++;
  }

  /**
   * Create page for pagination manully to avoid the issues caused by
   * dynamic routes.
   */
  const maxPageIndex = Math.max(
    1,
    Math.ceil(postNum / (localeOptions.postNumPerPage as number))
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
