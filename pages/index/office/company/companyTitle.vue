<template>
	<view class="company-title">
		<view class="left">
			<view class="title">{{data.companyName}}</view>
			<view>
				<text v-if="data.financing">需要融资</text>
				<text v-else>不需要融资</text>
				<text v-if="!data.companyPeopNum.length">· {{data.companyPeopNum}}人以上 ·</text>
				<text class="companyPeopNum" v-else>{{`${data.companyPeopNum[0]} - ${data.companyPeopNum[1]}人`}}</text>
			</view>
		</view>
		<image class="right" :src="data.companyImage"></image>
	</view>


</template>

<script>
	export default {
		props:{
			data:Object
		}
	}
	
	
</script>

<style lang="scss">
	.company-title {
		display: flex;
		justify-content: space-between;
		margin: 15px 0px;
		
		.left {
			font-size: 13px;
			color: #7c7c7c;
			
			.title {
				font-size: 20px;
				color: black;
				font-weight: bold;
				margin-bottom:5px;
			}
		}
	
		.right {
			width: 60px;
			height: 48px;
		}
	}
	
	
</style>
