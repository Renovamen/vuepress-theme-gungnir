import { zhHans, zhHant, en, ja, ko } from '../locales/index'

export default {
  computed: {
    $themeLocales () {
      const themeLocales = this.$themeLocaleConfig.themeLocales || {}

      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return { ...zhHans, ...themeLocales }
      }
      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return { ...zhHant, ...themeLocales }
      }
      if (/^ja\-JP$/.test(this.$lang)) {
        return { ...ja, ...themeLocales }
      }
      if (/^ko\-KR$/.test(this.$lang)) {
        return { ...ko, ...themeLocales }
      }
      return { ...en, ...themeLocales }
    }
  }
}