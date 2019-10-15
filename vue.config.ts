module.exports = {
    devServer: {
        open:true,
        proxy: {
            '/api': {
                target: 'https://betapartnerapi.weitaming.com',  // target host
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '/api': ''  // rewrite path
                }
            },
        }
    }
};
