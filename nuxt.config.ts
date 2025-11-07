// https://nuxt.com/docs/api/configuration/nuxt-config
// import { readFileSync } from 'fs';
// import { resolve } from 'path';

// 判断是否为开发环境
const isDev = process.env.NODE_ENV !== "production";

// 从环境变量读取是否生成 sourcemap（默认为 true）
const enableSourcemap = process.env.ENABLE_SOURCEMAP !== 'false';

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: process.env.NODE_ENV !== "production" },
    // ✅ 通过环境变量 ENABLE_SOURCEMAP 控制是否生成 sourcemap
    sourcemap: enableSourcemap,
    devServer: {
        host: "0.0.0.0",
        // https: {
        //     key: readFileSync(resolve(__dirname, '.cert/192.168.10.33+2-key.pem'), 'utf-8'),
        //     cert: readFileSync(resolve(__dirname, '.cert/192.168.10.33+2.pem'), 'utf-8'),
        // },
    },
    nitro: {
        routeRules: isDev
            ? {
                  // 开发环境：使用代理转发
                  "/web/**": {
                      proxy: `${process.env.NUXT_DEV_PROXY_TARGET}/web/**`,
                  },
              }
            : {
                  // 生产环境：不设置代理规则
              },
        // ✅ 通过环境变量控制是否生成 sourcemap
        sourceMap: enableSourcemap,
        // 保持动态导入，便于 sourcemap 映射
        inlineDynamicImports: false,
        // 不压缩，保持可读性（可选，如果需要压缩可设为 true）
        minify: false        
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/fonts",
        "@nuxt/image",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
    css: [
        "~/assets/css/vendors.css",
        "~/assets/iconfont/iconfont.css",
        "~/assets/scss/main.scss",
    ],
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
            // 后台图片资源基地址
            backendImageBase: process.env.NUXT_BACKEND_IMAGE_BASE,
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
                allow: ["."], // 放宽本地文件系统访问限制
            },
        },
        build: {
            // ✅ 通过环境变量控制是否生成 sourcemap
            sourcemap: enableSourcemap,
        },
    },
    // 在生产环境下排除开发测试页面
    hooks: {
        "pages:extend"(pages) {
            if (process.env.NODE_ENV === "production") {
                // 移除所有 /dev/ 路径的页面
                const pagesToRemove = pages.filter((page) =>
                    page.path.includes("/dev")
                );
                pagesToRemove.forEach((page) => {
                    pages.splice(pages.indexOf(page), 1);
                });
            }
        },
    },
    build: {
        transpile: ["vue-countup-v3"],
    },
});
