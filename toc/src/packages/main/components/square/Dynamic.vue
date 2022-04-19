<template>
  <div>
      <!-- 动态展示 -->
    <van-cell center v-for="item in DynamicList" :key="item.ID">
      <!-- 第一种插槽方式 -->
        <template #title>
          <van-image
            :src="item.Cover"
            @click="showUserDetile(item.UserRegisterID)"
            class="images"
          ></van-image>
          <van-button class="custom-title"  @click="articleDetail(item.ID)">{{ (item.Comment).substring(0,5)+ '...' }}</van-button>
        </template>
      <!-- 默认 -->
      <div class="time">
          <sapn>{{ (item.CreatedAt).substring(0,10) }}</sapn>
      </div>
      <div slot="label" class="van-ellipsis">这是啥</div>
    </van-cell>
    <!-- 发布按钮 -->
    <van-button icon="plus" type="primary" round to="/home/square/publishDy" class="publish"></van-button>
   </div>
</template>

<script>
import { _timeFormat } from '@/utils/timeFormat.js';
import { GetDynamic } from '../../server/api';
export default {
    data() {
        return {
            DynamicList: [],
            activeNames: '1',
        };
    },

    mounted () {
        this.Dynamics();
    },
    methods: {
        async Dynamics() {
            const res = await GetDynamic();
            this.DynamicList = res.data.data;
            console.log(res.data.data);
        },
        showUserDetile(id) {
            this.$router.push ({
                path: '/home/detail',
                query:{id:id},
            });
        },
        articleDetail(id) {
            this.$router.push ({
                path: '/dydetail',
                query:{id:id},
            });
        },
        getDateNow(type) {
            let timeStamp = type.getTime();
            return _timeFormat(timeStamp, 'YY-MM-DD hh:mm:ss');
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

.publish {
    position: fixed;
    bottom: 100px;
    left: 315px;
}

.time{
    display: flex;
    height: 20px;
    width: 4rem;
    padding-left: 90px;
    margin-left: -1.8rem;
}
.custom-title {
    width: 4rem;
    height: 1.5rem;
    display: flex;
    margin-top: -1rem;
    margin-left: 1.55rem;
}
.notice {
   padding-bottom: 1rem;
}
</style>