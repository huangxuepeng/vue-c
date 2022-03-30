<template>
    <div class="main-container">
        <router-view></router-view>
        <AppTabbar />
    </div>
</template>
<script>
import AppTabbar from '../src/packages/main/components/AppTabbar.vue';
export default {

    name: 'App',
    components: {},
    created() {
        this.test();
    },
    methods: {
        test() {
            console.log('./App.vue');
        }
    },
     components: {
        AppTabbar,
    },
};
</script>
<style scoped>
.main-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>