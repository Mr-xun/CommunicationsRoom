const path = require("path");
const webpack = require("webpack");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set("views", resolve("src/views"));
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
            // new CompressionWebpackPlugin({
            //     filename: "[path].gz[query]",
            //     algorithm: "gzip",
            //     test: /\.js$|\.html$|\.json$|\.css/,
            //     threshold: 0, // 只有大小大于该值的资源会被处理
            //     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
            //     deleteOriginalAssets: true // 删除原文件
            // })
        ]
    }
};
