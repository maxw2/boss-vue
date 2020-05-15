<template>
	<view class="office-content">
		<view class="title">职位详情</view>
		<view class="content" :class="{'content-clear':clear}">
			<rich-text :nodes="recomData.content"></rich-text>
		</view>
		<view v-show="clear" class="button" @tap="switchContent">查看全部</view>
		<view class="tag">
			<view class="tag-text" v-for="(val,index) in recomData.officeTag" :key="index">{{val}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			recomData: Object
		},
		data() {
			return {
				clear: true
			}
		},
		methods: {
			switchContent: function(event) {
				this.clear = false
			}
		}
	}
</script>

<style lang="scss">
	.office-content {
		margin: 0 20px;
		padding: 20px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #f6f6f6;
		position: relative;
		.title {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 20px;
		}

		.content {
			font-size: 14px;
			line-height: 25px;
		}

		.content-clear {
			width: 100%;
			height: 205px;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.button {
			text-align: center;
			font-size: 14px;
			color: #37c2bb;
			width: 100%;
			padding-top: 30px;
			box-sizing: border-box;
			background: white;
			opacity: 0.8;
			transform: translateY(-30px);
			// position: absolute;
			// bottom: 0px;
		}

		.tag {
			display: flex;
			font-size: 13px;
			margin-top: 20px;
			.tag-text {
				padding: 5px;
				background: #f6f6f6;
				margin-right: 10px;
			}

		}


	}
</style>
