// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@vuestic/nuxt", '@nuxt/image'],
  css: ['vuestic-ui/css','@mdi/font/css/materialdesignicons.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
})