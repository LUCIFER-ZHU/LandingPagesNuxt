<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
/**
 * 应用入口文件
 * 设置全局配置和样式
 */
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();
useSeoMeta({
  // 主要标题
  title: 'MINNUO - Casting Equipment & Die-Casting Machine Manufacturer',
  ogTitle: 'MINNUO - Casting Equipment & Die-Casting Machine Manufacturer',
  
  // 描述
  description: 'Leading casting equipment manufacturer with 50+ years experience. Specializing in die-casting machines, low-pressure casting machines, sand molding equipment, and complete casting production lines. CE & ISO certified, global service.',
  ogDescription: 'Leading casting equipment manufacturer with 50+ years experience. Specializing in die-casting machines, low-pressure casting machines, sand molding equipment, and complete casting production lines. CE & ISO certified, global service.',
  
  // 关键词
  keywords: 'die-casting machine, casting equipment, low-pressure casting, sand molding, metal casting, foundry equipment, casting production line, industrial casting, aluminum casting, zinc casting, casting machine manufacturer',
  
  // 其他重要 meta 标签
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

// 使用 useHead 添加额外的 meta 标签和预加载资源
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
    { name: 'author', content: 'MINNUO Group' },
    { name: 'copyright', content: 'MINNUO Group' },
    { name: 'generator', content: 'Nuxt.js' },
  ],
  link: [
    // 预加载LCP关键图片资源
    { 
      rel: 'preload', 
      as: 'image', 
      href: buildImageUrl('image/img41.webp'), 
      fetchpriority: 'high' 
    },
  ],
})
</script>

<style>
</style>