var path = require('path');

module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/index.scss')
      ]
    }
  },
  devServer: {
    host: 'localhost',
    port: '7902',
    open: true
  }
}
