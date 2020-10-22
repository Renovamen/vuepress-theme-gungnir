<template>
    <div class="sns-wrapper">
        <a
            v-for="(user, platform) in $themeConfig.SNS"
            :key="`${platform}-${user}`"
            :href="snsLink(user, platform)"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-stack-1x fa-inverse icon-sns" :class="snsIcon(platform)"></i>
            </span>
        </a>
    </div>
</template>

<script>
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
    'github': 'fab fa-github-alt',
    'linkedin': 'fab fa-linkedin-in',
    'facebook': 'fab fa-facebook-f',
    'twitter': 'fab fa-twitter',
    'zhihu': 'fab fa-zhihu',
    'weibo': 'fab fa-weibo',
    'email': 'fas fa-envelope'
}

export default {
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
    font-size 14px
    .fa-stack
        width 50px
        transition(all ease 0.4s)
        &:hover
            position relative
            cursor pointer
            transform(translateY(-0.35em))
        .fa-circle
            color rgba(0, 0, 0, .5)
        .icon-sns
            padding-top 1px
</style>