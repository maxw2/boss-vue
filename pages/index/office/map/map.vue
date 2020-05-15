<template>
	<view class="office-map">
		<view v-if="marker">
			<map class="map" :latitude="31.23691" :longitude="121.50109" :markers="[marker]"></map>
		</view>

		<view v-else>asd</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				marker: {
					id: 101,
					longitude: 121.50109,
					latitude: 31.23691
				}
				// marker: {
				// 	id: null,
				// 	longitude: null,
				// 	latitude: null
				// }
			}
		},
		onLoad(option) {
			// this.getMarker(option)
			// console.log(this.marker, 'marker')
		},
		methods:{
			getMarker(op){
				let id = Number(op.id)
				let longitude = Number(op.longitude)
				let latitude = Number(op.latitude)
				
				this.marker = {
					id: id,
					longitude: longitude,
					latitude: latitude
				}
				
				
			}
		}


	}
</script>

<style lang="scss">
	.office-map {
		width: 100%;
		height: 100%;

		.map {
			width: 100%;
			height: calc(100% + 45px);
			position: absolute;
			top: -45px;
		}
	}
</style>
