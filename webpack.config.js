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
  mode: 'development',
  target: 'node',
  resolve: {
    extensions: ['.ts']
  },
  entry: {
    DocumentGenerator: './src/lib/DocumentGenerator.ts',
    StringUtils: './src/lib/StringUtils.ts',
    index: './src/lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    filename: '[name].js'
  },
  module: loaders
};

const clientConfig = (mode) => ({
  mode,
  target: 'node',
  entry: './src/lib/',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/web'),
    filename: mode === 'production' ? 'lib.min.js' : 'lib.js'
  },
  module: loaders
});

module.exports = [serverConfig, clientConfig('development'), clientConfig('production')];