module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @/ is an alias to src/
        prependData: `@import "@/scss/main.scss";`,
      },
    },
  },
};
