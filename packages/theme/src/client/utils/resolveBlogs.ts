import type { GungnirThemePostData } from "../../shared";
import { resolveDate } from ".";

export const getPostsByYear = (posts: GungnirThemePostData[]) => {
  const formatPages = {} as Record<string, GungnirThemePostData[]>;
  const formatPagesArr = [] as Array<{
    year: string;
    data: GungnirThemePostData[];
  }>;

  for (const post of posts) {
    if (!post.info.date) continue;
    const pageDateYear = resolveDate(post.info.date, "year");
    if (formatPages[pageDateYear]) formatPages[pageDateYear].push(post);
    else formatPages[pageDateYear] = [post];
  }

  for (const key in formatPages) {
    formatPagesArr.unshift({
      year: key,
      data: formatPages[key]
    });
  }

  return formatPagesArr;
};

export const filterPostsByTag = (posts: GungnirThemePostData[], tag: string) =>
  tag === ""
    ? posts
    : posts.filter((item) =>
        item.info.tags ? item.info.tags.includes(tag) : false
      );
