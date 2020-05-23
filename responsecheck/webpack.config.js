const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
module.exports = {
    mode:'development',
    devtool:'eval', // 개발할땐 'eval'(build 속도가 빨라진다), 배포할 땐 'hidden-source-map'
    resolve:{
        extensions:['.js','.vue']
    },
    entry:{
        app:path.join(__dirname,'main.js')
    },
    module:{
        rules:[
            {
               test:/\.vue$/,
                use:'vue-loader',
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname, 'dist'),
        publicPath:'/dist'
    },
}