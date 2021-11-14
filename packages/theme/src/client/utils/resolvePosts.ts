import type { PageData } from "@vuepress/client";
import { usePages } from "../composables";

export async function getAllPosts(): Promise<Array<PageData>> {
  const pages = await usePages();
  return pages.filter((page) => page.frontmatter.layout === "Post");
}
