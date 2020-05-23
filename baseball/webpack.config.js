const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode:'development',
    devtool:'eval', // 개발할땐 'eval'(build 속도가 빨라진다), 배포할 땐 'hidden-source-map'
    resolve:{
        extensions:['.js','.vue']
    },
    entry:{
        app:path.join(__dirname,'main.js')
    },
    devServer: {
        overlay: true,
        stats: "errors-only",    
        proxy: {
          // /api URL 경로는 아래 proxy 서버를 이용한다.
          '/api/' : {
            target: 'https://kapi.kakao.com',
            pathRewrite: {'^/api' : ''},
            changeOrigin : true
          }
        },    
        hot: true,
    },
    module:{
        rules:[{
            test:/\.vue$/,
            use:'vue-loader',
        }]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            TRANSLATE_KEY: JSON.stringify("66bf2fa17300ae3641da9b59e8d265ae"),
        }),
    ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname, 'dist'),
    },
}