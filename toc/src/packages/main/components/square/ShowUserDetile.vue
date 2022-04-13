<template>
    <div>
		<van-nav-bar
		:title="nickname"
		left-text="返回"
		left-arrow
		@click-left="onClickLeft"
		/>
        <van-skeleton title avatar :row="3" :loading="loading">
            <van-image
            fit="fill"
            width="1.5rem"
            height="1.5rem"
            round
            :src="user.Avatar"
            ></van-image>
            <van-button type="default" hairline plain class="btn">关注</van-button>
        </van-skeleton>
    </div>
</template>
<script>
import { UserDetail } from '../../server/api';
export default {
    data() {
        return {
            nickname: '',
            Articless: [],
            loading: false,
            user: {
            }
        };
    },

    mounted () {
        this.loading = true;
        this.showUserdetail();
    },
    methods: {
        async showUserdetail() {
            var id = this.$route.query.id;
            // console.log(id);    // 测试ID传递
            try {
                const res = await UserDetail(id);
                if (res.code === 200) {
					console.log(res);
					this.loading = false;
                    this.user = res.data.data;
					this.nickname = res.data.data.NickName;
                    // console.log(res.data.data);
				} 
		    } catch (err) {
				 Notify({ type: 'danger', message: '加载失败' });
		    }
        },
		    onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style lang="less" scoped>
.van-button {
    display: flex;
    margin-left: 6rem;
    margin-top: -1.4rem;
}
</style>
