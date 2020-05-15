<template>
	<view class="office-hr">
		<image class="hrImage" :src="recomData.hrImage"></image>
		<view class="hrContent">
			<view class="name">
				<text class="hrName">{{recomData.hrName}}</text>
				<text class="hrName">本月活跃</text>
			</view>
			<text class="hrOffice">{{recomData.companyName +  " · " + recomData.hrOffice}}</text>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			recomData: Object
		}

	}
</script>

<style lang="scss">
	.office-hr {
		display: flex;
		padding: 20px 0px;
		margin: 0 20px;
		border-bottom: 1px solid #f6f6f6;
		.hrImage {
			width: 50px;
			height: 50px;
			margin-right: 15px;
		}

		.hrContent {
			.name {
				.hrName:nth-child(1) {
					font-size: 15px;
					font-weight: bold;
					margin-right: 5px;
				}

				.hrName:nth-child(2) {
					color: #a7a7a7;
					font-size: 12px;
				}

			}
			.hrOffice{
				font-size: 15px;
			}



		}
	}
</style>
