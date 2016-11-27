var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/webapp/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: [
    './webapp/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname + 'webapp',
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/public'
  },
  plugins: [HTMLWebpackPluginConfig]
}
