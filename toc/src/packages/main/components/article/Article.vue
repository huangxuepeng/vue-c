<template>
    <div>
        <van-cell-group>
            <van-cell title="头像" is-link center>
                <template #default>
                    <van-image round class="avatar" src="../../../../assest/images/backImg01.jpg" @click="imageClickFn">
                        <input
                            type="file"
                            ref="iptFile"
                            v-show="false"
                            accept="image/*"
                            @change="onFileChange"
                        />
                    </van-image>
                </template>
            </van-cell>
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
        onFileChange(e) {
            console.log(e.target.files);
        },
        imageClickFn() {
            this.$refs.iptFile.click();
        },
    },
};
</script>

<style lang="less" scoped>
.goods-card{
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>