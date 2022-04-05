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
                    ><span>题目</span></van-image>
                        <span>作者</span>
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
        }
    },
};
</script>

<style>

</style>