<template>
	<div>
		home123123s
	</div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {}
	},
	mounted() {
		this.$api.login().then(res => {
			console.log(res)
		})
	},
}
</script>
<style lang="scss" scoped></style>
