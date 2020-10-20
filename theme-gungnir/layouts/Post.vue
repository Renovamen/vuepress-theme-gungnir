<template>
    <Common class="post-container">
        <Page :pageStyle="pageStyle" />
        <Catalog class="side-catalog" />
    </Common>
</template>

<script>
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common.vue'
import Catalog from '@theme/components/Catalog'
import Page from '@theme/components/Page.vue'

export default {
    name: 'Post',
    components: {
        Footer,
        Common,
        Catalog,
        Page
    },
    computed: {
        pageStyle () {
            return this.$showCatalog ? {} : { paddingRight: '0' }
        }
    }
}
</script>

<style lang="stylus">
@require '../styles/mixins.styl'

.post-container {
    .side-catalog {
        position fixed
        top 10rem
        bottom 10rem
        right 2rem
        overflow-y scroll
        &::-webkit-scrollbar {
            width: 0
            height: 0
        }
    }
    .page {
        max-width: $contentWidth;
        margin-left: 14rem !important;
        padding-bottom: 5rem;
        @media (max-width: 1024px) {
            max-width: auto;
            margin: 0 auto !important;
        }
        .page-title {
            padding: 1rem 2.5rem;
        }
        h1 {
            font-size: 50px;
        }
        h2, h3, h4, h5, h6 {
            font-weight: bold;
        }
        h2 {
            font-size: 30px;
        }
        h3 {
            font-size: 24px;
        }
        h4 {
            font-size: 21px;
        }
        h5 {
            font-size: 19px;
            color: var(--text-color-sub);
        }
        h6 {
            font-size: 16px;
            color: var(--text-color-sub);
        }
        a.header-anchor {
            opacity: 1;
        }
    }
}
@media (max-width: $MQMobile) {
    .post-container {
        .page {
            .page-title {
                padding: 1rem 1rem 0;
                .subtitle {
                    font-size: 20px;
                    margin-top: -5px;
                }
            }
            h1 {
                font-size: 30px;
            }
            h2 {
                font-size: 25px;
            }
            h3 {
                font-size: 22px;
            }
            h4 {
                font-size: 21px;
            }
            h5 {
                font-size: 19px;
            }
            h6 {
                font-size: 16px;
            }
        }
        .side-catalog {
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
            &.open {
                transform(translateX(0));
                box-shadow: var(--box-shadow);
            }
            li {
                border-left: none;
                &.active {
                    border-left: 2px solid var(--accent-color);
                }
            }
        }
    }
}
</style>
<style src="../styles/theme.styl" lang="stylus"></style>