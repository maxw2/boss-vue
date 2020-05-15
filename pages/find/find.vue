<template>
	<view class="find">
		<view class="find-card">
			<image class="find-card-image" src="@/static/images/find/find_1.gif"></image>
			<view class="find-card-content">
				<view class="title">
					<text>五维职业性格测评</text>
					<text class="title-button">查看详情</text>
				</view>
				<view class="content">
					<text>了解性格特点，分析职场优势</text>
				</view>
			</view>

		</view>

	</view>

</template>

<script>
</script>

<style lang="scss">
	.find {
		.find-card {
			margin: 20px 20px;
			box-shadow: 0px 10px 10px #f4f4f4;
			border-radius: 10px;
			.find-card-image {
				width: 100%;
				height: 332px;
			}

			.find-card-content {
				padding: 10px;
				.title {
					font-size: 15px;
					font-weight: bold;

					.title-button {
						float: right;
						padding: 6px;
						line-height: 12px;
						text-align: center;
						vertical-align: middle;
						font-size: 12px;
						font-weight: 300;
						color: #FFFFFF;
						background: #37c2bc;
						border-radius: 4px;
					}
				}

				.content {
					padding: 5px 0px;
					font-size: 12px;
					color: #727272;
				}
			}




		}
	}
</style>
