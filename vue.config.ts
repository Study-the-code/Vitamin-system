
module.exports = {
    // lintOnSave: false,
    // runtimeCompiler: true,
    // publicPath: '/', // 设置打包文件相对路径
    devServer: {
        proxy: {
            '/api': {
                target: 'https://betapartnerapi.weitaming.com',  // target host
                // secure: true, // false为http访问，true为https访问
                // ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            },
        }
    }
};
