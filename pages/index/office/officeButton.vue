<template>
	<view class="office-button">
		<view>
			<uniIcon class='icon' type='upload' size='18'></uniIcon>
			<view class="text">分享</view>
		</view>
		<view @click="addStar">
			<uniIcon class='icon' v-if="!star" type='star' size='18'></uniIcon>
			<uniIcon class='icon-star' v-else type='star-filled' size='18' color="#ffd948"></uniIcon>
			<view class="text">收藏</view>
		</view>
		
		<view class="button">立刻沟通</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'


	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				star: false
			}
		},
		methods:{
			addStar:function (){
				this.star = !this.star
			}
		}
	}
</script>

<style lang="scss">
	.office-button {
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-between;
		// margin: 0 20px;
		padding: 10px 20px;
		box-sizing: border-box;
		text-align: center;
		border-top: 1px solid #f6f6f6;
		.text{
			font-size: 12px;
		}
		.button {
			width: 240px;
			height: 44px;
			border-radius: 5px;
			background: #37c2bc;
			// text-align: center;
			line-height: 44px;
			font-size: 15px;
			color: #FFFFFF;
		}
	}
</style>
