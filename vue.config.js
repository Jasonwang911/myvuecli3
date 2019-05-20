var path = require('path')
var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem')

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#0076ff',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    },
    modules: false
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/index.scss')]
    }
  },
  configureWebpack: config => {
    config.entry = ['babel-polyfill', './src/main.js']
  },
  devServer: {
    host: 'localhost',
    port: '7902',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
