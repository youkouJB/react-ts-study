const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //モードをdevelopment、production、noneから設定（必須）
  //development: 開発時のファイル出力モード（最適化より時間短縮、エラー表示を優先）
  //production: 本番時のファイル出力モード（最適化されて出力）
  mode: 'development',
  //メインとなるjsファイル(エントリーポイント)
  entry: './src/index.tsx',
  //ファイルの出力設定
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  //デバッグのためのSourceMap
  devtool: 'inline-source-map',
  //対象のファイルを変換するためのloaderを設定
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  },
  //importの際に省略する対象の拡張子を配列で指定
  //指定されている拡張子のファイルはimportの際に拡張子を省略できる
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  //webpack-dev-serverの設定
  devServer: {
    static: path.join(__dirname, '/dist'),
    open: true,
    port: 8888,
  },
  //pluginの設定
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    })
  ]
}
