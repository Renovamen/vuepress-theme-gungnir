<template>
    <div class="menu-btn-container" :class="{'open': isMenuOpen}">
        <div class="menu-btn-wrapper">
            <div
                class="menu-btn"
                @click="toggleMenu"
            >
                <div
                    v-show="isBtnIconVisible"
                    class="menu-btn-icon"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    v-show="isTextVisible"
                    class="menu-text"
                >
                    {{ menuText }}
                </div>
                <svg class="menu-svg">
                    <circle
                        class="menu-border"
                        ref="menu_border"
                        cx="50%"
                        cy="50%"
                        r="48%"
                        :style="{'stroke-dasharray': borderLen}"
                    />
                </svg>
            </div>
            <div class="menu-btn-child-wrapper">
                <ToggleMode class="menu-btn-child" />
                <div
                    class="menu-btn-child"
                    @click="goToBottom"
                >
                    <v-icon name="fa-chevron-down" />
                </div>
                <div
                    class="menu-btn-child"
                    @click="goToTop"
                >
                    <v-icon name="fa-chevron-up" />
                </div>
                <div
                    v-if="$page.frontmatter.catalog && $page.headers"
                    class="menu-btn-child menu-toc-btn"
                    @click="$emit('toggle-catalog')"
                >
                    <v-icon name="fa-list-ul" />
                </div>
                <div
                    class="menu-btn-child menu-btn-sidebar"
                    @click="$emit('toggle-sidebar')"
                >
                    <v-icon name="ri-side-bar-line" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToggleMode from '@theme/components/ToggleMode'

export default {
    components: {
        ToggleMode
    },

    data () {
        return {
            isMenuOpen: false,
            isTextVisible: false,
            isBtnIconVisible: true,
            menuText: 0,
            borderLen: '0% 314.15926%',
        }
    },

    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll)
    },

    computed: {
        
    },

    methods: {
        handleScroll () {
            var currentTop = window.pageYOffset
            var docuHeight = document.body.offsetHeight
            var windowHeight = document.documentElement.clientHeight

            var percent = currentTop / (docuHeight - windowHeight) * 100
            if (percent > 100) percent = 100

            if (isNaN(percent) || Math.round(percent) <= 0) {
                percent = 0
                this.isTextVisible = false
                this.isBtnIconVisible = true
            } 
            else {
                this.isTextVisible = true
                this.menuText = Math.round(percent) + '%'
                this.isBtnIconVisible = false
            }

            this.borderLen = 3.1415926 * (percent || 0) + '% 314.15926%'
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        goToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        },
        goToBottom() {
            var docuHeight = document.body.offsetHeight
            window.scrollTo({
                top: docuHeight,
                behavior: 'smooth',
            })
        }
    }
}
</script>
