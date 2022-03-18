import type { PageData } from "@vuepress/client";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";
import type { PostPageData } from "../../shared";
import { sortPostsByDate } from "../utils";
import { usePages, useThemeLocaleData } from ".";

export async function fetchPosts(): Promise<PageData[]> {
  const pages = await usePages();
  return pages.filter(
    (page) => page.frontmatter.layout === "Post" && !page.frontmatter.hide
  );
}

const preparePosts = (posts: PageData[]): PostPageData[] => {
  const sortedPosts = sortPostsByDate(posts);

  return sortedPosts.map((post, index) => {
    const postWithPager = post as PostPageData;

    postWithPager.next =
      index > 0
        ? {
            title: sortedPosts[index - 1].title,
            link: sortedPosts[index - 1].path
          }
        : null;

    postWithPager.prev =
      index < sortedPosts.length - 1
        ? {
            title: sortedPosts[index + 1].title,
            link: sortedPosts[index + 1].path
          }
        : null;

    return postWithPager;
  });
};

export const useBlog = (pageIndex?: Ref<number>) => {
  const posts = ref<PostPageData[]>([]);
  const themeLocale = useThemeLocaleData();
  const router = useRouter();

  fetchPosts().then((allPosts) => (posts.value = preparePosts(allPosts)));

  const postNumPerPage = computed(
    () => themeLocale.value.postNumPerPage as number
  );

  const maxPageIndex = computed(() =>
    Math.max(1, Math.ceil(posts.value.length / postNumPerPage.value))
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

    const start = (pageValidIndex.value - 1) * postNumPerPage.value;
    return posts.value.slice(
      start,
      Math.min(start + postNumPerPage.value, posts.value.length)
    );
  });

  const pagerLink = computed(() => {
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
      next: next,
      prev: prev
    };
  });

  return {
    posts,
    postIndex,
    post,
    slicedPosts,
    pagerLink
  };
};
