module.exports = {
  loading: false,
  head: {
    title: 'Мелодика',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i&amp;subset=cyrillic' },
    ],
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    '~/plugins/global',
    '~/plugins/axios',
    { src: '~/plugins/jarallax', ssr: false },
    { src: '~/plugins/flickity', ssr: false },
  ],
  modules: [
    '@nuxtjs/dotenv',
    ['bootstrap-vue/nuxt', { css: false }],
    ['vue-wait/nuxt', {
      useVuex: true,
      vuexModuleName: 'loader',
      registerComponent: false,
      registerDirective: false,
    }],
  ],
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      }
    },
  },
};
