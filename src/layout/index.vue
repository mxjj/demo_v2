<template>
	<div>
		<el-container>
			<el-aside width="200px">侧边</el-aside>
			<el-container>
				<el-header>
					<Header />
				</el-header>
				<el-main>
					<!-- 渲染路径 -->
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
import Header from './components/header'
export default {
	components: {
		Header,
	},
	data() {
		return {}
	},
	methods: {},
	mounted() {},
}
</script>
<style lang="scss" scoped>
.el-header {
	padding: 0!important;
}
.el-container {
	min-height: 100vh;
}
</style>
