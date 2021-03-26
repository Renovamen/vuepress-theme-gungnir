const { hash } = require("@vuepress/shared-utils");

const markmap = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];

    if (token.info === "markmap") {
      try {
        const key = `markmap_${hash(idx)}`;
        const code = token.content.trim();

        md.$dataBlock[key] = code;
        return `<Markmap id="${key}" :code="$dataBlock.${key}"></Markmap>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, idx, options, env, slf);
  };
};

module.exports = markmap;
