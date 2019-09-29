<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-img">
      <slot name="icon"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props:{
      link:{
          type:String,
          required:true,
      }
  },
  methods: {
    itemClick() {
        this.$router.replace(this.link)
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
}
</style>