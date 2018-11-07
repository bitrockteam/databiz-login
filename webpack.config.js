require('typescript-require')({
  nodeLib: true,
  targetES5: false
});

const path = require('path');

const { isProd, envs } = require('./scripts/envs.ts');

module.exports = {
  entry: {
    component: './src/components/databiz.login.ts'
  },

  output: {
    path: path.join(__dirname, './'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },

  mode: isProd() ? envs.production : envs.development ,
  devtool: 'source-map',
}