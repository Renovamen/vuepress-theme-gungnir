const { hash } = require("@vuepress/shared-utils");

const validType = [
  "bar",
  "barh",
  "donut",
  "line",
  "pie",
  "scatter",
  "stackedbar"
];

const mermaid = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const name = token.info.split("-")[0];
    const type = token.info.split("-")[1];

    if (name === "roughviz" && validType.includes(type)) {
      try {
        const key = `roughviz_${type}_${hash(idx)}`;
        const code = token.content.trim();

        md.$dataBlock[key] = code;
        return `<Roughviz id="${key}" chart="${type}" :code="$dataBlock.${key}"></Roughviz>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, idx, options, env, slf);
  };
};

module.exports = mermaid;
