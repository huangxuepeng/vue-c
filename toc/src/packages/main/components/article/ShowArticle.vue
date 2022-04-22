<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
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