import { computed, inject, provide } from "vue";
import type { ComputedRef, InjectionKey, Ref } from "vue";
import { useRouter } from "vue-router";
import type { BlogTypeData } from "vuepress-plugin-blog2";
import { useBlogType } from "vuepress-plugin-blog2/lib/client";
import type { GungnirThemePostInfo } from "../../shared";
import { useThemeLocaleData } from ".";

export type BlogRef = ComputedRef<BlogTypeData<GungnirThemePostInfo>>;

export const blogsSymbol: InjectionKey<BlogRef> = Symbol.for("blogs");

export const useBlogPages = (): BlogRef => {
  const blogs = inject(blogsSymbol);

  if (!blogs) {
    throw new Error("useBlogPages() is called without provider.");
  }

  return blogs;
};

export const setupBlogPages = (): void => {
  const blogs = useBlogType<GungnirThemePostInfo>("post");

  provide(blogsSymbol, blogs);
};

export const useBlog = (pageIndex?: Ref<number>) => {
  const themeLocale = useThemeLocaleData();
  const router = useRouter();
  const postPages = useBlogPages();

  const posts = computed(() => {
    const pages = postPages.value.items;

    return pages.map((page, index) => {
      const post = page;

      post.info.next =
        index > 0
          ? {
              title: pages[index - 1].info.title,
              link: pages[index - 1].path
            }
          : null;

      post.info.prev =
        index < pages.length - 1
          ? {
              title: pages[index + 1].info.title,
              link: pages[index + 1].path
            }
          : null;

      return post;
    });
  });

  const blogNumPerPage = computed(
    () => themeLocale.value.blogNumPerPage as number
  );

  const maxPageIndex = computed(() =>
    Math.max(1, Math.ceil(posts.value.length / blogNumPerPage.value))
  );

  const pageValidIndex = computed(() => {
    if (!pageIndex) return -1;
    return Math.max(1, Math.min(pageIndex.value, maxPageIndex.value));
  });

  const postIndex = computed(() =>
    posts.value.findIndex(
      (item) => item.path === router.currentRoute.value.path
    )
  );

  const post = computed(() =>
    postIndex.value === -1 ? null : posts.value[postIndex.value]
  );

  const slicedPosts = computed(() => {
    if (posts.value.length === 0 || pageValidIndex.value === -1)
      return posts.value;

    const start = (pageValidIndex.value - 1) * blogNumPerPage.value;
    return posts.value.slice(
      start,
      Math.min(start + blogNumPerPage.value, posts.value.length)
    );
  });

  const postListPager = computed(() => {
    if (!pageIndex) return {};

    const next =
      pageValidIndex.value > 1
        ? Math.min(pageIndex.value, maxPageIndex.value) - 1 === 1
          ? "/"
          : `/page/${pageIndex.value - 1}`
        : null;

    const prev =
      pageValidIndex.value < maxPageIndex.value
        ? `/page/${pageIndex.value + 1}`
        : null;

    return {
      next,
      prev
    };
  });

  return {
    posts,
    postIndex,
    post,
    slicedPosts,
    postListPager
  };
};
