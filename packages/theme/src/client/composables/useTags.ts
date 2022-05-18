import { computed, inject, provide } from "vue";
import type { ComputedRef, InjectionKey } from "vue";
import type { BlogCategoryData } from "vuepress-plugin-blog2";
import { useBlogCategory } from "vuepress-plugin-blog2/lib/client";
import type { GungnirThemePostData, GungnirThemePostInfo } from "../../shared";
import { colorIncrement, toHex, toRGB } from "../utils";

export type TagMapRef = ComputedRef<BlogCategoryData<GungnirThemePostInfo>>;

export const tagMapSymbol: InjectionKey<TagMapRef> = Symbol.for("blogTags");

export const useTagMap = (): TagMapRef => {
  const tagMap = inject(tagMapSymbol);

  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }

  return tagMap;
};

export const setupTagMap = (): void => {
  const tagMap = useBlogCategory<GungnirThemePostInfo>("tag");

  provide(tagMapSymbol, tagMap);
};

export interface TagType {
  name: string;
  path: string;
  pages: Array<GungnirThemePostData>;
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
  const tagMap = useTagMap();

  const tags = computed(() => {
    const tags = [] as Array<TagType>;

    for (const tag in tagMap.value.map) {
      const info = {} as TagType;

      info.name = tag;
      info.pages = tagMap.value.map[tag].items;
      info.path = tagMap.value.map[tag].path;

      tags.push(info);
    }

    tags.sort((prev: TagType, next: TagType) => {
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
