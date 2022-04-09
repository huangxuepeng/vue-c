<template>
  <div>
      <van-cell-group v-for="item in DynamicList" :key="item.ID" class="textAll">
          <van-cell>
                <div class="title-box">
                    <van-image
                    width="1rem"
                    fit="cover"
                    src= "data:image/jpeg;base64,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"
                    @click="showUserDetile(item.UserRegisterID)"
                    ></van-image>
                </div>
          </van-cell>
        <van-cell border arrow-direction="right" is-link @click="articleDetail">
            <span>{{item.ID}}</span>
        </van-cell>
      </van-cell-group>
      <div class="publish">
          <van-button icon="plus" type="primary" round to="/home/square/publishDy"></van-button>
      </div>
  </div>
</template>

<script>
import { GetDynamic } from '../../server/api';
export default {
    data() {
        return {
            DynamicList: [],
        };
    },

    mounted () {
        this.Dynamics();
    },
    methods: {
        async Dynamics() {
            const res = await GetDynamic();
            this.DynamicList = res.data;
            // console.log(res);
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
.textAll {
    border-style: solid;
    border-width: 1px;
}
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
.publish {
    position: relative;
    bottom: -400px;
    left: 300px;
}
</style>