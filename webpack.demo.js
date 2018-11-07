require('typescript-require')({
  nodeLib: true,
  targetES5: false
});

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const pkg = require('./package.json');
const { isProd, envs } = require('./scripts/envs.ts');

const config = {
  entry: {
    main: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd() ? envs.production : envs.development,
  devtool: isProd() ? 'source-map' : undefined,

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

    isProd() ? 
      new webpack.DefinePlugin({
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      }) :
      new Dotenv()
     
  ],

  resolve: {
    extensions: ['.ts', '.js']
  },

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
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}

module.exports = config;