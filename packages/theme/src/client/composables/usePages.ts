import type { PageData } from "@vuepress/client";
import { usePagesData } from "@vuepress/client";
import { inject } from "vue";
import type { InjectionKey } from "vue";

export const pagesSymbol: InjectionKey<Promise<PageData[]>> = Symbol("posts");

export const usePages = async (): Promise<PageData[]> => {
  const pages = inject(pagesSymbol);
  if (!pages) {
    throw new Error("usePages() is called without provider.");
  }
  return pages;
};

export const resolvePages = async (): Promise<PageData[]> => {
  const pagesData = usePagesData();

  const pages = await Promise.all(
    Object.keys(pagesData.value).map((key) => (pagesData.value[key] as any)())
  );

  return pages as PageData[];
};
