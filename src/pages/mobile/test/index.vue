<template>
	<div>
	</div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {
			onToView() {
				// // 小程序打开小程序
				// wx.navigateToMiniProgram({
				//     // 需要打开的AppId
				//     appId: '',
				//     // 需要打开的跳转路径
				// 	path: '',
				// 	// 小程序打开版本是否是正式版
				// 	envVersion: 'release',
				// 	success() {
				// 		// console.log('打开成功', customizePath.applet)
				// 		console.log(res)
				// 		// 打开成功
				// 	},
				// 	fail(err) {
				// 		console.error('打开失败', err)
				// 		// 打开成功
				// 	},
				// })
			},
		}
	},
	mounted() {
		this.$App_wxInit()
		// this.$api.login().then(res => {
		// 	console.log(res)
		// })
	},
}
</script>
<style lang="scss" scoped></style>
