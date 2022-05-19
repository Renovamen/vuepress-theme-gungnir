import type { Page, Plugin } from "@vuepress/core";
import type { LocaleConfig } from "@vuepress/shared";
import { blogPlugin } from "vuepress-plugin-blog2";
import type { BlogOptions } from "vuepress-plugin-blog2";
import type {
  GungnirThemeBlogPluginOptions,
  GungnirThemeData,
  GungnirThemeLocaleData,
  GungnirThemePostFrontmatter,
  GungnirThemePostInfo
} from "../../shared";

type ThemeData = GungnirThemeLocaleData & {
  locales: LocaleConfig<GungnirThemeLocaleData>;
};

type ThemePostPage = Page<GungnirThemePostFrontmatter>;

const defaultOptions: GungnirThemeBlogPluginOptions = {
  tag: "/tags/",
  tagItem: "/tags/:name/"
};

const getTime = (page: ThemePostPage): number => {
  const date = page.frontmatter.date;
  return date ? new Date(date).getTime() : -1;
};

const compareDate = (pageA: ThemePostPage, pageB: ThemePostPage): number => {
  const timeA = getTime(pageA);
  const timeB = getTime(pageB);

  if (timeA === -1) return 1;
  if (timeB === -1) return -1;

  return timeB - timeA;
};

const sorter = (pageA: ThemePostPage, pageB: ThemePostPage): number =>
  compareDate(pageA, pageB);

export const getBlogPlugin = (
  localeOptions: GungnirThemeData,
  options?: GungnirThemeBlogPluginOptions
): Plugin | [] => {
  if (options === false) return [];

  const blogOptions = {
    ...defaultOptions,
    ...(typeof options === "object" ? options : {})
  };

  const themeData = localeOptions as ThemeData;

  return blogPlugin({
    metaScope: "",

    filter:
      blogOptions.filter ||
      (({ frontmatter }): boolean =>
        frontmatter.layout === "Post" && !frontmatter.hide),

    getInfo: ({
      excerpt,
      frontmatter
    }: {
      excerpt: string;
      frontmatter: GungnirThemePostFrontmatter;
    }): GungnirThemePostInfo => ({
      title: frontmatter.title || "",
      subtitle: frontmatter.subtitle || "",
      date: frontmatter.date || null,
      tags: frontmatter.tags || [],
      headerImage: frontmatter.headerImage,
      excerpt
    }),

    category: [
      {
        key: "tag",
        getter: ({
          frontmatter
        }: {
          frontmatter: GungnirThemePostFrontmatter;
        }) => frontmatter.tags || [],
        sorter,
        path: blogOptions.tag,
        layout: "Tags",
        frontmatter: (localePath) => ({
          title: themeData.locales[localePath].pageText?.tags || "Tags",
          layout: "Tags"
        }),
        itemPath: blogOptions.tagItem,
        itemLayout: "Tags",
        itemFrontmatter: (name, localePath) => ({
          title: `${name} | ${
            themeData.locales[localePath].pageText?.tags || "Tags"
          }`,
          layout: "Tags"
        })
      }
    ],

    type: [
      {
        key: "post",
        sorter,
        filter: () => true,
        path: "/",
        layout: "HomePage",
        frontmatter: () => ({
          title: "Home",
          layout: "HomePage"
        })
      }
    ]
  } as BlogOptions);
};
