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
        href: "https://fonts.googleapis.com/css?family=Work+Sans:400,800"
      }
    ],
    script: [
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        defer: "defer"
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
  plugins: [
    "~/plugins/bootstrap-vue",
    "~/plugins/vue-showdown",
    "~/plugins/vue-masonry-css"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ["nuxt-sass-resources-loader", "@/assets/styles/_custom.scss"],
    "~/modules/my-netlify-cms-module",
    "nuxt-imagemin",
    "@nuxtjs/pwa"
  ],

  /*
  ** Generate dynamic routes
  */
  generate: {
    routes: ["/eventos/fiestas-de-san-cayetano"]
  },

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
