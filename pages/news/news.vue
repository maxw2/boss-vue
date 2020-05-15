<template>
	<view class="news">
		<view class="news-tab">
			<text v-for="(val,index) in title" class="news-tab-list" :class="current === index ? 'active' : ''" :key="index"
			 :data-num="index" @click="onClickActive">{{val}}</text>
		</view>
		<view class="news-content">
			<text>登陆后查看消息</text>
			<view class="news-content-button">立即登录</view>
		</view>
	</view>

</template>

<script>
	import commonTab from '@/common/tab/commonTab.vue'

	export default {
		components: {
			commonTab
		},
		data() {
			return {
				title: ['消息', "看过我", '新职位', "对我感兴趣"],
				current: 0
			}
		},
		methods: {
			onClickActive(ev) {
				let num = Number(ev.currentTarget.dataset.num)
				console.log()
				this.current = num
			}
		}


	}
</script>

<style lang="scss">
	.news {
		position: relative;
		.news-tab {
			background: #37c2bc;
			padding: 0 20px;

			.news-tab-list {
				display: inline-block;
				padding: 20px 20px 20px 0px;
				font-size: 15px;
				color: #ddf1f0;
			}

			.active {
				font-size: 18px;
				font-weight: bold;
				color: white;
			}
		}

		.news-content {
			text-align: center;
			position: absolute;
			margin-top: 50%;
			margin-left: 50%;
			transform: translate(-50%,-50%);
			font-size: 15px;
			color: #000;
			.news-content-button{
				margin-top: 10px;
				width: 120px;
				height: 40px;
				line-height: 40px;
				border-radius: 4px;
				color: #FFFFFF;
				background: #37c2bc;
			}
		}






	}
</style>
