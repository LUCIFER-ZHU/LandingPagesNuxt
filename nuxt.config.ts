// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: process.env.NODE_ENV !== "production" },
    modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxt/image"],
    css: ["~/assets/css/vendors.css", "~/assets/scss/main.scss"],
    plugins: [
      { src: "~/plugins/aos.client", mode: "client" },
    ],
    // ssr: false,
    app: {
      head: {
        title: 'Industrial Temperature Control Solutions',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/minnuo-logo.ico' } // 放在 public 目录
        ]
      }
    },    
    runtimeConfig: {
        public: {
            // 公开的 API 基地址（浏览器可见）
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            // 图片资源基地址
            imageBase: process.env.NUXT_PUBLIC_IMAGE_BASE,
            // 应用版本号（构建时通过 APP_VERSION 注入，回退为 'dev'）
            appVersion: process.env.APP_VERSION || 'dev',
        },
    },
    image: {
        // 默认使用原图
        densities: [1],
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/variables.scss" as *;',
                },
            },
        },
        server: {
          allowedHosts: true // ✅ 允许任意 Host（推荐）
          // 或者只允许特定域名：
          // allowedHosts: ['bdb5360b5e11.ngrok-free.app']
        }        
    },
});
