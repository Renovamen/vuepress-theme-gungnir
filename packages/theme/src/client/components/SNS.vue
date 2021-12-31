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
    icon: "github",
    preLink: "https://github.com/"
  },
  linkedin: {
    icon: "linkedin-in",
    preLink: "https://www.linkedin.com/in/"
  },
  facebook: {
    icon: "facebook-f",
    preLink: "https://www.facebook.com/"
  },
  twitter: {
    icon: "twitter",
    preLink: "https://www.twitter.com/"
  },
  zhihu: {
    icon: "zhihu",
    preLink: "https://www.zhihu.com/people/",
    iconScale: 1.1
  },
  weibo: {
    icon: "weibo",
    preLink: "http://weibo.com/u/"
  },
  email: {
    icon: "envelope",
    preLink: "mailto:"
  },
  rss: {
    preLink: "",
    icon: "rss"
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
    0.9 *
    ((typeof user === "string"
      ? defaultSNS[platform].iconScale
      : user.iconScale) || 1)
  );
};
</script>

<style lang="scss">
@import "../styles/utils/_mixins";

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
