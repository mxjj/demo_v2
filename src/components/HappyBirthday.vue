<template>
  <div class="content">
    <div class="item flex flex-col flex-ai-center flex-jc-space-between">
      <!-- 标题 -->
      <div class="title border"></div>
      <!-- 中间的图片轮播 -->
      <div class="center"></div>
      <!-- 底部 -->
      <div class="floor"></div>
      <!-- 呼吸灯 -->
      <div class="Breathinglamp"></div>
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
    background: #000;
    width: 100%;
    .title {
      height: 50px;
      width: 180px;
      margin-top: 100px;
    }
    .center {
    }

    .floor {
      height: 100px;
      width: 500px;
      margin-top: auto;
      margin-bottom: 50px;
      position: relative;
      // animation: flooranimation 6s ease infinite alternate;
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

    .Breathinglamp {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: #EEFB01;
      animation: lamp 2s ease infinite;
      @keyframes lamp {
        from {
          opacity: 0.2;
        }
        50% {
          opacity: 1;
        }
        to {
          opacity: 0.2;
        }
      }
    }
  }
}
</style>
