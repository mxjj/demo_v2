<template>
	<div class="admin_header flex flex-ai-center flex-jc-space-between">
		<p>假面舞客</p>
		<div class="jabbar_header_right flex flex-ai-center flex-jc-center">
			<el-image class="jabbar_header_right_Img" fit="cover" :src="header_Image"></el-image>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			header_Image: require('@/assets/admin/jabbar/jabbar_2.jpeg'),
		}
	},
	methods: {},
}
</script>
<style lang="scss" scoped>
.admin_header {
	width: 100%;
	background: #b3c0d1;
	padding: 10px 20px;
	.jabbar_header_right {
		.jabbar_header_right_Img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			overflow: hidden;
		}
	}
}
</style>
