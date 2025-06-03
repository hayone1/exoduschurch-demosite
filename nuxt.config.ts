// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/main.css'],
  site: {
    // url: 'https://example.com',
    name: 'Exodus Church',
  },
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://exoduschurch.twic.pics',
      // Feel free to use our demo domain to try the following examples.
      // baseUrl: 'https://demo.twic.pics'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-viewport',
    'motion-v/nuxt',
    '@nuxtjs/seo',
    '@nuxthub/core'
  ]
})