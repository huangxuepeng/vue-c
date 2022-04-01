<template>
  <div>
        <van-nav-bar 
        left-icon="volume-o"
        title="广场" 
        />
        <van-notice-bar scrollable :text="notice" />
  </div>
</template>

<script>
import { Notices } from '../../server/api';
export default {
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

<style>

</style>