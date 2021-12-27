import { computed } from "vue";
import type { PostPageData } from "../../shared";
import { colorIncrement, toHex, toRGB } from "../utils";
import { useBlog } from ".";

export interface Tags {
  name: string;
  path: string;
  pages: Array<PostPageData>;
  tagColor?: string;
}

const tagColor = (start: string, increment: number[], weighting: number) => {
  const rgb = toRGB(start).map((value, i) => {
    let ref = Math.round(value + increment[i] * weighting);
    if (ref > 255) ref = 255;
    else if (ref < 0) ref = 0;
    return ref;
  });
  return toHex(rgb);
};

export const useTags = (start = "#a5a5e4", end = "#4388c4") => {
  const { posts } = useBlog();

  const tags = computed(() => {
    const tagdict = {};
    for (const post of posts.value) {
      const frontmatter = post.frontmatter as any;
      for (const tag of frontmatter.tags) {
        if (tagdict[tag] === undefined) tagdict[tag] = [];
        tagdict[tag].push(post);
      }
    }

    const tags = [] as Array<Tags>;

    for (const tag in tagdict) {
      const info = {} as Tags;
      info.pages = tagdict[tag];
      info.name = tag;
      info.path = `/tags/${tag}`;
      tags.push(info);
    }

    tags.sort((prev, next) => {
      return next.pages.length - prev.pages.length;
    });

    return tags;
  });

  const tagsWithColor = computed(() => {
    if (tags.value.length === 0) return [];

    const lowest = tags.value[tags.value.length - 1].pages.length;
    const highest = tags.value[0].pages.length;
    const range = Math.max(highest - lowest, 1);

    const colorIncr = colorIncrement(start, end, range);

    const tagList = tags.value;
    for (const item of tagList) {
      const weighting = item.pages.length - lowest;
      item.tagColor = tagColor(start, colorIncr, weighting);
    }

    return tagList;
  });

  return {
    tags,
    tagsWithColor
  };
};
