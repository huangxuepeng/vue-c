<template>
    <div>
        <van-nav-bar
        title="填写资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <p class="baseMessage">基本信息</p>
        <div class="box">
            <van-swipe-cell>
                <van-cell :border="false" title="昵称" required :value="userDetail.NickName" is-link/>
                <van-cell :border="false" title="性别" :value="list[userDetail.Sex]" />
                <van-cell :border="false" title="生日" required value="内容" is-link/>
                <van-cell :border="false" title="身高" required value="178" is-link/>
                <van-cell :border="false" title="所在地" value="内容" />               
                <van-cell :border="false" title="学历" value="填写学历" />
            </van-swipe-cell>
        </div>
    </div>
</template>
<script>
import { UserDetail } from '../../server/api';
export default {
    data() {
        return {
            userDetail:{},
            list: [
                ['女'],
                ['男']
            ]
        };
    },
    mounted(){
        this.getUserDetail();
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        async getUserDetail() {
            let id = this.$route.query.id;
            const res = await UserDetail(id);
            // console.log(res.data.data);
            this.userDetail = res.data.data;
        }
    },
}
</script>
<style lang="less" scoped>
.baseMessage {
    font-size: 0.3rem;
}
.box {
    background-color: white;
    border-radius: 0.1rem;
}
</style>