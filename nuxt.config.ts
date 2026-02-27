export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        { src: 'https://cdn.tailwindcss.com' }
      ]
    }
  }
})