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
        <VIcon v-if="large" name="fa-circle" scale="2.3" class="icon-circle" />
        <VIcon
          :name="getSNSIcon(user, platform)"
          :scale="getSNSIconScale(user, platform)"
          class="icon-sns"
          inverse
        />
      </VIcon>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { SNSItem } from "../../shared";
import { useThemeLocaleData } from "../composables";

const defaultSNS = {
  github: {
    icon: "fa-github-alt",
    preLink: "https://github.com/"
  },
  linkedin: {
    icon: "fa-linkedin-in",
    preLink: "https://www.linkedin.com/in/"
  },
  facebook: {
    icon: "fa-facebook-f",
    preLink: "https://www.facebook.com/"
  },
  twitter: {
    icon: "fa-twitter",
    preLink: "https://www.twitter.com/"
  },
  zhihu: {
    icon: "ri-zhihu-line",
    preLink: "https://www.zhihu.com/people/"
  },
  weibo: {
    icon: "ri-weibo-fill",
    preLink: "http://weibo.com/u/"
  },
  email: {
    icon: "fa-envelope",
    preLink: "mailto:"
  },
  rss: {
    icon: "ri-rss-fill",
    preLink: "",
    iconScale: 0.9
  }
};

defineProps({
  large: {
    type: Boolean,
    default: true
  }
});

const themeLocale = useThemeLocaleData();
const sns = themeLocale.value.personalInfo?.sns;

const getSNSLink = (user: SNSItem, platform: string): string => {
  return typeof user === "string"
    ? defaultSNS[platform].preLink + user
    : user.link;
};

const getSNSIcon = (user: SNSItem, platform: string): string => {
  return typeof user === "string" ? defaultSNS[platform].icon : user.icon;
};

const getSNSIconScale = (user: SNSItem, platform: string): number => {
  return (
    (typeof user === "string"
      ? defaultSNS[platform].iconScale
      : user.iconScale) || 1
  );
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
