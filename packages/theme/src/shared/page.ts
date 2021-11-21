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
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  headerImage?: boolean;
}
