<template>
    <div class="tag-postlist-wrapper">

        <section v-for="(item, index) in data" :key="index">
            <span class="fa listing-seperator">
                <span class="year">{{ item.year }}</span>
            </span>

            <div v-for="(subItem, subIndex) in item.data" :key="subIndex"
                :currentTag="currentTag" class="post-item">
                <router-link :to="subItem.path">
                    <h2 class="post-item__title">{{ subItem.frontmatter.title }}</h2>
                    <h3 v-if="subItem.frontmatter.subtitle" class="post-item__subtitle">{{ subItem.frontmatter.subtitle }}</h3>
                </router-link>
                <hr>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: [
        'data',
        'currentTag'
    ],
}
</script>

<style lang="stylus" scoped>
@require '../styles/mixins.styl'

.tag-postlist-wrapper
    width 100%
    margin-bottom 100px

    .listing-seperator
        color var(--accent-color)
        font-size 21px !important
        &::before
            margin-right 5px

    section
        margin-bottom 30px
        .year
            font-weight 200
            sans-serif()
        .post-item
            position relative
            margin-left 20px
            &__title
                font-size 18px
                font-weight 500
                margin-top 20px
            &__subtitle
                font-size 14px
            @media (max-width: $MQMobile)
                margin-left 0
                &__title
                    font-size 16px
                &__subtitle
                    font-size 13px
</style>