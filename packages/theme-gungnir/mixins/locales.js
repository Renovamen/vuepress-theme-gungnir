import { enUS, zhCN } from "../locales/index";

export default {
  computed: {
    $themeLocales() {
      const themeLocales = this.$themeLocaleConfig.themeLocales || {};
      if (this.$lang === "zh-CN") {
        return { ...zhCN, ...themeLocales };
      }
      return { ...enUS, ...themeLocales };
    }
  }
};
