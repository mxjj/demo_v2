export default {
    data() {
        return {
            login: 1
        }
    },
    methods: {
        // 获取 token
        onLogin() {
            return new Promise((resolve) => {
                this.$api.login().then(res => {
                        console.log(res)
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err)
                        resolve(err)
                    })
            })
        },
    }
}