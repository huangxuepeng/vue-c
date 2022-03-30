<template>
    <div>
        <!-- 历史记录 -->
        <div class="his-hot">
            <div class="hd">
                <h4>历史记录</h4>
                <van-icon name="delete-o" />
            </div>
            <div class="bd">
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
            </div>
        </div>
        <!-- 热门搜索 -->
        <div class="his-hot">
            <div class="hd">
                <h4>热门搜索</h4>
            </div>
            <div class="bd">
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
.his-hot {
    background-color: #fff;
    padding: .1rem;
    margin-bottom: .2rem;
    .hd{
        display: flex;
        justify-content: space-between;
        font-size: .38rem;
        h4{ font-size: .20rem; }
        margin-bottom: .05rem;
    }
    .van-tag {
        margin-right: .05rem;
        padding: .3rem;
    }
}
</style>
