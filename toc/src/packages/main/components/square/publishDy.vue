<template>
    <div>
        <van-nav-bar
        title="写说说"
        left-text="取消"
        right-text="发表"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <!-- 发表言论 -->
        <van-cell-group inset>
        <van-field
            v-model="DyPost.comment"
            rows="5"
            autosize
            type="textarea"
            placeholder="分享新鲜事..."
            border
        />
        <!-- 发表图片 -->
        </van-cell-group>
        <div class="credential-infor">
            <van-uploader 
            :after-read="afterRead"
            v-model="fileList"  
            multiple  />
        </div>
    </div>
</template>

<script>
import { PublishDynamic } from '../../server/api';
import { getCookie, setCookie } from '../../../../utils/cookie';
import { Notify } from 'vant';
export default {
    data() {
        return{
            fileList: [],
            DyPost: {
                type: 'test',
                cover: '',
                comment:'',
                user_id: '',
            },  
            
        };
    },
    mounted() {
    },
    methods: {
        // 返回按钮
        onClickLeft() {
            this.$router.go(-1);
        },
        // 发表动态
        async onClickRight() {
            try {
                const res = await PublishDynamic(this.DyPost);
                if (res.code === 200) {
                    Notify({ type: 'success', message:'发表成功'});
                    this.$router.go(-1);
                }
            } catch (err) {
                Notify({ type: 'danger', message:'发表失败' });
            }
            
        },
        afterRead(file) {
            setCookie('1'); //应该放在登录的地方
            // console.log(getCookie('user_id'));
            // this.cover = file;
            // 此时可以自行将文件上传至服务器，这里就是要写调用后台上传图片的接口位置
            this.DyPost.cover = file.content;
            this.DyPost.user_id = getCookie('user_id');
        },
    }
};
</script>


<style lang="less" scoped>
.van-nav-bar {
    background-color: antiquewhite;
}
.van-cell{
    width: 10rem;
}
.file-uploader {
  .credential-infor {
    margin: px2em(20);
    height: px2em(100);
  }

}
</style>