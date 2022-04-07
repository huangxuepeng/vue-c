<template>
  <div>
      <van-cell-group v-for="item in Articless" :key="item.ID">
          <van-cell>
                <div class="title-box">
                    <van-image
                    width="1rem"
                    fit="cover"
                    src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    @click="showUserDetile(item.UserRegisterID)"
                    ><span>作者</span></van-image>
                        <span class="title">题目</span>
                        <span>评论</span>
                        <span>时间</span>
                </div>
          </van-cell>
        <van-cell border arrow-direction="right" is-link @click="articleDetail">
            <span>内容</span>
        </van-cell>
      </van-cell-group>
  </div>
</template>

<script>
import { Articles } from '../../server/api';
export default {
    data() {
        return {
            Articless: [],
        };
    },

    mounted () {
        this.Article();
    },
    methods: {
        async Article() {
            const res = await Articles();
            this.Articless = res.data;
            console.log(res);
        },
        showUserDetile(id) {
            this.$router.push ({
                path: '/home/detail',
                query:{id:id},
            });
        },
        articleDetail() {
            this.$router.push('/home/dydetail');
        },
    },
};
</script>

<style lang="less" scoped>
/deep/.van-image__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
}
.title {
    width: 100px;
}
</style>