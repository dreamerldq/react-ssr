
const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports={
    target: 'node', // 为了不把nodejs内置的模块打包到输出文件
    entry:'./src/index.js',
    mode: 'development',
    
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals:[nodeExternals()], // 为了不把第三方库打包到输出文件
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