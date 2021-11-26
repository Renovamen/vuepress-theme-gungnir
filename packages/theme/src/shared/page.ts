import type { PageData } from "@vuepress/client";
import type { GitPluginPageData } from "@vuepress/plugin-git";
import type { NavLink, SidebarConfig } from "./nav";

export interface GungnirThemePageData extends GitPluginPageData {
  filePathRelative: string;
}

export interface GungnirThemePageFrontmatter {
  home?: boolean;
  navbar?: boolean;
  pageClass?: string;
}

export interface GungnirThemeNormalPageFrontmatter
  extends GungnirThemePageFrontmatter {
  home?: false;
  title?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  contributors?: boolean;
  sidebar?: "auto" | false | SidebarConfig;
  sidebarDepth?: number;
  prev?: string | NavLink;
  next?: string | NavLink;
}

export interface GungnirThemePostFrontmatter
  extends GungnirThemePageFrontmatter {
  title: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  useHeaderImage?: boolean;
  subtitle?: string;
  author?: string;
  date: string;
  headerImage: string;
  headerMask?: string;
  catalog: boolean;
  tags: string[];
}

export interface PagerData {
  title: string;
  link: string;
}

export interface PostPageData extends PageData {
  next?: PagerData | null;
  prev?: PagerData | null;
}
