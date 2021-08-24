<template>
	<div></div>
</template>
<script>
export default {
	name: 'home',
	data() {
		return {}
	},
	methods: {
		changeArrIndex(arr, startIndex, endIndex) {
			arr[startIndex] = arr.splice(endIndex, 1, arr[startIndex])[0]
			return arr
		},
	},
	mounted() {
		this.$api.login().then(res => {
			console.log(res)
		})

		let arrs = [
			{
				name: '小明',
				age: '1',
			},
			{
				name: '小伞',
				age: '2',
			},
		]
		for (let index in arrs) {
			let item = arrs[index]
			if (item.age == 2) {
				arrs[0] = arrs.splice(index, 1, arrs[0])[0]
				break
			}
		}

		console.log(arrs, '============')
	},
}
</script>
<style lang="scss" scoped></style>
