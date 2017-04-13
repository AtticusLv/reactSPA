//webpack.config.js
var webpack = require('webpack')
var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
// Define folders' path
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'src')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
  devtool:"source-map",
  //入口
  entry: APP_PATH,
  //定义打包输出文件
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/'
  },
  //加载器模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          'babel-loader?presets[]=es2015&presets[]=react',
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'css-loader'
      }
    ]
  },

  //定义能够被打包的文件
  //resolve：

  //插件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React SPA'
    })
  ]
}
