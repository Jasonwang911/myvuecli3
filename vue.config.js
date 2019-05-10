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
  devServer: {
    host: 'localhost',
    port: '7902',
    open: true
  }
}
