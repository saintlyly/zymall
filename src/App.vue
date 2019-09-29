<template>
  <div id="app">
    <foot-guide></foot-guide>
    <router-view />
  </div>
</template>

<script>
import footGuide from "@/components/footer/footGuide.vue";

export default {
  name: "app",
  components: {
    footGuide
  }
};
</script>

<style lang="scss">
</style>
