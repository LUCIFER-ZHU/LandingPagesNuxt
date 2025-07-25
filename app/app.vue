<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
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
/* 全局样式重置 */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 确保100vw不会产生水平滚动条 */
body {
  overflow-x: hidden;
}

/* 图片响应式 */
img {
  max-width: 100%;
  height: auto;
}

/* 链接样式 */
a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

/* 按钮样式重置 */
button {
  cursor: pointer;
}

/* 确保页面最小高度 */
#__nuxt {
  min-height: 100vh;
}
</style>