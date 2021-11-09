module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/scss/init.scss";
            `,
      },
    },
  },
};
