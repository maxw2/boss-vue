<template>
	<view class="office-company">
		<navigator :url="`/pages/index/office/company/company?id=${recomData.companyId}`" animation-type="pop-in" hover-class="none">
			<text class='title'>公司信息</text>
		<view class="content">
			<image class="company-image" :src="recomData.companyImage" alt='logo'></image>
			<view>
				<text class="name">{{recomData.companyName}}</text>
				<view class="financing">
					<text class="financing" v-if="recomData.financing === true">以融资 ·</text>
					<text class="financing" v-else>不需要融资 ·</text>
					<text class="companyPeopNum" v-if="!recomData.companyPeopNum.length">{{`${recomData.companyPeopNum}人以上`}}</text>
					<text class="companyPeopNum" v-else>{{`${recomData.companyPeopNum[0]} - ${recomData.companyPeopNum[1]}人`}}</text>
				</view>
			</view>
		</view>
			
		</navigator>
		
	</view>

</template>

<script>
	export default {
		props: {
			recomData: Object
		},
		mounted() {
			// console.log(this.data, 'data')
		}
	}
</script>

<style lang="scss">
	.office-company {
		padding: 20px 0;
		margin: 0 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #f6f6f6;
		.title{
			font-size: 18px;
			font-weight: bold;
		}
		
		.content{
			display: flex;
			margin-top: 15px;
			.company-image{
				width: 50px;
				height: 50px;
				margin-right: 15px;
			}
			.name{
				font-size: 15px;
				// font-weight: bold;
			}
			.financing{
				font-size: 13px;
				color: #7c7c7c;
				margin-top: 3px;
			}
			
		}
		
		
	}
	
	
	
</style>
