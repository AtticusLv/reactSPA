# React SPA Practice
## 工程建设记录：
* 初始化，创建package.json，创建LICENSE
```
npm init
//use generate-license to generate MIT license
gen license:mit
```
* 安装React库
```
npm install --save-dev react react-dom react-router
```
* 安装webpack和webpack-dev-server
```
npm install --save-dev webpack webpack-dev-server
```
* 安装babel相关编辑JS，其中babel-preset-es2015处理ES6，babel-preset-react处理JSX
```
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
```
* 安装css样式，图片文件相关包
```
npm install css-loader style-loader --save
```
* 创建入口文件./src/index.js
```
mkdir src
cd src
touch index.js
```
* 配置webpack，创建webpack.config.js
```
//webpack.config.js
var webpack = require('webpack')
module.exports = {
  //入口
  entry: './src/index.js',
  //定义打包输出文件
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  //加载器模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'css-loader'
      }
    ]
  }

  //定义能够被打包的文件
  //resolve：

  //插件
  //plugins:
}
```
* 快速生成html插件
```
npm install html-webpack-plugin --save-dev
```
```
//插件 webpack.config.js
plugins: [
  new HtmlwebpackPlugin({
    title: 'React SPA'
  })
]
```
* 配置React, ES6 & Babel 6，创建.babelrc
```
// .babelrc
{
  "presets": [
    "es2015",
    "react"
  ]
}
```
* 使用ESlint进行代码检查```.eslintrc.json```
```
npm install --save-dev babel-eslint
// .eslintrc.json
{
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  }
}
```
