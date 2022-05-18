import type { Article } from "vuepress-plugin-blog2";

export interface GungnirThemePostPager {
  title?: string;
  link?: string;
  text?: string;
}

export interface GungnirThemePostInfo extends Record<string, unknown> {
  title: string;
  subtitle?: string;
  date?: string | null;
  tags?: string[];
  headerImage: string;
  excerpt?: string;
  next?: GungnirThemePostPager | null;
  prev?: GungnirThemePostPager | null;
}

export type GungnirThemePostData = Article<GungnirThemePostInfo>;
