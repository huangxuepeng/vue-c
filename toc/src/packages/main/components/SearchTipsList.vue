<template>
    <div>
       <van-list
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>

    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[1,2,3,4,5,6,7],
            finished: true,
        };
    },
};
</script>

<style lang="less" scoped>
</style>