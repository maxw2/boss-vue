<template>
	<view class="office-company">
		<companyTitle :data="data"></companyTitle>
		<commonTab class='tab' :current="current" :titles="titles" :actionStyle='tabAction'>
			<view class="content">
				<companyContent :data="data"></companyContent>
				<companyRecom :data="data"></companyRecom>
			</view>
		</commonTab>
		
	</view>

</template>

<script>
	import recom_company from '@/static/mock/recom_company.js'
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import commonTab from '@/common/tab/commonTab.vue'
	import companyTitle from './companyTitle.vue'
	import companyContent from './companyContent.vue'
	import companyRecom from './companyRecom.vue'


	export default {
		components: {
			uniSegmentedControl,
			commonTab,
			companyTitle,
			companyContent,
			companyRecom
		},
		data() {
			return {
				id: null,
				data: recom_company.res[0],
				current: 0,
				titles:['公司信息', '热招职位'],
				tabAction: {
					fontWeight:'bold',
					color:'black',
					marginBottom:"-2px",
					borderBottom:'2px solid #37c2bb'},
			}

		},
		onLoad(op) {
			this.id = op.id
			console.log(this.data)
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss">
	.office-company {
		position: relative;
		padding: 0 20px;
		box-sizing: border-box;
		
		.tab {
			font-size: 15px;
			color: #7c7c7c;
			
		}

		
	}
</style>
