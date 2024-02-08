//
//  Simple Webpack config for an Web App
//
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const root = (...paths) => path.resolve(process.cwd(), ...paths)
const src = (...paths) => root('src', ...paths)

/** @type {import("webpack").Configuration} */
const webpackConfig = {
  mode: 'development',
  entry: {
    main: root('index.js')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    port: 4444,
    host: '0.0.0.0',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src('index.html'),
      title: 'poc test'
    })
  ]
}

module.exports = (_, argv) => {
  console.info(argv)

  return webpackConfig
}
