<template>
	<el-upload
		class="upload-demo"
		action="#"
		:auto-upload="false"
		:on-preview="handlePreview"
		:on-remove="handleRemove"
		:file-list="fileList"
		list-type="picture"
		:on-change="onChange"
	>
		<el-button size="small" type="primary">点击上传</el-button>
		<template #tip>
			<div class="el-upload__tip">
				只能上传 jpg/png 文件，且不超过 500kb
			</div>
		</template>
	</el-upload>
</template>

<script>
export default {
	name: 'upload',
	data() {
		return {
			fileList: [],
		}
	},
	methods: {
		onChange(file, fileList) {
			console.log(this.$qiniu, file, fileList)

			// const observable = this.$qiniu.upload(file, key, token, putExtra, config)
			// console.log(observable)
		},
		handleRemove(file, fileList) {
			console.log(file, fileList)
		},
		handlePreview(file) {
			console.log(file)
		},
	},
}
</script>
<style lang="scss" scoped></style>
