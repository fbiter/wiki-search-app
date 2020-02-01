const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    open: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html'
    })
  ]
}
