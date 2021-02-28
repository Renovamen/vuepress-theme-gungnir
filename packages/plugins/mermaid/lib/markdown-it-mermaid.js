const { hash } = require("@vuepress/shared-utils");

const mermaid = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];

    if (token.info === "mermaid") {
      try {
        const key = `mermaid_${hash(idx)}`;
        const code = token.content.trim();

        md.$dataBlock[key] = code;
        return `<Mermaid id="${key}" :code="$dataBlock.${key}"></Mermaid>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, idx, options, env, slf);
  };
};

module.exports = mermaid;
