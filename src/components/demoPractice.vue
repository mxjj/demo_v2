<template>
  <div class="demo-practice flex flex-ai-center flex-col">
    <span>演示</span>
    <div class="buttom border" @click.stop="editColor('red')">点</div>
  </div>
</template>
<script>
import {mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["color"]),
  },
  methods: {
    // 异步改变颜色
    ...mapActions({
      editColor: "ASYNC_SET_THEMR_COLOR",
    }),
  },
};
</script>
<style lang="scss" scoped>
.demo-practice {
  width: 100%;
  span {
    margin: 100px auto;
    color: $baseColor;
    font-size: 20px;
    font-weight: bold;
  }
  .buttom {
    color: $baseColor;
    background-color: #ccc;
    padding: 5px;
  }
}
</style>
