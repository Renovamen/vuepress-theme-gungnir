import Mermaid from "./lib/Mermaid";

export default function (ctx) {
  const { Vue } = ctx;
  Vue.component("Mermaid", Mermaid);
}
