// 代理
const _Proxy = {
    '/u/v1/': {
        target: 'http://localhost:8080/',
        secure: false, // false为http访问，true为https访问
        changeOrigin: true // 跨域访问设置，true代表跨域
        // pathRewrite: { '^/api': '/api' }
    }
};
module.exports = {
    _Proxy
};
