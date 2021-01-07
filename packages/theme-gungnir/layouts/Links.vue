<template>
    <div>
        <PageHeader :pageInfo="$themeConfig.pageConfig.links" />
        <Common class="links-wrapper">
            <div class="links-group">
                <div
                    v-for="(group, groupId) in $page.frontmatter.links"
                    :key="`link-group-${groupId}`"
                    class="section"
                >
                    <h2 class="title">{{group.title}}</h2>
                    <ul>
                        <li
                            v-for="(item, itemId) in group.items"
                            :key="`link-${itemId}`"
                        >
                            <a
                                :href="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img :src="item.img
                                            ? $withBase(item.img)
                                            : require('@theme/assets/default-link-avatar.jpg')">
                                <span class="sitename">{{ item.sitename }}</span>
                                <div class="desc">{{ item.desc }}</div>
                            </a>
                        </li>
                    </ul>
                    <hr style="visibility: hidden;">
                </div>
            </div>
        </Common>
    </div>
</template>

<script>
import Common from '@theme/components/Common.vue'
import PageHeader from '@theme/components/PageHeader'

export default {
    components: {
        Common,
        PageHeader
    }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/mode.styl'

.links-wrapper
    .links-group
        min-height calc(100vh - 155px - 235px)
        padding-top 10px
        padding-bottom 50px
        width 60%
        margin 0 auto
        overflow-x hidden
        h2, span, .desc
            gungnir-font()
        .title
            font-weight 400
            font-size 18px
            padding-left 10px
            border-left 3px solid var(--accent-color)
            margin-left 25px
            margin-top 50px
        ul
            list-style none
            width 100%
            display inline-block
            li
                width calc((100% - 210px) / 3)
                height 80px
                float left
                border 1px solid var(--border-color)
                padding 10px 30px 10px 20px
                margin 4px 4px
                position relative
                overflow hidden
                border-radius 10px
                transition(all ease .3s)
                a
                    text-decoration none
                    img
                        cursor auto
                        padding 2px
                        border-radius 100%
                        max-width 100%
                        float right
                        box-shadow inset 0 0 10px var(--text-color)
                        margin-top 5px
                        margin-right -15px
                        width 65px
                        height 65px
                        // transition(transform 1s)
                    span.sitename
                        color var(--accent-color)
                        padding-bottom 10px
                        display block
                        overflow hidden
                        text-overflow ellipsis
                        -o-text-overflow ellipsis
                        white-space nowrap
                        font-weight 600
                    .desc
                        color var(--text-color-sub)
                        font-size 13px
                        padding 10px 0
                        border-top 1px dashed #ddd
                        text-overflow ellipsis
                        overflow hidden
                        line-height 15px
                &:hover
                    border 1px solid transparent
                    // img
                    //     transform(rotate(360deg))
                    transform(translate(0px, -3px))
                    box-shadow var(--box-shadow-hover)

    @media (max-width $MQLarge)
        .links-group
            width 75%

    @media (max-width $MQIpad)
        .links-group
            width 85%
            ul li
                width calc((100% - 160px) / 2)
                &:before
                    display none

    @media (max-width $MQMobileNarrow)
        .links-group
            width 100%
            ul li
                width calc(100% - 43px - 50px)
</style>

<style src="@theme/styles/theme.styl" lang="stylus"></style>
