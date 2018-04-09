var path = require('path')
var webpack = require('webpack')
// const { VueLoaderPlugin } = require('vue-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.styl$/,
      //   use: [
      //     'stylus-loader',
      //     'vue-style-loader',
      //     'css-loader'
      //   ]
      // }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    historyApiFallback: {
      index: '/docs/'
    },
    hot: true,
    stats: {
      modules: false
    }
  },
  plugins: process.env.NODE_ENV === 'development' ? [
    // new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ] : [
    // new VueLoaderPlugin()
    // new ExtractTextPlugin({
    //   filename: 'common.[chunkhash].css'
    // })
  ]
}
