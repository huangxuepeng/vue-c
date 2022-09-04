<template>
    <div>
        <van-nav-bar title="登录" />
        <van-form>
            <van-cell-group inset>
                <van-field
                v-model="user.mobile"
                required
                name="mobile"
                label="手机号码"
                placeholder="手机号码"
                :rules="[{ required: true, message: '请填写手机号码' }]"
                />
                <van-field
                v-model="user.password"
                required
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button 
                round 
                block 
                type="primary" 
                @click="onSubmit" 
                :loading="isLoading" 
                :disabled="isLoading"
                >
                登录
                </van-button>
            </div>
            </van-form>
    </div>
</template>

<script>
import { Login } from '../../server/api';
import { Notify } from 'vant';
import { setCookie } from '@/utils/cookie.js';
export default {
    data() {
        return {
            user: {
                mobile: '',
                password: '',
            },
            isLoading : false,
        };
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        ShowArticle(id) {
            this.$router.push ({
                path: '/home/showArticle',
                query:{id:id},
            });
        },
        async onSubmit() {
            this.isLoading = true;
            try{
                const res = await Login({'mobile':this.user.mobile,'password':this.user.password});
                if (res.code === 200) {
                    Notify({ type: 'success', message: '登录成功' });
                    setCookie(res.data.id);
                    this.$router.push("/home/square");
                }
            } catch(err) {
                Notify({ type: 'danger', message: '登录失败' });
            }
            this.isLoading = false;
        }
    },
};
</script>


<style lang="less" scoped>
 .van-nav-bar {
     background-color: burlywood;   
}
 /deep/.van-nav-bar__title{
    color:white;
}   
</style>