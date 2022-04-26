<template>
    <div>
        <van-nav-bar
        title="我的动态"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 展示所有的动态, 并且支持跳转到动态详情 -->
        <van-cell v-for="item in DynamicList" :key="item.ID">
            <van-image
                round
                width="1.5rem"
                height="1.5rem"
                fit="fill"
                :src="user.Avatar"
                @click="showUserDetail(item.UserRegisterID)"
            />
            <span class="nickname">{{ user.NickName }}</span>
            <span @click="articleDetail(item.ID)" class="comment">
                {{ item.Comment }}
            </span>
            <van-image
                width="2rem"
                height="2.3rem"
                :src="item.Cover"
            />
        <van-divider />
      </van-cell>
    </div>
</template>
<script>
import { UserDetail } from '../../server/api';
export default {
    data() {
        return {
            user:{},
            DynamicList: [],
        };
    },
    mounted(){
        this.getUserDynamic();
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        async getUserDynamic() {
            let id = this.$route.query.id;
            const res = await UserDetail(id);
            this.DynamicList = res.data.dynamic;
            this.user = res.data.data;
            console.log(res.data.data);
        },
        showUserDetail(id) {
            this.$router.push ({
                path: '/home/detail',
                query:{id:id},
            });
        },
        articleDetail(id) {
            this.$router.push ({
                path: '/dynamic/dydetail',
                query:{id:id},
            });
        },
    },
}
</script>
<style lang="less" scoped>
.nickname {
    display: flex;
    margin-top: -1.5rem;
    margin-left: 1.8rem;
    font-size: 20px;
}
.comment {
    display: flex;
    margin-top: 0.9rem;
    margin-left: 1.7rem;
}
.baseMessage {
    font-size: 0.3rem;
}
.box {
    background-color: white;
    border-radius: 0.1rem;
}

</style>