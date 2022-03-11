// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/Publish-dynamics/index.vue';

export default [
    {
        name: 'Publish-dynamics',
        path: '/user/publishdynamics', 
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'用户发布动态'
            }
        },
        redirect: '/user/publishdynamics/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/user/publishdynamics/testA',
                component: testA
            }
        ]
    }
];
