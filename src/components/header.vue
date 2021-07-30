<template>
  <div>
    <ul class="flex">
      <p
        :class="{ active: activeComponent == item.rolues }"
        @click.stop="onView(item.rolues)"
        v-for="(item, index) in tageList"
        :key="index"
      >
        {{ item.name }}
      </p>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: [],
  computed: {
    ...mapState(["activeComponent"]),
  },
  data() {
    return {
      tageList: [
        {
          name: "首页",
          rolues: "home",
        },
        {
          name: "操作页面",
          rolues: "two",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setActive: 'ACTIVE_SET_HEADER',
    }),
    onView(type) {
      this.setActive(type);
      this.$router.push({
        name: type,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  padding: 20px;
}

.active {
  color: red;
}
</style>
