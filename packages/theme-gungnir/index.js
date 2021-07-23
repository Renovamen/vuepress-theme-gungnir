// Theme API.
module.exports = (options, ctx) => {
  // default theme config
  Object.assign(
    options,
    Object.assign(
      {
        search: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: "$ grep ...",
        editLinks: true,
        lastUpdated: true,
        smoothScroll: true,
        sidebarDepth: 2,
        hitokoto: false,
        comment: false,
        analytics: false,
        rss: false,
        katex: false,
        mermaid: false,
        chartjs: false,
        roughviz: false,
        markmap: false,
        mdPlus: false,
        readingTime: {},
        personalInfo: {},
        homeHeaderImages: {
          api: "https://source.unsplash.com/1600x900/?wallpaper",
          local: false
        },
        pages: {},
        footer: ""
      },
      options
    )
  );

  const { comment, analytics, readingTime } = options;

  return {
    name: "vuepress-theme-gungnir",
    plugins: [
      "@vuepress/search",
      "@vuepress/plugin-nprogress",
      ["smooth-scroll", options.smoothScroll === true],
      ["@vuepress/active-header-links", options.activeHeaderLinks],
      [
        "@vuepress/plugin-blog",
        {
          permalink: "/:regular",
          frontmatters: [
            {
              id: "tags",
              keys: ["tags"],
              path: "/tags/",
              layout: "Tags",
              scopeLayout: "Tag"
            }
          ],
          directories: [
            {
              id: "posts",
              dirname: "posts",
              path: "/",
              layout: "HomePage",
              itemPermalink: "/post/:year/:month/:day/:slug",
              itemLayout: "Post",
              pagination: {
                layout: "HomePage"
              }
            }
          ]
        }
      ],
      [
        "container",
        {
          type: "info",
          defaultTitle: {
            "/": "INFO",
            "/zh/": "信息"
          }
        }
      ],
      [
        "container",
        {
          type: "tip",
          defaultTitle: {
            "/": "TIP",
            "/zh/": "提示"
          }
        }
      ],
      [
        "container",
        {
          type: "warning",
          defaultTitle: {
            "/": "WARNING",
            "/zh/": "注意"
          }
        }
      ],
      [
        "container",
        {
          type: "danger",
          defaultTitle: {
            "/": "WARNING",
            "/zh/": "警告"
          }
        }
      ],
      [
        "container",
        {
          type: "details",
          before: (info) =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ""
            }\n`,
          after: () => "</details>\n"
        }
      ],
      [
        "@vssue/vuepress-plugin-vssue",
        comment
          ? Object.assign(
              {
                platform: "github"
              },
              comment
            )
          : false
      ],
      [
        "@renovamen/vuepress-plugin-reading-time",
        readingTime
          ? Object.assign(
              {
                excludes: ["/tags/.*", "/links"]
              },
              readingTime
            )
          : false
      ],
      [
        "@vuepress/google-analytics",
        analytics && analytics.ga ? { ga: analytics.ga } : false
      ],
      [
        "@renovamen/vuepress-plugin-baidu-tongji",
        analytics && analytics.ba ? { ba: analytics.ba } : false
      ],
      ["@renovamen/vuepress-plugin-rss", options.rss ? options.rss : false],
      [
        "@renovamen/vuepress-plugin-md-plus",
        options.mdPlus ? options.mdPlus : false
      ],
      ["@renovamen/vuepress-plugin-katex", options.katex],
      ["@renovamen/vuepress-plugin-mermaid", options.mermaid],
      ["vuepress-plugin-chart", options.chartjs],
      ["vuepress-plugin-roughviz", options.roughviz],
      ["vuepress-plugin-markmap", options.markmap]
    ],

    chainMarkdown(config) {
      const { PLUGINS } = require("@vuepress/markdown");
      const originalLinkPlugin = require("@vuepress/markdown/lib/link.js");

      config.plugins.delete(PLUGINS.CONVERT_ROUTER_LINK);

      const linkPlugin = function (md) {
        const result = originalLinkPlugin.apply(this, arguments);
        const close = md.renderer.rules.link_close;
        md.renderer.rules.link_close = function () {
          return close.apply(this, arguments).replace("<OutboundLink/>", "");
        };
        return result;
      };

      config.plugin(PLUGINS.CONVERT_ROUTER_LINK).use(linkPlugin, [
        {
          // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]);
    }
  };
};
