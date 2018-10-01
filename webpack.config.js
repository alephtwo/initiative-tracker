const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

const typescript = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader'
}

const bootstrap = {
  test: /\.(scss)$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' }
  ]
}

const html = new HtmlWebpackPlugin({
  template: 'src/index.html'
});

module.exports = {
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [typescript, bootstrap]
  },
  plugins: [html]
}
