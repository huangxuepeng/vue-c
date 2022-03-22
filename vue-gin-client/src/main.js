// 创建Vue的根实例
import Vue from 'vue';
// 导入router
import router from '@/router/router-main.js';
import store from '@/store/index.js';
// 导入app组件
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入global全局样式
import '@/styles/global.less';
import 'animate.css';
Vue.use(ElementUI);
// 导入屏幕宽度处理js
import '@/utils/rem.js';
// 导入禁止缩放js
import '@/utils/disableZoom.js';
// 导入vant 组件库   按需导入
import '@/components/vant-components.js';
// 引入icon
import '@/assest/font/iconfont-symbol.js';

// 导入vconsole
import '@/utils/vconsole.js';
// 导入chii
import '@/utils/chii.js';
// 创建vue根实例
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
// 挂载App组件
