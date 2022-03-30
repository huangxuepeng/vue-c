<template>
    <div class="search-popup">
         <van-search
            v-model="searchVal"
            show-action
            placeholder="placeholderVal"
            @search="onSearch"
            @cancel="onCancel"
        />
        <HistoryHot 
            v-if="blockShow===1"
            :historyListData="historyListData"
        />
        <SearchTipsList v-else-if="blockShow===2"/>
    </div>
</template>
<script>
import Toast from 'vant';
import HistoryHot  from './HistoryHot.vue';
import SearchTipsList from './SearchTipsList.vue'; 
export default {
    data() {
        return {
            searchVal: '',
            placeholderVal: '',
            /*
            blockShow值是可以为1 2 3
            1 表示展示离是记录和热门搜索
            2 表示展示搜索提示的列表
            3 表示展示搜索的产品的内容
             */
            blockShow: 2,
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
    components: {
        HistoryHot,
        SearchTipsList,
    }
};
</script>

<style lang="less" scoped>
.search-popup {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #efefef;
}
</style>