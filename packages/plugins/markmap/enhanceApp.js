import Markmap from "./lib/Markmap";

export default function (ctx) {
  const { Vue } = ctx;
  Vue.component("Markmap", Markmap);
}
