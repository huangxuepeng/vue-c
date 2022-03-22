// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/Home/index.vue';

export default [
    {
        name: 'Home',
        path: '/index',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'主页面'
            }
        },
        redirect: '/home/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/home/testA',
                component: testA
            }
        ]
    }
];
