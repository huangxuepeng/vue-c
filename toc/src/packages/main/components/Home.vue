<template>
    <div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="flower-o" to="/home/square">广场</van-tabbar-item>
        <van-tabbar-item icon="like-o"   to="/home/opposite">缘分</van-tabbar-item>
        <van-tabbar-item icon="add-o"   to="/home/article">发布动态</van-tabbar-item>
        <van-tabbar-item icon="chat-o"   to="/home/message">消息</van-tabbar-item>
        <van-tabbar-item icon="user-o"   to="/home/myself">我的</van-tabbar-item>
    </van-tabbar>
        <router-view />
    </div>
</template>

<script>
// import { Test } from '../server/api.js';
// import AppTabbar from './AppTabbar.vue';
export default {
    components:{
        // AppTabbar,
    },
    data() {
        return {
            active: 0,
            // notices: '电脑中冲锋的声音',
        };
    },
    methods: {
    },
};
</script>

<style lang="less" scoped>
.notice-swipe {
    height: 40px;
    line-height: 40px;
}
</style>