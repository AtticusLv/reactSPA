var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: __dirname + '/src/index.js' ,
  output: {
      path: __dirname + "/dist",
      filename: "js/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.css?$/,
      loaders: "style-loader!css-loader"
    },
  ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })]
}
