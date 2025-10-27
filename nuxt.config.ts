// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: process.env.NODE_ENV !== "production" },
    devServer: {
        host: '0.0.0.0',
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/fonts",
        "@nuxt/image",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
    css: ["~/assets/css/vendors.css", "~/assets/iconfont/iconfont.css", "~/assets/scss/main.scss"],
    plugins: [{ src: "~/plugins/aos.client", mode: "client" }],
    // ssr: false,
    app: {
        head: {
            title: "Industrial Temperature Control Solutions",
            link: [
                { rel: "icon", type: "image/x-icon", href: "/minnuo-logo.ico" }, // 放在 public 目录
            ],
        },
    },
    runtimeConfig: {
        public: {
            // 公开的 API 基地址（浏览器可见）
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            // 图片资源基地址
            imageBase: process.env.NUXT_PUBLIC_IMAGE_BASE,
            // 应用版本号（构建时通过 APP_VERSION 注入，回退为 'dev'）
            appVersion: process.env.APP_VERSION || "dev",
        },
    },
    image: {
        // 默认使用原图
        densities: [1],
    },
    fonts: {
        // 不使用 Google 提供商
        providers: {
            google: false,
            googleicons: false,
        },
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
            allowedHosts: true, // ✅ 允许任意 Host（推荐）
            fs: {
              allow: ['.'] // 放宽本地文件系统访问限制
            }
        },
    },
    // 在生产环境下排除开发测试页面
    hooks: {
        'pages:extend'(pages) {
            if (process.env.NODE_ENV === 'production') {
                // 移除所有 /dev/ 路径的页面
                const pagesToRemove = pages.filter(page => page.path.includes('/dev'))
                pagesToRemove.forEach(page => {
                    pages.splice(pages.indexOf(page), 1)
                })
            }
        }
    },
    build: {
      transpile: ['vue-countup-v3'],
    },    
});
