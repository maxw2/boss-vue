<template>
	<view class="index-title">
		<image style='width: 118px;height: 87px;position: absolute;bottom: 76px;right: 20px;' src="../../static/images/index_title.gif" />
		<text class="index-title-text">{{title}}</text>
		<view class="index-title-input">
			<div class='icon'>
				<uniIcon class='i' type="search" size='16' color='#a0a0a0'></uniIcon>
			</div>
			<div class='text'>
				<text>搜索职位、公司</text>
			</div>
		</view>
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
				title: '想找什么工作'
			}
		},

	}
</script>

<style lang="scss">
	.index-title {
		position: relative;
		overflow: hidden;
		padding:45px 20px 0 20px; 
		box-sizing: border-box;
		background: #37c2bb;
		.index-title-image {
			position: absolute;
			left: 0px;
			top: 0px;
			width: 118px;
			height: 87px;

			img {
				width: 100%;
			}
		}

		.index-title-text {
			font-size: 24px;
			color: white;
		}

		.index-title-input {
			display: flex;
			width: 100%;
			height: 44px;
			background: white;
			font-size: 15px;
			color: #a0a0a0;
			margin-top: 22px;
			margin-bottom: 32px;
			border-radius: 5px;

			.icon {
				position: relative;
				width: 50px;

				// height: 50px;
				.i {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}

			.text {
				line-height: 44px;
			}
		}
	}
</style>
