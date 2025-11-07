<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();

/**
 * 应用入口文件
 * 设置全局配置和样式
 * */

// 初始化认证状态（从 Cookie 恢复）
const authStore = useAuthStore()

// 在服务端和客户端都初始化认证状态
authStore.initFromCookie()

console.log('🚀 App.vue - 认证状态已初始化:', {
  isLoggedIn: authStore.isLoggedIn,
  user: authStore.user,
  isServer: process.server,
  isClient: process.client
})

// 使用 useHead 添加额外的 meta 标签和 Google Analytics 跟踪代码
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#092991' },
    { name: 'msapplication-TileColor', content: '#092991' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'MINNUO Group' },
    { name: 'application-name', content: 'MINNUO Group' },
  ],
  link: [
    // 预加载LCP关键图片资源
    // { 
    //   rel: 'preload', 
    //   as: 'image', 
    //   href: buildImageUrl('/image/img3.webp'), 
    //   fetchpriority: 'high' 
    // },
  ]
  // Note: Google Analytics is now loaded by the Cookie Consent plugin
  // only when the user accepts analytics cookies (GDPR compliant)
})
</script>

<style>
</style>