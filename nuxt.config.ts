// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxt/eslint',
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    '@nuxt/image',
    '@nuxt/icon'
  ],
  shadcn: {
    prefix: 'U',
    componentDir: './components/ui'
  },
  eslint: {
    // options here
  }
})