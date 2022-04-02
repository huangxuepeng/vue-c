<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="flower-o" to="/home/square">广场</van-tabbar-item>
        <van-tabbar-item icon="like-o"   to="/home/opposite">缘分</van-tabbar-item>
        <van-tabbar-item icon="add-o"   to="/home/article">发布动态</van-tabbar-item>
        <van-tabbar-item icon="chat-o"   to="/home/message">消息</van-tabbar-item>
        <van-tabbar-item icon="user-o"   to="/home/myself">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import { mixin } from '@/mixins/instructions.js';
export default {
    mixins: [mixin],
    data() {
        return {
            active: 0,
        };
    },
    medthods: {

    },
};
</script>

<style>

</style>