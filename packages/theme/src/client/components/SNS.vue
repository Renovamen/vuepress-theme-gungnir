<template>
  <div class="sns-wrapper">
    <!-- SNS -->
    <a
      v-for="(user, platform) in sns"
      :key="`${platform}-${user}`"
      :href="getSNSLink(user, platform)"
      target="_blank"
      rel="noopener noreferrer"
    >
      <VIcon class="icon-stack">
        <VIcon v-if="large" name="circle" scale="2" class="icon-circle" />
        <VIcon
          :name="getSNSIcon(platform)"
          :scale="platform == 'zhihu' ? 1 : 0.9"
          class="icon-sns"
          inverse
        />
      </VIcon>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useThemeLocaleData } from "../composables";

const snsLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  zhihu: "https://www.zhihu.com/people/",
  weibo: "http://weibo.com/u/",
  email: "mailto:"
};

const snsIcons = {
  github: "github",
  linkedin: "linkedin-in",
  facebook: "facebook-f",
  twitter: "twitter",
  zhihu: "zhihu",
  weibo: "weibo",
  email: "envelope"
};

defineProps({
  large: {
    type: Boolean,
    default: true
  }
});

const themeLocaleDataRef = useThemeLocaleData();
const sns = themeLocaleDataRef.value.personalInfo?.sns;

const getSNSLink = (user: string, platform: string) => {
  return snsLinks[platform] + user;
};

const getSNSIcon = (platform: string) => {
  return snsIcons[platform];
};
</script>

<style lang="scss">
@import "../styles/_mixins";

.sns-wrapper {
  padding: 0;
}

.icon-stack {
  min-width: 50px;
  @include transition(all ease 0.4s);

  &:hover {
    position: relative;
    cursor: pointer;
    @include transform(translateY(-0.35em));
  }

  svg.icon-circle {
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
