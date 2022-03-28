// 导入这个页面的根组件
// import index from './components/index.vue';
// 导入不同的组件
import Home from './components/Home.vue';
import Searchpop from './components/Searchpop.vue'; 
export default [
    {
        name: 'main',
        path: '/home',
        component: Home,
        mata: {
            title: 'Example-out',
            content:{
                description:'完成所有的操作'
            }
        },
        // redirect: '/home/searchpop',
        children: [
            {
                path: 'searchpop',
                component: Searchpop
            }
        ]
    }
];
