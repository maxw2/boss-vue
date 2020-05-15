<template>
	<view class="office">
		<scroll-view scroll-y='true'>
			<view class="office-scroll" v-if="recomData">
				<officeTitle :recomData='recomData'></officeTitle>
				<officeHr :recomData='recomData'></officeHr>
				<officeContent :recomData='recomData'></officeContent>
				<officeCompany :recomData='recomData'></officeCompany>
				<officeAddress :recomData='recomData'></officeAddress>
			</view>
		</scroll-view>
		<officeButton></officeButton>

	</view>
</template>

<script>
	import recom_company from '@/static/mock/recom_company.js'
	import officeTitle from './officeTitle.vue'
	import officeHr from './officeHr.vue'
	import officeContent from './officeContent.vue'
	import officeCompany from './officeCompany.vue'
	import officeAddress from './officeAddress.vue'
	import officeButton from './officeButton.vue'

	export default {
		components: {
			officeTitle,
			officeHr,
			officeContent,
			officeCompany,
			officeAddress,
			officeButton
		},
		data() {
			return {
				recomData: null
			}
		},
		onLoad(options) {
			this._request(options.id, 0)
		},
		methods: {
			_request: function(id, time) {
				let recom = recom_company.res
				console.log(id)
				// setTimeout(() => {
					this.recomData = recom.filter(val => {
						return val.companyId === Number(id)
					})[0]
					console.log(this.recomData)
				// }, time)
			}
		}
	}
</script>

<style lang="scss">
	.office {
		position: relative;
		.office-scroll{
			margin-bottom: 70px;
		}
	}
</style>
