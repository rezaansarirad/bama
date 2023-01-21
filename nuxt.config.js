export default {
 
  head: {
    title: 'car-calculate',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    "~/assets/css/global.css",
    "~/assets/css/fonts.css",

  ],


  plugins: [
    { src: "~/plugins/utils.js" },
  ],


  components: true,


  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  build: {
  }
}
