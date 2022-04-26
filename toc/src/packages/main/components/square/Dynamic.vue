<template>
  <div>
      <van-cell v-for="item in DynamicList" :key="item.ID">
		<van-image
			round
			width="1.5rem"
			height="1.5rem"
			fit="fill"
			:src="item.DynamicUserAvatar"
            @click="showUserDetail(item.DynamicUserID)"
		/>
        <span class="nickname">{{ item.DynamicUserNickname}}</span>
        <van-tag type="danger">{{ item.UserConstellation}}</van-tag>
        <span @click="articleDetail(item.DynamicID)" class="comment">
            {{ item.DynamicComment }}
        </span>
        <!-- <van-divider /> -->
      </van-cell>
        <van-divider />
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
        showUserDetail(id) {
            this.$router.push ({
                path: '/home/detail',
                query:{id:id},
            });
        },
        articleDetail(id) {
            this.$router.push ({
                path: '/dynamic/dydetail',
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
.publish {
    position: fixed;
    bottom: 100px;
    left: 315px;
}
.nickname {
    display: flex;
    margin-top: -1.5rem;
    margin-left: 1.8rem;
    font-size: 20px;
}
.comment {
    display: flex;
    margin-top: 0.5rem;
    margin-left: 1.7rem;
}
.van-tag.van-tag--danger {
    margin-left: 1.85rem;
}
</style>