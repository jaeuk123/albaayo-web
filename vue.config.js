module.exports = {
  lintOnSave: false
},
module.exports = {
    chainWebpack: config => {
      config.module
          .rule("vue")
          .use("vue-loader")
          .loader("vue-loader")
          .tap(options => {
              // modify the options...
              options = Object.assign(options, {
                  transformAssetUrls: {
                      "b-img": 'src'
                  }
              });
              return options;
          });
  },
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true
  }
}
