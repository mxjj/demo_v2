<template>
  <div id="app">
    <HappyBirthday></HappyBirthday>
    <!-- <demoPractice></demoPractice> -->
    <!-- <component :is="'demoPractice'"></component> -->
    <!-- 头部导航栏 -->
    <!-- <websiteHeader /> -->
    <!-- <router-view /> -->
    <!-- 尾部导航栏 -->
  </div>
</template>

<script>
import HappyBirthday from "./components/HappyBirthday";
// import demoPractice from "./components/demoPractice";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    HappyBirthday,
    // demoPractice,
  },
  computed: {
    ...mapState(["activeComponent"]),
  },
  watch: {
    $route: {
      handler(newRouter) {
        if (newRouter.name) {
          if (this.activeComponent != newRouter.name) {
            this.setActive(newRouter.name);
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions({ setActive: "ACTIVE_SET_HEADER" }),
  },
};
</script>

<style lang="scss" scoped>
// @import './style/globalColor.scss'
</style>
