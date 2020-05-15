<template>
	<view class="office-title">
		<view class="office-title-top">
			<text class="office">{{recomData.office}}</text>
			<text class="wage" v-if="recomData.wage[0] > 1000">{{`${recomData.wage[0] / 1000}k-${recomData.wage[1]/1000}k`}}</text>
			<text class="wage" v-else>{{`${recomData.wage[0]}-${recomData.wage[1]}`}}</text>
		</view>
		<view class="office-title-bottom">
			<view class="companyAddress">
				<uniIcon class='i' type="location" size='14' color='#000'></uniIcon>
				<text>{{recomData.companyAddress}}</text>
			</view>
			<view class="year">
				<uniIcon class='i' type="map" size='14' color='#000'></uniIcon>
				<text v-if="recomData.year">{{recomData.year}}</text>
				<text v-else>{{'经验不限'}}</text>
			</view>
			<view class="degree">
				<uniIcon class='i' type="person" size='14' color='#000'></uniIcon>
				<text>{{recomData.degree}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'

	export default {
		components: {
			uniIcon
		},
		props:{
			recomData:Object
		},
		
	}
</script>

<style lang="scss">
	.office-title {
		padding: 50px 0px 20px 0px;
		margin: 0 20px;
		border-bottom: 1px solid #f6f6f6;

		.office-title-top {
			display: flex;
			justify-content: space-between;
			margin-bottom: 14px;

			.office {
				padding: 0px;
				font-size: 20px;
				font-weight: bold;
			}

			.wage {
				font-size: 16px;
				color: #37c2bb;
				line-height: 24px;
				font-weight: bold;
			}
		}

		.office-title-bottom {
			display: flex;
			font-size: 14px;
			// font-weight: bold;

			.companyAddress,
			.year,
			.degree {
				margin-right: 18px;

				.i {
					margin-right: 4px;
				}
			}
		}
	}
</style>
