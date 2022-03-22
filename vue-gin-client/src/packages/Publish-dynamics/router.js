// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
// import testA from './views/Publish-dynamics/index.vue';
import Home from './components/Home.vue';
export default [
    {
        name: 'Publish-dynamics',
        path: '/index', 
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'用户发布动态'
            }
        },
        redirect: '/user/login',
        children: [
            {
                name: 'Example-insert',
                path: '/user/login',
                component: Home
            }
        ]
    }
];
