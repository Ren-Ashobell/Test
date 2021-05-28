module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        port: 8888,     // 端口
        hotOnly:true,
        disableHostCheck:true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:10001',    /* http://47.98.154.112:8081服务器，http://127.0.0.1:10001本地*/
                // ws: true,
                // port:8083
                changeOrigin: true
            }
        }
    },
    lintOnSave: false   // 取消 eslint 验证
};
