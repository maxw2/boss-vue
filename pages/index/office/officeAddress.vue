<template>
	<view class="office-address">
		<navigator :url="`/pages/index/office/map/map?id=${recomData.companyId}&longitude=${recomData.marker[1]}&latitude=${recomData.marker[0]}`" animation-type="pop-in" hover-class="none">
			<text class="title">工作地址</text>
			<view class="content">
				<text>{{recomData.companyAddress}}</text>
				<uniIcon class='icon' type='arrowright' size='10'></uniIcon>
			</view>
		</navigator>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icons/uni-icons.vue'


	export default {
		components: {
			uniIcon
		},
		props: {
			recomData: Object
		},
		created() {
			console.log(this.recomData,'officeAdd')
		}
	}
</script>

<style lang="scss">
	.office-address {
		padding: 20px 0;
		margin: 0 20px;
		border-bottom: 1px solid #f6f6f6;

		.title {
			font-size: 18px;
			font-weight: bold;
		}

		.content {
			font-size: 15px;
			color: #7c7c7c;
			margin-top: 15px;

			.icon {
				float: right;
				line-height: 15px;
			}
		}
	}
</style>
