// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image"],
  css: ["~/assets/css/vendors.css", "~/assets/scss/main.scss"],
  runtimeConfig: {
    public: {
      // 公开的 API 基地址（浏览器可见）。优先读取环境变量，未设置时使用演示地址
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://jsonplaceholder.typicode.com'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
});
