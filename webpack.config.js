const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name][contenthash].js',
    clean: true
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: [ //redirects requests to host 3000
      // {
      //   context: ['', ''],
      //   target: 'http://localhost:3000'
      // },
    ],
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    // open: true,
    hot: true,
    // compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
}