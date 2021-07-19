<template>
  <div class="content">
    <div class="item flex flex-col flex-ai-center flex-jc-space-between">
      <div class="title border"></div>
      <div class="center border"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-width: 1323px;
  .item {
    height: 100vh;
    width: 100%;
    .title {
      height: 50px;
      width: 180px;
      margin-top: 100px;
    }
    .center {
      height: 100px;
      width: 500px;
      margin-top: auto;
      margin-bottom: 50px;
      position: relative;
      animation: flooranimation 6s ease infinite alternate;
      @keyframes flooranimation {
        from {
          left: 0px;
        }
        50% {
          left: 200px;
        }
        to {
          left: 0px;
        }
      }
    }
  }
}
</style>
