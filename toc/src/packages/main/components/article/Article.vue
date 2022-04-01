<template>
    <div>
        <van-nav-bar title="文章" />
        <van-swipe-cell> 
        <van-card
          v-for="(item,index) in articleList"
            :key="index"
            :desc="item.Info"
            :title="item.Title"
            class="goods-card"
        />
        </van-swipe-cell>
        <!-- <van-button type="success" @click="test">成功按钮</van-button> -->
    </div>
</template>

<script>
import { Articles } from '../../server/api';
export default {
    data() {
        return {
            articleList: [],
        };
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        async getArticleList() {
            const res = await Articles();
            this.articleList = res.data;
            console.log(this.articleList);  
        }
    },

};
</script>

<style lang="less" scoped>
.goods-card{
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>