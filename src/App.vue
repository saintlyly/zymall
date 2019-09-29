<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home">
       <img slot="icon" src="@/assets/img/tabbar/home.svg" alt="">
      <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
       <img slot="icon" src="@/assets/img/tabbar/category.svg" alt="">
      <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
       <img slot="icon" src="@/assets/img/tabbar/cart.svg" alt="">
      <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
       <img slot="icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue"
import TabBarItem from "@/components/tabbar/TabBarItem.vue"

export default{
  name:'app',
  components:{
    TabBar,
    TabBarItem,
  }

}
</script>

<style lang="scss">

</style>
