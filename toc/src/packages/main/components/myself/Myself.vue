<template>
  <div>
    <van-nav-bar title="我的" />
    <!-- 头像区 -->
    <div>
        <van-image
        round
        fit="fill"
        width="2rem"
        height="2rem"
        :src="user.userAvatar"
        class="imageself"
      />
        <span class="nick">{{ user.userNickName }}</span>
        <span class="unqireid">CCUID: {{ user.userStuNum }}</span>
    </div>
    <van-cell-group class="detail">
      <van-cell title="我的动态" is-link v-debounce="myDynamic"/>
      <van-cell title="基本资料" is-link v-debounce="myBase"/>
      <van-cell title="实名认证" is-link v-debounce="myRealName"/>
    </van-cell-group>
    <van-button type="warning" class="logout" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
import { 
    getCookie,
    removeCookie,
    setCookie,
} from '../../../../utils/cookie';
import { Notify } from 'vant';
import { UserDetail } from '../../server/api';
import { mixin } from '@/mixins/instructions.js';
export default {
  	mixins: [mixin],
    data() {
        return {
          user:{
            userAvatar: '',
            userNickName: '',
            userStuNum: '',
          },
        };
    },
    mounted() {
      this.getUserDetail();
    },
    methods: {
      // 退出登录
      logout() {
        setCookie('user_id', 1);
        // removeCookie('user_id');
        // window.sessionStorage.clear();
        // this.$router.push('/home');
        // Notify({ type: 'success', message:'退出成功' });
      },
      async getUserDetail() {
          let id = getCookie('user_id');
          try {
              const res = await UserDetail(id);
              this.user.userAvatar = res.data.data.Avatar;
              this.user.userNickName = res.data.data.NickName;
              this.user.userStuNum = res.data.data.StudentNumber;
              // console.log(res.data.data);
          } catch (err) {
            Notify({type:'danger', message: '加载失败'})
          }

      },
      // 我的所有动态
      myDynamic() {
        console.log('我的动态');
      },
      myBase() {
        console.log('我的基本资料');
      },
      myRealName() {
        console.log('实名认证');
      }
    }
};
</script>

<style>
.van-nav-bar__content {
  background-color: bisque;
}
.logout.van-button.van-button--warning.van-button--normal{
    border-radius: 0.4rem;
    width: 5rem;
    display: block;
    margin: 0 auto;

}
.detail {
  margin-top: 1rem;
}
/* 昵称 */
.nick {
    font-style: normal;
    font-size: 0.5rem;
    display: flex;
    margin-left: 2.5rem;
    margin-top: -2rem;
}
/* 唯一ID */
.unqireid {
    font-size: 0.3rem;
    display: flex;
    margin-left: 2.5rem;
    /* margin-top: -2.5rem; */
}
</style>