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

// 设置全局头部信息
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
});
</script>

<style>
</style>