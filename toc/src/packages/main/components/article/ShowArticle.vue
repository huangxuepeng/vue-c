<template>
    <div>
        <van-nav-bar title="标题" left-text="返回" left-arrow @click="test">
        <template #right>
            <van-icon name="search" size="18" />
        </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    mounted() {
        this.showArticle();
    },
    methods: {
        showArticle() {
            var id = this.$route.query.id;
            console.log(id);
        },
        test() {
            console.log('1');
            this.$router.go(-1);
        },
    },

};
</script>