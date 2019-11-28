const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? { router: { base: '/square-image/' } }
    : {}

export default {
  ...routerBase,

  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Square Image | 画像をセキュアに正方形へ'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://7110.github.io/square-image/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Square Image | 画像をセキュアに正方形へ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '通信せずにブラウザ上で画像を加工するからセキュリティ面でも安心・安全！'
      },
      { hid: 'og:image', property: 'og:image', content: '/images/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'image', href: '/images/logo.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/reset.scss'],
  /*
   ** Global style resources
   */
  styleResources: {
    scss: ['@/assets/scss/variables.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
