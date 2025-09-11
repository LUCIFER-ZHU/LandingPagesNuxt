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
 */
useSeoMeta({
  // 主要标题
  title: 'MINNUO - Industrial Chiller & Temperature Control Solutions | Since 1987',
  ogTitle: 'MINNUO - Industrial Chiller & Temperature Control Solutions | Since 1987',
  
  // 描述
  description: 'Professional industrial chiller manufacturer with 38+ years experience. Air-cooled & water-cooled chillers from 3KW to 10,000KW. CE & ISO certified, custom solutions for plastics, laser, HVAC industries.',
  ogDescription: 'Professional industrial chiller manufacturer with 38+ years experience. Air-cooled & water-cooled chillers from 3KW to 10,000KW. CE & ISO certified, custom solutions for plastics, laser, HVAC industries.',
  
  // 关键词
  keywords: 'industrial chiller, air cooled chiller, water cooled chiller, temperature control, cooling system, mold temperature controller, industrial cooling, HVAC equipment, manufacturing cooling, energy efficient chiller',
  
  // 作者和公司信息
  author: 'MINNUO Group',
  
  // 其他重要 meta 标签
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
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
    //   href: buildImageUrl('image/img41.webp'), 
    //   fetchpriority: 'high' 
    // },
  ],  
  script: [
    // Google Analytics 跟踪代码
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-11209752310',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11209752310');
      `,
      type: 'text/javascript'
    }
  ]
})
</script>

<style>
</style>