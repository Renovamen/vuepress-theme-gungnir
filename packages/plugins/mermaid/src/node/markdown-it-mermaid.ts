import { hash } from "@vuepress/utils";
import type * as MarkdownIt from "markdown-it";
import type * as Token from "markdown-it/lib/token";
import { htmlEscape } from "./utils";

const MarkdownItMermaid = (blockToken = "mermaidjs") => {
  const mermaid = (md: MarkdownIt): void => {
    const temp = md.renderer.rules.fence!.bind(md.renderer.rules);
    md.renderer.rules.fence = (tokens: Token[], index, options, env, slf) => {
      const token = tokens[index];

      if (token.info.trim() === blockToken) {
        try {
          const key = `mermaid_${hash(index)}`;
          const content = htmlEscape(token.content.trim());
          return `<Mermaid id="${key}" data-code="${content}"></Mermaid>`;
        } catch (err) {
          return `<pre>${err}</pre>`;
        }
      }
      return temp!(tokens, index, options, env, slf);
    };
  };
  return mermaid;
};

export default MarkdownItMermaid;
