<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
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
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.link) !== -1
     
      },
      activeStyle(){
          return this.isActive?{'color':'red'}:{}
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