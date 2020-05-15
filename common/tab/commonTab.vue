<template>
	<view class="common-tab">
		<view class="common-tab-title">
			<view v-for="(title,index) in titles" 
				class="tab-title-list"
				:key="index"
				:style="[num == index ? actionStyle : '']"
				:class="[num == index ? 'tab-action' : '']" 
				:data-num="index" @click="tabSwitch">
				<text>{{title}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			current: Number,
			titles: Array,
			actionStyle:Object
		},
		data() {
			return {
				num: this.current,
				slotEl:null,
				newSlotEl: null,
				slotChild: null
			}
		},
		mounted() {
			this.createMounted()
		},
		methods: {
			createMounted() {
				// #ifdef MP-WEIXIN
				const query = wx.createSelectorQuery()
				this.slotEl = query.selectAll(".office-company .content")[0] 
				console.log(this.slotEl)
				// #endif
				// #ifdef H5
				this.slotEl = this.$slots.default[0].elm
				this.slotChild = this.slotEl.children
				// #endif
				// 添加content class style
				this.slotEl.classList.add('common-tab-content')
				Array.prototype.forEach.call(this.slotChild, (el, index) => {
					// class
					el.classList.add('common-tab-content-list')
					// style
					if(this.num != index) {
						el.style.display = 'none'
					}else{
						this.newSlotEl = el
					}
					
				})
				
			},
			tabSwitch(ev) {
				let num = ev.currentTarget.dataset.num
				
				// content
				let targetSlotEl = this.slotChild[num]
				if(this.newSlotEl === targetSlotEl) return 
				targetSlotEl.style.display = ''
				this.newSlotEl.style.display = 'none'
				this.newSlotEl = targetSlotEl
				
				this.num = num
				
			}
		}
	}
</script>

<style lang="scss">
	.common-tab {
		.common-tab-title {
			position: sticky;
			top: 44px;
			/* #ifdef MP-WEIXIN*/
			top: 0px;
			/* #endif */
			display: flex;
			box-sizing: border-box;
			border-bottom: 2px solid rgba(124,124,124,0.5);
			z-index: 90;
			background: white;
			.tab-title-list{
				padding: 15px 0px;
				margin-right: 20px;
				box-sizing: border-box;
			}
		}

		.common-tab-content {
			width: 100%;
			height: 100%;
			
		}


	}
</style>
