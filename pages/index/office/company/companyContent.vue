<template>
	<view class="company-content">
		<swiper class="company-content-swiper" :indicator-dots="true" style="border-radius: 5px;overflow: hidden;">
			<swiper-item v-for="(val,index) in data.companyBanner" :key="index">
				<image :src="val" style="width: 100%;height:190px;"></image>
			</swiper-item>
		</swiper>
		<view class="company-content-content">
			<view class="title">
				<text>公司简介</text>
			</view>
			<view class="content" :style="{'height':contentCheck ? '180px' : ''}">
				<rich-text :nodes="data.companyContent"></rich-text>
				<view class="check-all" @click="switchCheck" :style="{'display':contentCheck ? '' : 'none'}">查看全部</view>
			</view>
		</view>
		<view class="company-content-boss">
			<view class="title"><text>高管介绍</text></view>
			<view class="image">
				<view class="left">
					<image style="width: 50px;height: 50px;border-radius: 50%;" :src="data.companyBoss.image"></image>
				</view>
				<view class="right">
					<view class="right-title">{{data.companyBoss.name}}</view>
					<view>董事长</view>
				</view>
			</view>
			<view class="content">
				<text>{{data.companyBoss.content}}</text>
				<view class="check-all" @click="open">查看全部</view>
			</view>
			<uniPopup ref="popup" type="center" >
				<view class="popup">
					<view class="title">
						<view class="left">
							<text>{{data.companyBoss.name}}</text>
							<view style="font-size: 14px;color: #7c7c7c;margin-top: 5px;">董事长</view>
						</view>
						<image :src="data.companyBoss.image" style="width: 50px;height: 50px;border-radius: 50%;" ></image>
					</view>
					<view class="popup-content">
						<text>{{data.companyBoss.content}}</text>
					</view>
				</view>
			</uniPopup>
		</view>
		<view class="company-content-address">
			<view class="title"><text>公司地址</text></view>
			<view class="address">
				<text>{{data.companyAddress}}</text>
				<uniIcon class='icon' type='arrowright' size='10'></uniIcon>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uniIcon,
			uniPopup
		},
		props: {
			data: Object
		},
		data() {
			return {
				contentCheck: true,
			}
		},
		methods: {
			switchCheck() {
				this.contentCheck = !this.contentCheck
			},
			open(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss">
	.company-content {
		margin-top: 20px;

		.company-content-swiper {}

		.company-content-content {
			margin-top: 20px;
			padding-bottom: 20px;
			border-bottom: 1px solid #f6f6f6;

			.title {
				color: #000;
				font-size: 16px;
				margin-bottom: 15px;
			}

			.content {
				position: relative;
				overflow: hidden;

				// text-overflow: ellipsis;
				// white-space: nowrap;
				// display: -webkit-box;
				// -webkit-box-orient:vertical;
				// -webkit-line-clamp:5;
				.check-all {
					position: absolute;
					right: 0px;
					bottom: 0px;
					color: #36b5b5;
					background: white;
				}

				.check-all:before {
					content: '...';
					color: #484848;
					margin-right: 10px;
				}
			}
		
		}

		.company-content-boss {
			margin-top: 20px;
			border-bottom: 1px solid #f6f6f6;
			padding-bottom: 20px;

			.title {
				color: #000;
				font-size: 16px;
				margin-bottom: 20px;
			}

			.image {
				display: flex;

				.left {
					width: 50px;
					height: 50px;
					margin-right: 15px;
				}

				.right {
					font-size: 12px;

					.right-title {
						font-size: 15px;
						color: #000;
					}
				}
			}

			.content {
				position: relative;
				text-overflow: ellipsis;
				overflow: hidden;
				height: 40px;

				.check-all {
					width: 51%;
					position: absolute;
					right: 0px;
					bottom: 0px;
					color: #36b5b5;
					background: white;
				}

				.check-all:before {
					content: '...';
					color: #484848;
					margin-right: 10px;
				}

			}

			.popup{
				width: calc(100% - 40px);
				// height: 300px;
				border-radius: 5px;
				background: white;
				margin: 0 20px;
				.title{
					display: flex;
					justify-content: space-between;
					padding:20px;
					border-bottom: 1px solid #f6f6f6;
				}
				.popup-content{
					padding: 0 20px 20px 20px;
					color: black;
				}
				
				
			}


		}

		.company-content-address {
			margin-top: 20px;
			border-bottom: 1px solid #f6f6f6;
			padding-bottom: 20px;

			.title {
				color: #000;
				font-size: 16px;
				margin-bottom: 20px;
			}

			.address {
				color: #000;
				font-size: 14px;
				margin-bottom: 20px;
				display: flex;
				justify-content: space-between;
			}

		}


	}
</style>
