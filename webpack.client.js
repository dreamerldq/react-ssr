
const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports={
    entry:'./src/client/index.js',
    mode: 'development',
    
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:['@babel/react',['@babel/env',{
                        targets:{
                            browsers:['last 2 versions'] // 兼容所有浏览器最后两个版本
                        }
                    }]]
                }
            }
        ]
    }
}