<template>
	<div>
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-container>
					<el-main>
						<!-- 渲染路径 -->
						<router-view />
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
}

.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

.el-container {
	min-height: calc(100vh - 70px);
}
</style>
