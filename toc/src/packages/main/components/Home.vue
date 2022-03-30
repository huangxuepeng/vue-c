<template>
    <div>
        <div class="desc">
            <van-search
            shape="round"
            show-action
            placeholder="请输入搜索关键词" 
            @click="$router.push('/home/searchpop').catch(err=>{})"
            />
            <transition name="van-slide-right">
                <router-view></router-view>
            </transition>
        </div>
        <AppTabbar />
    </div>
</template>
<script>
// import { Test } from '../server/api.js';
import AppTabbar from './AppTabbar.vue';
import { mixin } from '@/mixins/instructions.js';
export default {
    mixins: [mixin],
    components:{
        AppTabbar,
    },
    data() {
        return {
        };
    },
    methods: {},
};
</script>

<style lang="less" scoped>
</style>