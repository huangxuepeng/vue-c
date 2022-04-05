<template>
  <div>
        <van-nav-bar title="缘分" />
        <van-swipe-cell v-for="item in oppositeLists" :key="item.ID">
        <van-card
          price="2.00"
          :desc="item.NickName"
          title="商品标题"
          class="goods-card"
          thumb="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </van-swipe-cell>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {
        this.OppositeList();
    },
    methods: {
    },

};
</script>

<style>

</style>