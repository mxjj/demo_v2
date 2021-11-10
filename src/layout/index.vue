<template>
	<div>
		<el-container>
			<el-aside width="200px">
				<SideScroll />
			</el-aside>
			<el-container>
				<el-header>
					<Header />
				</el-header>
				<!-- <el-main>
					<router-view />
				</el-main> -->
			</el-container>
		</el-container>
	</div>
</template>
<script>
import Header from './components/header'
import SideScroll from './components/SideScroll'
export default {
	components: {
		Header,
		SideScroll,
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
	padding: 0 !important;
}
.el-container {
	min-height: 100vh;
}
</style>
