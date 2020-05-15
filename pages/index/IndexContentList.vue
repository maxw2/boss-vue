<template>
	<view class="index-content-list">
		<view class="index-content-list-title">
			<view><text>推荐职位</text></view>
			<view>
				<uniIcon type='plusempty' size='20'></uniIcon>
			</view>
		</view>
		<view class="index-content-list-list">
			<view class="content-list" v-for="val in arrList" :key="val.companyId">
				<navigator :url="'/pages/index/office/office?id=' + val.companyId" animation-type="pop-in" hover-class="none">
					<view class="list-office">
						<text class="office">{{val.office}}</text>
						<text class="wage" v-if="val.wage[0] > 1000">{{`${val.wage[0] / 1000}k - ${val.wage[1]/1000}k`}}</text>
						<text class="wage" v-else>{{`${val.wage[0]} - ${val.wage[1]}`}}</text>
					</view>
					<view class="list-company">
						<text class="companyName">{{val.companyName}}</text>
						<view>
							<text class="companyPeopNum" v-if="!val.companyPeopNum.length">{{`${val.companyPeopNum}人以上`}}</text>
							<text class="companyPeopNum" v-else>{{`${val.companyPeopNum[0]} - ${val.companyPeopNum[1]}人`}}</text>
						</view>
						<view>
							<text class="financing" v-if="val.financing === true">以融资</text>
							<text class="financing" v-else>不需要融资</text>
						</view>
					</view>
					<view class="list-tag">
						<view class="tag" v-for="(tag,index) in val.tag" :key="index">{{tag}}</view>
					</view>
					<view class="list-hr">
						<view class="left">
							<image class="hrImage" :src="val.hrImage"></image>
							<text class="hrName">{{val.hrName}}</text>
							<text class="hrOffice">{{val.hrOffice}}</text>
						</view>
						<view class="right">
							<text class="companyAddress">{{val.companyAddress}}</text>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'
	import recom_company from '@/static/mock/recom_company.js'

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				arrList: []
			}
		},
		created() {
			this._request(100)
		},
		methods: {
			_request: function(time) {
				const data = recom_company
				setTimeout(() => {
					this.arrList = data.res
				}, time)
			}
		}
	}
</script>

<style lang="scss">
	.index-content-list {


		.index-content-list-title {

			display: flex;
			justify-content: space-between;
			font-size: 20px;
			font-weight: bold;
			border-bottom: 1px solid #f6f6f6;
			padding: 20px 20px;
			background: #FFFFFF;
		}

		.index-content-list-list {
			.content-list {
				padding: 20px 20px;
				margin-bottom: 6px;
				background: #FFFFFF;

				// 1
				.list-office {
					display: flex;
					justify-content: space-between;

					.office {
						font-weight: bold;
						font-size: 16px;
					}

					.wage {
						color: #37c2bb;
					}
				}

				// 2
				.list-company {
					display: flex;
					font-size: 12px;
					color: #7c7c7c;
					margin-top: 4px;

					.companyName,
					.companyPeopNum,
					.financing {
						// font-weight: bold;
						margin-right: 12px;
					}
				}

				// 3
				.list-tag {
					display: flex;
					margin-top: 10px;

					.tag {
						margin-right: 6px;
						padding: 0px 6px;
						font-weight: bold;
						font-size: 12px;
						color: #7c7c7c;
						background: #f5f5f5;
					}
				}

				// 4
				.list-hr {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 12px;
					text-align: center;
					padding: 15px 0;
					box-sizing: border-box;

					.left {
						.hrImage {
							width: 24px;
							height: 24px;
							font-weight: bold;
							font-size: 12px;
							vertical-align: top;
							margin-right: 8px;

						}

						.hrName {
							margin-right: 8px;
						}

						.hrOffice {
							margin-right: 8px;
						}

					}

					.right {
						height: 24px;

						.companyAddress {}
					}






				}

			}
		}

	}
</style>
