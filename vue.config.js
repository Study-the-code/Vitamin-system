module.exports = {
    devServer: {
        open: true,
        proxy: { // 配置跨域
            '/api': {
　　　　　　　　　　//要访问的跨域的api的域名
                target: 'https://betapartnerapi.weitaming.com',
                changOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}
