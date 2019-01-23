const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: "es-ES"
    },
    title: "Lobo y Mono - Eventos Salvajemente Familiares",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Schoolbell|Work+Sans:300,400"
      }
    ],
    script: [
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: ["~/assets/styles/main.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~/plugins/vue-showdown"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ["nuxt-sass-resources-loader", "@/assets/styles/_custom.scss"],
    // Doc: https://bootstrap-vue.js.org/docs/
    ["bootstrap-vue/nuxt", { css: false }],
    "~/modules/cms-img-previews",
    "nuxt-imagemin",
    "@nuxtjs/pwa"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
