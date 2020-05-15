<template>
	<view class="index-content-title">
		<template v-for="(val,index) in imgArr">
			
			<view class="f" :key="val.id"></view>
			<view class="image" :key="val.id">
				<image :src="val.src" :style='style'></image>
				<view>{{val.name}}</view>
			</view>
			<view class="f" :key="val.id"></view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style: 'width:30px;height: 30px;',
				imgArr: [{
						id: 0,
						name: '附近工作',
						src: "../../static/images/index_content_title_0.gif"
					},
					{
						id: 1,
						name: '热门公司',
						src: "../../static/images/index_content_title_1.gif",
					},
					{
						id: 2,
						name: '职位分类',
						src: "../../static/images/index_content_title_2.gif"
					},
					{
						id: 3,
						name: '我要招人',
						src: "../../static/images/index_content_title_3.gif"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.index-content-title {
		display: flex;
		text-align: center;
		background-color: white;
		.image {
			margin: 20px 0;
		}

		.f {
			flex: 1;
		}
	}
</style>
