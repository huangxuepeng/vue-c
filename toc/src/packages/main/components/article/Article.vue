<template>
    <div>
        <van-nav-bar title="文章" />
        <!-- 需要一个模糊查询根据文章标题查询 -->
        <van-swipe-cell  v-for="(item,index) in articleList" :key="index"> 
        <van-card
            :key="index"
            :desc="item.Info"
            :title="item.Title"
            class="goods-card"
            thumb="../../../../assest/images/backImg01.jpg"
            @click="ShowArticle(item.ID)"
        >
            <van-tag type="primary">标签</van-tag>
        </van-card>
        <template #right>
            <van-button square type="danger" text="删除" />
            <van-button square type="primary" text="收藏" />
          </template>
        </van-swipe-cell>
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
        },
        ShowArticle(id) {
            this.$router.push ({
                path: '/home/showArticle',
                query:{id:id},
            });
        },
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