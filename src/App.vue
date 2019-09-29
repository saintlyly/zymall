<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar.vue"

export default{
  name:'app',
  components:{
    TabBar
  }

}
</script>

<style lang="scss">

</style>
