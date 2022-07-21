const { defineConfig } = require("@vue/cli-service");
const { name } = require('./package.json')

module.exports = defineConfig({
  lintOnSave: false, // 关闭eslint检测
  transpileDependencies: true,
  devServer: {
    port: 8081,
    headers: {
      // 因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 资源打包路径
      library: `${name}-[name]`,
      libraryTarget: 'umd'
    }
  }
});
