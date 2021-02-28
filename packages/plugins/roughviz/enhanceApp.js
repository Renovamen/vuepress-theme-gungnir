import Roughviz from "./lib/Roughviz";

export default function (ctx) {
  const { Vue } = ctx;
  Vue.component("Roughviz", Roughviz);
}
