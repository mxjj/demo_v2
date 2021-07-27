<template>
  <div id="app">
    <!-- <HappyBirthday></HappyBirthday> -->
    <demoPractice></demoPractice>
  </div>
</template>

<script>
import HappyBirthday from "./components/HappyBirthday";
import demoPractice from "./components/demoPractice";
export default {
  name: "App",
  components: {
    HappyBirthday,
    demoPractice,
  },
};
</script>

<style lang="scss" scoped></style>
