<template>
	<view class="company-recom">
		<view class="company-recom-list" v-for="(val,index) in [0,0,0,0,0]" :key="index">
			<view class="list-title">
				<text class="office">{{data.office}}</text>
				<text class="wage" v-if="data.wage[0] > 1000">{{`${data.wage[0] / 1000}k - ${data.wage[1]/1000}k`}}</text>
				<text class="wage" v-else>{{`${data.wage[0]} - ${data.wage[1]}`}}</text>
			</view>
			<view class="list-content">
				<text>上海</text><em class='vline'></em><text>不限经验</text><em class='vline'></em><text>{{data.degree}}</text>
			</view>
			<view class="list-hr">
				<image class="hr-image" :src="data.hrImage"></image>
				<text>{{data.hrName}}</text>
				<text>{{data.hrOffice}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: Object
		},
		created() {
			
		}
	}
</script>

<style lang="scss">
	.company-recom {
		.company-recom-list {
			padding-top: 20px ;
			border-bottom: 1px solid #f2f2f2;
			.list-title {
				margin-bottom: 10px;
				display: flex;
				justify-content: space-between;

				.office {
					color: #000000;
					font-size: 18px;
					font-weight: bold;
				}

				.wage {
					color: #37c2bb;
					font-size: 16px;
					font-weight: bold;
				}
			}

			.list-content {
				margin-bottom: 10px;

				.vline {
					display: inline-block;
					width: 1px;
					height: 12px;
					vertical-align: middle;
					background: #e0e0e0;
					margin: 0 10px;
				}
			}

			.list-hr {
				font-size: 12px;
				padding-bottom: 20px;
				.hr-image {
					width: 20px;
					height: 20px;
					vertical-align: sub;
					margin-right: 5px;
				}
			}

		}



	}
</style>
