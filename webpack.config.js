const path = require('path');
const webpack = require('webpack')

const loaders = {
  rules: [
    {
      test: /.ts$/,
      use: 'ts-loader'
    }
  ]
}

const serverConfig = {
  mode: 'production',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: {
    index: './src/lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    filename: '[name].js'
  },
  module: loaders
};

module.exports = [serverConfig];