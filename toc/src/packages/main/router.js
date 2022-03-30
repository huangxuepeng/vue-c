// 导入这个页面的根组件
// import index from './components/index.vue';
// 导入不同的组件
import Home from './components/Home.vue';
import Searchpop from './components/Searchpop.vue'; 
import Square from './components/square/Square.vue';
import Opposite from './components/opposite/opposite.vue';
import Article from './components/article/Article.vue';
import Message from './components/message/Message.vue';
import Myself from './components/myself/Myself.vue';
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
        redirect: '/home/square',
        children: [
            {
                path: 'searchpop',
                name: '搜索',
                component: Searchpop
            },
            {
                path: 'square',
                name: '广场',
                component: Square
            },
            {
                path: 'opposite',
                name: '异性',
                component: Opposite
            },
            {
                path: 'article',
                name: '文章',
                component: Article
            },
            {
                path: 'message',
                name: '信息',
                component: Message
            },
            {
                path: 'myself',
                name: '我的',
                component: Myself
            },
        ]
    }
];
