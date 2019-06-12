let path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "./",
    outputDir: 'dist',
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('views', resolve('src/views'))
    },
    
}