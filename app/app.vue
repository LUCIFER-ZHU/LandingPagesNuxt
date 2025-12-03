<template>
  <NuxtLayout>
    <!-- <NuxtPage /> -->
    <component :is="pageComponent" />
  </NuxtLayout>
</template>

<script setup lang="ts">
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

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import IndexPage from '~/pages/index.vue'
import DieselPage from '~/pages/diesel/index.vue'
import ChillerPage from '~/pages/chiller/index.vue'

const route = useRoute()

// 仅 SSR 时读取 host
const host = process.server
  ? useRequestEvent()?.node?.req?.headers.host || ''
  : window.location.host

const pageComponent = computed(() => {
  switch (host) {
    case 'mobile.test': return DieselPage
    case 'mobile.test2': return ChillerPage
    default: return IndexPage
  }
})
</script>

<style>
</style>