const { hash } = require("@vuepress/shared-utils");

const chart = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];

    if (token.info === "chart") {
      try {
        const key = `chart_${hash(idx)}`;
        const code = token.content.trim();

        md.$dataBlock[key] = code;
        return `<Chart id="${key}" :code="$dataBlock.${key}"></Chart>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, idx, options, env, slf);
  };
};

module.exports = chart;
