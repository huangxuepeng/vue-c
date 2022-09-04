// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/用户注册/index.vue';

export default [
    {
        name: '用户注册',
        path: '/register',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'用户的注册'
            }
        },
        redirect: '/register/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/register/testA',
                component: testA
            }
        ]
    }
];
