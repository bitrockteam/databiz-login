
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const pkg = require('./package.json');
const { isProd, envs, env } = require('./scripts/envs.js');

console.log(process.env.CLIENT_ID)

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd ? envs.production : envs.development,
  devtool: isProd ? 'source-map' : undefined,

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/logo.png',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        favicons: true,
        firefox: true,
      }
    }),

    new HtmlWebpackPlugin({
      title: pkg.name,
      description: pkg.description,
      color: pkg.themeColor,
      template: './src/assets/index.html'
    }),

    isProd ? 
      new webpack.DefinePlugin({
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      }) :
      new Dotenv()
     
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'sass-loader']
      }
    ]
  },

  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   watchContentBase: true,
  //   watchOptions: {
  //     poll: true
  //   },
  //   compress: true,
  //   port: 4000,
  //   host: 'localhost',
  //   hot: true,
  //   inline: true
  // }
}