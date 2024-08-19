import type { ReadingTime } from "@renovamen/vuepress-plugin-reading-time";
import type { GitPluginPageData } from "@vuepress/plugin-git";
import type { NavLink, SidebarConfig } from "./nav";

export interface GungnirThemePageData extends GitPluginPageData {
  filePathRelative: string | null;
  readingTime?: ReadingTime;
}

export interface GungnirThemePageFrontmatter {
  navbar?: boolean;
  pageClass?: string;
  search?: boolean;
}

export interface GungnirThemeNormalPageFrontmatter
  extends GungnirThemePageFrontmatter {
  title?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  contributors?: boolean;
  sidebar?: "auto" | false | SidebarConfig;
  sidebarDepth?: number;
  prev?: string | NavLink;
  next?: string | NavLink;
  auth?:any
  giscus?: boolean;
}

export interface GungnirThemePostFrontmatter
  extends GungnirThemePageFrontmatter {
  title: string;
  subtitle?: string;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  useHeaderImage?: boolean;
  author?: string;
  date?: string;
  headerImage: string;
  headerMask?: string;
  headerImageCredit?: string;
  auth?:any
  headerImageCreditLink?: string;
  catalog?: boolean;
  tags?: string[];
  hide?: boolean;
}

interface LinkItem {
  sitename: string;
  url: string;
  img: string;
  desc: string;
}

interface LinkGroup {
  title: string;
  item: Array<LinkItem>;
}
interface Memory {
  content?:string
  zIndex?:number//权重，影响置顶
  desc?:string 
  img?:[] //配图
  time?:string //时刻
  video?:[]//视频
  music?:[]//音乐
  audio?:[]//音乐
  title?:string
  tem?:string //气温
  avatar?:string //头像
  owner?:string//拥有者
  weather?:string //天气
  location?:string //地点
  [key:string]:any
}
export interface MemoryGroup {
  date:string //日期(不精确到人)
  memory:Array<Memory>
}
export interface GungnirThemeLinksPageFrontmatter
  extends GungnirThemePageFrontmatter {
  title?: string;
  links: Array<LinkGroup>;
  memorys?:Array<MemoryGroup>
}
