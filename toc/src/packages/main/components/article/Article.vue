<template>
    <div>

      <van-uploader 
        :after-read="afterRead"
        class="img-uploader"
        :max-count="1"    
        v-model="fileList"
      />
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
     </van-collapse>
    <van-cell is-link @click="test">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // fileValue: '',
            // iconBase64: '',
            // test: '',
            fileList: [],
            imgKey:[],
            activeName: '1',
            show: false,
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

        afterRead(file) {
        // 此时可以自行将文件上传至服务器
            let imgFile = new FormData();
            imgFile.append('fileType', 'IMAGE');
            imgFile.append('file', this.fileList[0].file);
            console.log(file.content.length);
        },
        test () {
            this.show = true;
        }
        // ImageToBase64() {
        //     let files = document.getElementById('upImageFile').files[0];
        //     var reader = new FileReader();
        //     reader.readAsDataURL(files);
        //     reader.onload = () => {
        //         console.log('file 转 base64结果：' + reader.result);
        //         console.log((reader.result).length);
        //         this.test = reader.result;
        //         this.iconBase64 = reader.result;
        //     };
        //     reader.onerror = function (error) {
        //         console.log('Error: ', error);
        //     };
        // }
     
    },
};
</script>

<style lang="less" scoped>

</style>