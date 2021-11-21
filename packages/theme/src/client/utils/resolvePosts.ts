import type { PageData } from "@vuepress/client";
import { usePages } from "../composables";
import { compareDate } from "./resolveTime";

export async function getAllPosts(): Promise<PageData[]> {
  const pages = await usePages();
  return pages.filter((page) => page.frontmatter.layout === "Post");
}

export function sortPostsByDate(posts: PageData[]): PageData[] {
  return posts.sort((prev: PageData, next: PageData) => {
    return compareDate(prev, next);
  });
}
