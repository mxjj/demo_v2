<template>
  <div class="content">
    <div class="item flex flex-col flex-ai-center flex-jc-space-between">
      <!-- 标题 -->
      <div class="title">
        动效轮播图
      </div>
      <!-- 中间的图片轮播 -->
      <!-- <carouselMap></carouselMap> -->
      <div class="center">
        <el-carousel
          :interval="2000"
          type="card"
          height="200px"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in 6" :key="item">
            <el-image :src="happlyImage"></el-image>
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
// import carouselMap from "./carouselMap";
export default {
  // components: { carouselMap },

  data() {
    return {
      happlyImage: require("@/assets/images/happly_1.jpg"),
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  min-width: 1323px;
  .item {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index: -10;
    zoom: 1;
    // background: #000;
    background-image: url("~@/assets/images/happly_5.jpg");
    background-repeat: no-repeat;
    background-size: contain;

    .title {
      height: 50px;
      width: 180px;
      font-size: 28px;
      font-weight: bold;
      margin-top: 100px;
    }
    .center {
      width: 800px;
      img {
        height: 200px;
        width: 500px;
        border: 1px solid red;
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
