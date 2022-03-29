import { htmlEscape } from "@vuepress/shared";
import { hash } from "@vuepress/utils";
import type MarkdownIt from "markdown-it";
import type Token from "markdown-it/lib/token";

export const getChart = (blockToken = "chart") => {
  const chart = (md: MarkdownIt): void => {
    const temp = md.renderer.rules.fence!.bind(md.renderer.rules);
    md.renderer.rules.fence = (tokens: Token[], index, options, env, slf) => {
      const token = tokens[index];

      if (token.info.trim() === blockToken) {
        try {
          const key = `chart_${hash(index)}`;
          const content = htmlEscape(token.content.trim());
          return `<Chart id="${key}" data-code="${content}"></Chart>`;
        } catch (err) {
          return `<pre>${err}</pre>`;
        }
      }
      return temp!(tokens, index, options, env, slf);
    };
  };
  return chart;
};
