<template>
  <div class="content">
    <div class="item flex flex-col flex-ai-center flex-jc-space-between">
      <!-- 标题 -->
      <div class="title">
        动效轮播图
      </div>
      <!-- 中间的图片轮播 -->
      <div class="center">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
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
      font-size: 28px;
      font-weight: bold;
      margin-top: 100px;
    }
    .center {
      width: 800px;
      .el-carousel__item {
        height: 200px;
        width: 500px;
      }
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
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
      background: #eefb01;
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
