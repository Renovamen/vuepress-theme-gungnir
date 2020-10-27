<template>
    <Common class="post-container">
        <ArticleHeader
            v-show="$page.title"
            class="article-header"
            :articleInfo="$page"
            :class="{ 'style-img': $page.frontmatter.header_style == 'image' }"
            :style="pageHeaderStyle">
            <div
                v-if="($page.frontmatter.header_style == 'image') && $page.frontmatter.header_mask"
                class="header-mask"
                :style="{ 'background': $page.frontmatter.header_mask }">
            </div>
        </ArticleHeader>
        <Page :pageStyle="pageStyle" />
        <Catalog class="side-catalog" />
    </Common>
</template>

<script>
import ArticleHeader from '@theme/components/ArticleHeader'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common.vue'
import Catalog from '@theme/components/Catalog'
import Page from '@theme/components/Page.vue'

export default {
    name: 'Post',
    components: {
        ArticleHeader,
        Footer,
        Common,
        Catalog,
        Page
    },
    computed: {
        pageStyle () {
            return this.$showCatalog ? {} : { 
                paddingRight: '0',
                margin: '0 auto !important'
            }
        },
        pageHeaderStyle () {
            var style = {}
            if (this.$page.frontmatter.header_style == 'image' 
                && this.$page.frontmatter.header_img) 
                style = { backgroundImage: "url(" + this.$withBase(this.$page.frontmatter.header_img) + ")" }
            if (!this.$showCatalog) style.paddingRight = '0'
            return style
        },
    }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'
@require '../styles/wrapper.styl'

.post-container
    .side-catalog
        position fixed
        top 10rem
        bottom 10rem
        right 2rem
        overflow-y scroll
        &::-webkit-scrollbar
            width: 0
            height: 0
    .article-header
        margin-top -2rem
        padding-top 8rem
        position relative
        padding-right $catalogWidth
        background-repeat no-repeat
        background-position center
        background-size cover
        .header-content
            max-width $contentWidth
            margin-left $catalogWidth !important
            z-index 2
            position relative
            .title, .subtitle, .tags, i:first-of-type
                padding-left 2.5rem
                padding-right 2.5rem
            .title
                font-size 50px
                font-weight bold
            .subtitle
                margin-top -10px
                font-weight 400
                font-size 30px
        &.style-img
            padding-top 150px
            padding-bottom 150px
            .title,
            .subtitle,
            .page-tag, 
            i
                color #fff
                border-color #fff
        .header-mask
            width 100%
            height 100%
            position absolute
            margin-top -9.4rem
            z-index 1

    .page
        max-width: $contentWidth;
        margin-left: $catalogWidth !important;
        padding-bottom: 5rem;
        padding-top 1rem
        h1
            font-size: 50px;
        h2, h3, h4, h5, h6
            font-weight: bold;
        h2
            font-size: 30px;
        h3
            font-size: 24px;
        h4
            font-size: 21px;
        h5
            font-size: 19px;
            color: var(--text-color-sub);
        h6
            font-size: 16px;
            color: var(--text-color-sub);
        a.header-anchor
            opacity: 1;
        .vssue-comment-wrapper
            @extend $wrapper
            margin-top 10rem
            margin-bottom -3rem
            @media (max-width: $MQMobile)
                padding 1rem
                margin-top 13rem
                margin-bottom -5rem

@media (max-width: ($MQIpad + 1px))
    .post-container
        .page, .article-header .header-content
            max-width auto
            margin: 0 auto !important;

@media (max-width: $MQMobile)
    .post-container
        .article-header
            padding-top 6rem
            padding-bottom 0
            padding-right 0
            .header-content
                .title, .subtitle, .tags, i:first-of-type
                    padding-left 1rem
                    padding-right 1rem
                .title
                    font-size: 30px;
                .subtitle
                    font-size: 16px;
                    margin-top: -5px;
            &.style-img
                padding-top 85px
                padding-bottom 45px
            .header-mask
                margin-top -5.4rem
        .page
            h1
                font-size: 30px;
            h2
                font-size: 25px;
            h3
                font-size: 22px;
            h4
                font-size: 21px;
            h5
                font-size: 19px;
            h6
                font-size: 16px;
        .side-catalog
            transition(transform .5s);
            transform(translateX(calc(100% + 2rem)));
            position: fixed;
            top: -15px !important;
            right: -2px;
            padding-top: 2rem;
            width: 15rem !important;
            height: 100%;
            background-color: var(--bg-color);
            z-index: 5;
            &.open
                transform(translateX(0));
                box-shadow: var(--box-shadow);
            li
                border-left: none;
                &.active
                    border-left: 2px solid var(--accent-color);
</style>
<style src="../styles/theme.styl" lang="stylus"></style>