<template>
	<div class="admin_header flex flex-ai-center flex-jc-space-between">
		<p>假面舞客</p>
		<div class="jabbar_header_right flex flex-ai-center flex-jc-center">
			<el-popover placement="top-end" width="200" trigger="click">
				<ul class="jabbar_nav-color">
					<div class="jabbar_nav-color_item flex">
						<span>顶部：</span>
						<el-color-picker v-model="jabbar_nav_header_color" @active-change="headerColorChange"></el-color-picker>
					</div>
					<div class="jabbar_nav-color_item flex">
						<span>侧边栏：</span>
						<el-color-picker v-model="jabbar_nav_header_color" @active-change="headerColorChange"></el-color-picker>
					</div>
					<div class="jabbar_nav-color_item flex">
						<span>主体部分：</span>
						<el-color-picker v-model="jabbar_nav_header_color" @active-change="headerColorChange"></el-color-picker>
					</div>
				</ul>
				<i slot="reference" class="el-icon-s-tools"></i>
			</el-popover>
			<el-image class="jabbar_header_right_Img" fit="cover" :src="header_Image"></el-image>
		</div>
	</div>
</template>
<script>
import { mapMutations } from 'vuex'
import skulist from '@/utils/sku.js'
export default {
	data() {
		return {
			header_Image: require('@/assets/admin/jabbar/jabbar_2.jpeg'),
			jabbar_nav_header_color: '', //头部自定义颜色
		}
	},
	mounted() {
		this.skuChange()
	},
	methods: {
		...mapMutations(['SET_Herder_THEMR_COLOR']),
		headerColorChange(value) {
			this.SET_Herder_THEMR_COLOR(value)
		},

		skuChange() {
			console.log(skulist)
			let newSkulist = []
			skulist.map(item => {
				if (item.Attributes && item.Attributes.length) {
					item.Attributes.map(child => {
						if (child) {
							child.skulist = []
							let isHas = false
							if (newSkulist.length) {
								isHas = newSkulist.some(sku => {
									return sku.AttributesID == child.AttributesID
								})
							}
							if (!isHas) {
								newSkulist.push(child)
							}
						}
					})
				}
			})
		},
	},
}
</script>
<style lang="scss" scoped>
.admin_header {
	width: 100%;
	background: var(--jabbar_nav_header_color);
	padding: 10px 20px;
	.jabbar_header_right {
		.el-icon-s-tools {
			margin-right: 20px;
			font-size: 18px;
			cursor: pointer;
			color: #ffffff;
		}
		.jabbar_header_right_Img {
			height: 36px;
			width: 36px;
			border-radius: 50%;
			overflow: hidden;
		}
	}
}
.jabbar_nav-color {
	.jabbar_nav-color_item {
		margin-bottom: 18px;
		span {
			display: block;
			width: 70px;
			text-align: left;
		}
		.el-color-picker {
			height: 30px;
			width: 30px;
		}
	}
}
</style>
