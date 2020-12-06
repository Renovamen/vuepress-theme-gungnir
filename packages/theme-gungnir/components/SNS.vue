<template>
    <div class="sns-wrapper">
        <a
            v-for="(user, platform) in $themeConfig.SNS"
            :key="`${platform}-${user}`"
            :href="snsLink(user, platform)"
            target="_blank"
            rel="noopener noreferrer"
        >
            <v-icon class="icon-stack">
                <v-icon v-if="large" name="fa/circle" scale="2.3" class="icon-circle"/>
                <v-icon :name="snsIcon(platform)" inverse class="icon-sns"/>
            </v-icon>
        </a>
        <a
            v-if="$themeConfig.rss"
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
        >
            <v-icon class="icon-stack">
                <v-icon v-if="large" name="fa/circle" scale="2.3" class="icon-circle"/>
                <v-icon name="fa/rss" inverse class="icon-sns"/>
            </v-icon>
        </a>
    </div>
</template>

<script>
// icons
import 'oh-vue-icons/icons/fa/circle'
import 'oh-vue-icons/icons/fa/rss'
import 'oh-vue-icons/icons/fa/brands/github-alt'
import 'oh-vue-icons/icons/fa/brands/linkedin-in'
import 'oh-vue-icons/icons/fa/brands/facebook-f'
import 'oh-vue-icons/icons/fa/brands/twitter'
import 'oh-vue-icons/icons/ri/zhihu-line'
import 'oh-vue-icons/icons/fa/brands/weibo'
import 'oh-vue-icons/icons/fa/envelope'

const platform_links = {
    'github': 'https://github.com/',
    'linkedin': 'https://www.linkedin.com/in/',
    'facebook': 'https://www.facebook.com/',
    'twitter': 'https://www.twitter.com/',
    'zhihu': 'https://www.zhihu.com/people/',
    'weibo': 'http://weibo.com/',
    'email': 'mailto:'
}

const platform_icons = {
    'github': 'fa/brands/github-alt',
    'linkedin': 'fa/brands/linkedin-in',
    'facebook': 'fa/brands/facebook-f',
    'twitter': 'fa/brands/twitter',
    'zhihu': 'ri/zhihu-line',
    'weibo': 'fa/brands/weibo',
    'email': 'fa/envelope'
}

export default {
    props: {
        large: Boolean
    },
    methods: {
        snsLink(user, platform) {
            return platform_links[platform] + user
        },
        snsIcon(platform) {
            return platform_icons[platform]
        }
    }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.sns-wrapper
    margin-top 270px
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