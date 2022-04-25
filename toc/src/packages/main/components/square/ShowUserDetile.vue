<template>
    <div>
		<van-nav-bar
		:title="nickname"
		left-text="返回"
		left-arrow
		@click-left="onClickLeft"
		/>
        <!-- 骨架屏 -->
        <van-skeleton title avatar :row="3" :loading="loading">
            <div class="header">
                <van-image
                fit="fill"
                width="1.8rem"
                height="1.8rem"
                round
                :src="user.Avatar"
                ></van-image>
                <van-button type="default" hairline plain class="btn" @click="concern" round>关注</van-button>
            </div>
            <van-divider />
            <div>
                <van-row type="flex" justify="space-around">
                    <van-col span="6">
                        <van-button type="success">动态</van-button>
                    </van-col>
                    <van-col span="6">
                        <van-button type="success">文章</van-button>
                    </van-col>
                </van-row>
            </div>
        </van-skeleton>
    </div>
</template>
<script>
import { UserDetail } from '../../server/api';
import { mixin } from '@/mixins/instructions.js';
export default {
    mixins: [mixin],
    data() {
        return {
            nickname: '',
            Articless: [],
            loading: false,
            user: {},
        };
    },

    mounted () {
        this.loading = true;
        this.showUserdetail();
    },
    methods: {
        async showUserdetail() {
            var id = this.$route.query.id;
            try {
                const res = await UserDetail(id);
                if (res.code === 200) {
					console.log(res);
					this.loading = false;
                    this.user = res.data.data;
					this.nickname = res.data.data.NickName;
                    console.log(res.data.data);
				} 
		    } catch (err) {
				 Notify({ type: 'danger', message: '加载失败' });
		    }
        },
		    onClickLeft() {
            this.$router.go(-1);
        },
        // 关注用户
        concern() {
            console.log('关注');
        }
    },
};
</script>
<style lang="less" scoped>
.header {
    height: 2rem;
}
.btn {
    display: flex;
    margin-top: -1.5rem;
    height: 0.56rem;
    margin-left: 5.8rem;
    color: orange;
    border-color: orange;
}
</style>
