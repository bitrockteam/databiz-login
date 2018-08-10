
const path = require('path');

const { isProd, envs } = require('./scripts/envs.js');

module.exports = {
  entry: {
    component: './src/components/databiz.login.js'
  },
  output: {
    path: path.join(__dirname, './'),
    filename: '[name].js',
  },

  mode: isProd ? envs.production : envs.development ,
  devtool: 'source-map',
}