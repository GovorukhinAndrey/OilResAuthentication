module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        prependData: `@import "@/scss/main.scss";`,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },
};
