<template>
    <div>
    <!-- <van-notice-bar scrollable :text="notices" /> -->
    <!-- <transition name="van-slide-right"> -->
        <router-view></router-view>
    <!-- </transition> -->
        <!-- <AppTabbar /> -->
    </div>
</template>
<script>
// import { Test } from '../server/api.js';
import AppTabbar from './AppTabbar.vue';
export default {
    components:{
        // AppTabbar,
    },
    data() {
        return {
            notices: '电脑中冲锋的声音',
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