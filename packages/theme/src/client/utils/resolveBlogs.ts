import type { PostPageData } from "../../shared";
import { compareDate, dateFormat } from ".";

export const sortPostsByDate = (posts: PostPageData[]): PostPageData[] => {
  return posts.sort((prev: PostPageData, next: PostPageData) => {
    return compareDate(prev, next);
  });
};

export const getPostsByYear = (posts: PostPageData[]) => {
  const formatPages = {};
  const formatPagesArr = [] as any[];

  for (const post of posts) {
    const pageDateYear = dateFormat(post.frontmatter.date as string, "year");
    if (formatPages[pageDateYear]) formatPages[pageDateYear].push(post);
    else formatPages[pageDateYear] = [post];
  }

  for (const key in formatPages) {
    const data = formatPages[key];
    sortPostsByDate(data);
    formatPagesArr.unshift({
      year: key,
      data
    });
  }

  return formatPagesArr;
};

export const filterPostsByTag = (posts: PostPageData[], tag: string) => {
  if (tag === "") return posts;
  return posts.filter((item, index) => {
    return (item.frontmatter.tags as string[]).includes(tag);
  });
};
