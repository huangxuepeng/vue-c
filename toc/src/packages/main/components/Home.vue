<template>
    <div>
        <div class="desc">
            <van-search
            v-model="search"
            shape="round"
            show-action
            placeholder="请输入搜索关键词"
            disabled
            v-debounce="$router.push('/home/searchpop').catch(err=>{})"
            />
        </div>
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import { mixin } from '@/mixins/instructions.js';
export default {
    mixins: [mixin],
    data() {
        return {
            search: '',
        };
    },
    methods: {

    },
};
</script>
