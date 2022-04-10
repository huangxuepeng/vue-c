<template>
  <div>
      <!-- 动态展示 -->
    <van-cell center v-for="item in DynamicList" :key="item.ID">
      <!-- 第一种插槽方式 -->
        <template #title>
          <van-image
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            @click="showUserDetile(item.UserRegisterID)"
          ></van-image>
          <span class="custom-title" @click="articleDetail(item.ID)">{{ item.Comment }}</span>
        </template>
      <!-- 默认 -->
      <div>
          <sapn>{{ (item.CreatedAt).substring(0,10) + ' '+ (item.CreatedAt).substring(11, 19)}}</sapn>
      </div>
      <div slot="label" @click="articleDetail(item.ID)" class="van-ellipsis">{{ item.Comment }}</div>
      <!-- 少用 -->
      <!-- <div slot="extra">额外内容</div> -->
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
                path: '/home/dydetail',
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
</style>