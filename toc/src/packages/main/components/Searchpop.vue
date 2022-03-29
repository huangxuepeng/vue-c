<template>
    <div class="search-popup">
         <van-search
            v-model="searchVal"
            show-action
            placeholder="placeholderVal"
            @search="onSearch"
            @cancel="onCancel"
        />
    </div>
</template>
<script>
import Toast from 'vant';
export default {
    data() {
        return {
            searchVal: '',
            placeholderVal: '',
        };
    },
    methods: {
        onSearch(val){
            Toast(val);
        },
        onCancel(val){
            // Toast('取消');
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="less" scoped>
.search-popup {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0,.5);
}
</style>