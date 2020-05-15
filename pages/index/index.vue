<template>
	<view class="container">
		<scroll-view class="index-scroll" scroll-y="true">
			<indexTitle></indexTitle>
			<indexContent></indexContent>
		</scroll-view>
	</view>
</template>

<script>
	import indexTitle from './IndexTitle.vue'
	import indexContent from './IndexContent.vue'
	export default {
		components: {
			indexTitle,
			indexContent,
		},
		data() {
			return {

			}
		},
		onLoad() {
			console.log('onLoad')
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		font-size: 14px;
		line-height: 24px;

		.index-scroll {
			height: 100%;
		}

		.nav {
			width: 100%;
			height: 20px;
			background: black;
		}
	}
</style>
