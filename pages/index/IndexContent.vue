<template>
	<view class="index-content">
		<IndexContentTitle></IndexContentTitle>
		<IndexContentList></IndexContentList>
	</view>
</template>

<script>
	import IndexContentTitle from './IndexContentTitle.vue'
	import IndexContentList from './IndexContentList.vue'
	
	export default {
		components: {
			IndexContentTitle,
			IndexContentList
		}
	}
</script>

<style lang="scss">
	.index-content{
		width: 100%;
		background: #f8f8f8;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	
	
</style>
