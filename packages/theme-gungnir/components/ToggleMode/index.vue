<template>
	<a
		role="button"
		class="toggle-mode"
    :aria-label="'Toggle ' + nextMode"
		:title="'Toggle ' + nextMode"
		@click.prevent="toggleMode()"
  >
		<v-icon
			name="fa-sun"
			v-if="currentMode === 'light'"
		/>
    <v-icon
			name="fa-moon"
			v-else-if="currentMode === 'dark'"
		/>
		<v-icon
			name="fa-magic"
			v-else-if="currentMode === 'auto'"
		/>
	</a>
</template>

<script>
import applyMode from './applyMode'

let modeOptions = ['light', 'dark', 'auto']

export default {
	name: 'UserSettings',

	data () {
		return {
			currentMode: 'auto'
		}
	},

	computed: {
		nextMode() {
			const currentIndex = modeOptions.indexOf(this.currentMode)
			const nextIndex = (currentIndex + 1) % modeOptions.length
			return modeOptions[nextIndex]
		}
	},

	mounted () {
		// modePicker 开启时默认使用用户主动设置的模式
		this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto'

		// Dark and Light autoswitches
		// 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
		var that = this
		window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
			that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
		})
		window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
			that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
		})

		applyMode(this.currentMode)
	},

	methods: {
		// switch to the next mode
		toggleMode() {
			const currentIndex = modeOptions.indexOf(this.currentMode);
			const nextIndex = (currentIndex + 1) % modeOptions.length;
			
			applyMode(modeOptions[nextIndex])
			localStorage.setItem('mode', modeOptions[nextIndex])

			this.currentMode = modeOptions[nextIndex]
		}
	}
}
</script>
