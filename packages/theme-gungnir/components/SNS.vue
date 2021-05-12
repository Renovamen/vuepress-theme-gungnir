<template>
  <div class="sns-wrapper">
    <!-- default sns -->
    <a
      v-for="(user, platform) in defaultSNS"
      :key="`${platform}-${user}`"
      :href="snsLink(user, platform)"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon class="icon-stack">
        <v-icon v-if="large" name="fa-circle" scale="2.3" class="icon-circle" />
        <v-icon :name="snsIcon(platform)" class="icon-sns" inverse />
      </v-icon>
    </a>

    <!-- customize sns -->
    <a
      v-for="item in $themeConfig.personalInfo.sns.customize"
      :key="`customize-sns-${item.icon}-${item.link}`"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon class="icon-stack">
        <v-icon v-if="large" name="fa-circle" scale="2.3" class="icon-circle" />
        <v-icon :name="item.icon" class="icon-sns" inverse />
      </v-icon>
    </a>

    <!-- rss -->
    <a
      v-if="$themeConfig.rss"
      href="/rss.xml"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon class="icon-stack">
        <v-icon v-if="large" name="fa-circle" scale="2.3" class="icon-circle" />
        <v-icon name="fa-rss" class="icon-sns" inverse />
      </v-icon>
    </a>
  </div>
</template>

<script>
const platform_links = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  zhihu: "https://www.zhihu.com/people/",
  weibo: "http://weibo.com/u/",
  email: "mailto:"
};

const platform_icons = {
  github: "fa-github-alt",
  linkedin: "fa-linkedin-in",
  facebook: "fa-facebook-f",
  twitter: "fa-twitter",
  zhihu: "ri-zhihu-line",
  weibo: "fa-weibo",
  email: "fa-envelope"
};

export default {
  props: {
    large: Boolean
  },
  computed: {
    defaultSNS() {
      let sns = {};
      for (const platform in this.$themeConfig.personalInfo.sns) {
        if (platform !== "customize")
          sns[platform] = this.$themeConfig.personalInfo.sns[platform];
      }
      return sns;
    }
  },
  methods: {
    snsLink(user, platform) {
      return platform_links[platform] + user;
    },
    snsIcon(platform) {
      return platform_icons[platform];
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.sns-wrapper
  padding 0
  .icon-stack
    min-width 50px
    transition(all ease 0.4s)
    &:hover
      position relative
      cursor pointer
      transform(translateY(-0.35em))
    .icon-circle
      color rgba(0, 0, 0, .5)
</style>
