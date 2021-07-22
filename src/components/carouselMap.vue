<template>
  <div class="carouselMap b">
    <ul class="flex" ref="carouselMap">
      <template v-for="(item,index) in 5">
        <li
          :key="index"
          @mousedown="onMousedown"
          @mouseup="onMouseup($event,index)"
        >{{index+1}} {{boxHeight}}-{{boxWidth}}</li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxHeight: 0,
      boxWidth: 0,
      onMousedownNum: 0,
      onMouseupNum: 0
    };
  },
  methods: {
    onMousedown(e) {
      this.onMousedownNum = e.offsetX;
    },
    onMouseup(e, index) {
      this.onMouseupNum = e.offsetX;
      this.boxMoveDirection(e, index);
    },

    boxMoveDirection(e, index) {
      // 往左
      // 第一张
      let totalCoordinate = this.boxWidth / 4;
      if (this.onMousedownNum > this.onMouseupNum) {
        let totalIndex = index + 1;
        //大于5的时候
        if (totalIndex >= 5) {
          return;
        }
        let leftCoordinate = this.onMousedownNum - this.onMouseupNum;
        if (leftCoordinate > totalCoordinate) {
          let leftTotalCoordinate = this.boxWidth * totalIndex;
          this.$refs.carouselMap.style.left = "-" + leftTotalCoordinate + "px";
        }
      } else {
        // 往右
        if (!index) {
          return;
        }
        //计算往左偏移的量
        let totalRight = this.boxWidth * index;
        let rightTotalCoordinate = totalRight - this.boxWidth;
        if (rightTotalCoordinate) {
          this.$refs.carouselMap.style.left = "-" + rightTotalCoordinate + "px";
        } else {
          this.$refs.carouselMap.style.left = "0px";
        }
      }
    }
  },
  mounted() {
    // 获取当前盒子的坐标
    this.$nextTick(() => {
      //   this.$refs.carouselMap
      this.boxHeight = this.$refs.carouselMap.offsetHeight;
      this.boxWidth = this.$refs.carouselMap.offsetWidth;
    });
  }
};
</script>
<style lang="scss" scoped>
.carouselMap {
  overflow: hidden;
  ul {
    height: 200px;
    width: 500px;
    position: relative;
    left: 0;
    li {
      flex-shrink: 0;
      background: skyblue;
      height: 200px;
      width: 500px;
      &.red1 {
        background: red;
      }
      &.red2 {
        background: yellow;
      }
      &.red3 {
        background: rosybrown;
      }
      &.red1 {
        background: brown;
      }
    }
  }
}
</style>
