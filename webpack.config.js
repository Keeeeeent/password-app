const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
         app: './src/index.ts'
    },
    devServer: {
        
      },
    output: {
        path: path.resolve(__dirname, 'public'), // 出力されるディレクトリの指定
        filename: '[name].bundle.js' // 出力されるファイル名の指定
      },
      module: { // モジュールプロパティの中に
        rules: [ // ルールズを配列で指定
          {
            test: /\.ts$/, // 対象の拡張子を正規表現で指定。
            use: 'ts-loader'// typescriptを扱うためのローダー
          },
          {
            test:/\.pug$/,
            use:'pug-loader'//pugファイルを扱うためのローダー
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.pug",
            filename:"index.html",
            inject:false,
            minify:false
        })
    ]
  }