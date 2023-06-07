// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Little Invest App',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  components: true
})
