const path = require('path')
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const serverConfig = {
    target: 'node', // 为了不把nodejs内置的模块打包到输出文件
    entry:'./src/server/index.js',
    mode: 'development',
    
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    externals:[nodeExternals()], // 为了不把第三方库打包到输出文件\
}
module.exports=merge(config, serverConfig)