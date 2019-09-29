<template>
  <div id="tab-bar">
    <div class="tab-bar-item">
      <div class="item-img">
        <img src="@/assets/img/tabbar/home.svg" alt />
      </div>
      <div class="item-text">home</div>
    </div>
    <div class="tab-bar-item">
      <div class="item-img">
        <img src="@/assets/img/tabbar/category.svg" alt />
      </div>
      <div class="item-text">category</div>
    </div>
    <div class="tab-bar-item">
      <div class="item-img">
        <img src="@/assets/img/tabbar/cart.svg" alt />
      </div>
      <div class="item-text">cart</div>
    </div>
    <div class="tab-bar-item">
      <div class="item-img">
        <img src="@/assets/img/tabbar/profile.svg" alt />
      </div>
      <div class="item-text">profile</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  justify-content: space-around;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  .tab-bar-item {
    height: 49px;
    text-align: center;
    img {
      width: 24px;
      height: 24px;
      margin-top: 5px;
      vertical-align: middle;
    }
    .item-text {
      font-size: 12px;
    }
  }
}
</style>