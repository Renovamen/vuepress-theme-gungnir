import type { GungnirThemePostData } from "../../shared";
import { dateFormat } from ".";

export const getPostsByYear = (posts: GungnirThemePostData[]) => {
  const formatPages = {} as Record<string, GungnirThemePostData[]>;
  const formatPagesArr = [] as Array<{
    year: string;
    data: GungnirThemePostData[];
  }>;

  for (const post of posts) {
    if (!post.info.date) continue;
    const pageDateYear = dateFormat(post.info.date, "year");
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

export const filterPostsByTag = (
  posts: GungnirThemePostData[],
  tag: string
) => {
  if (tag === "") return posts;
  return posts.filter((item, index) => {
    if (!item.info.tags) return false;
    return item.info.tags.includes(tag);
  });
};
