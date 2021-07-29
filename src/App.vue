<template>
  <div id="app">
    <!-- <HappyBirthday></HappyBirthday> -->
    <!-- <demoPractice></demoPractice> -->
    <!-- <component :is="'demoPractice'"></component> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HappyBirthday from "./components/HappyBirthday";
// import demoPractice from "./components/demoPractice";
export default {
  name: "App",
  components: {
    // HappyBirthday,
    // demoPractice,
  },
};
</script>

<style lang="scss" scoped>
// @import './style/globalColor.scss'
</style>
