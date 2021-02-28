import Chart from "./lib/Chart";

export default function (ctx) {
  const { Vue } = ctx;
  Vue.component("Chart", Chart);
}
