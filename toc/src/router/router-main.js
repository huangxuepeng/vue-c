import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
const _routes = [];
const context = require.context('../packages/', true, /router.js/);
context.keys().forEach((filename) => {
    // 将获取的route配置展开压入数组里面
    _routes.push(...context(filename).default);
});

// axios请求拦截
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    console.log(window.sessionStorage.getItem('token'));
    return config;
});
Vue.use(VueRouter, {});
export default new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        ..._routes
    ]
});
