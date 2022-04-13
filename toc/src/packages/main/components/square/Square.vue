<template>
  <div>
        <van-nav-bar 
        title="广场" 
        />
        <van-notice-bar scrollable left-icon="volume-o" :text="notice" class="notice" />
        <Dynamic></Dynamic>
  </div>
</template>

<script>
import { Notices } from '../../server/api';
import Dynamic from './Dynamic.vue';
export default {
    components: { Dynamic },
    data() {
        return {
            notice: '',
        };
    },
    mounted() {
        this.getNotices();
    },
    methods: {
        async getNotices() {
            const res = await Notices();
            this.notice = res.data.Content;
        }
    },

};
</script>

<style lang="less" scoped>
.notice {
    margin-bottom: 0.4rem;
    height: 0.5rem;
}
</style>