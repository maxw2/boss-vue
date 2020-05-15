<template>
	<view class="user">
		<view class="user-title">
			<view class="left">
				<view class="title">未登录/注册</view>
				<view>点击头像可登录/注册</view>
			</view>
			<view class="right">
				<image src="@/static/images/user/user_1.gif" style="width: 68px;height: 68px;border-radius: 50%;"></image>
			</view>
		</view>
		<view class="user-content">
			<view class="user-content-list" v-for="(obj,index) in listArr">
				<uniIcons :type="obj.type"></uniIcons>
				<text class="name">{{obj.name}}</text>
				<uniIcons type='arrowright'></uniIcons>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
	components:{
		uniIcons
	},
	data(){
		return {
			listArr:[{
				type:'chat',
				name:'在线简历'
			},{
				type:'email',
				name:'简历附件'
			},{
				type:'person',
				name:'我的面试'
			},{
				type:'star',
				name:'我的收藏'
			},{
				type:'eye',
				name:'隐私设置'
			},{
				type:'home',
				name:'我要招聘'
			},{
				type:'info',
				name:'意见反馈'
			}]
		}
	}
}


</script>

<style lang="scss">
	.user{
		.user-title{
			
			display: flex;
			justify-content: space-between;
			padding: 10px 20px;
			background: #37c2bb;
			.left{
				color: #FFFFFF;
				font-size: 12px;
				.title{
					margin-bottom: 5px;
					font-size: 25px;
				}
			}
		}
		
		.user-content{
			padding:0 20px;
			.user-content-list{
				display: flex;
				justify-content: space-between;
				padding: 20px 0;
				font-size: 14px;
				border-bottom: 1px solid #f6f6f6;
				.name{
					margin-left: 10px;
					flex: 1;
				}
			}
		}
		
		
	}
	
	
</style>
