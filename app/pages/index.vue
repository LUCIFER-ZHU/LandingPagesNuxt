<template>
  <!-- 根据设备类型渲染不同的组件 -->
  <PagesMainPage v-if="!isMob()" />
  <PagesMainPageMob v-else />
</template>

<script setup lang="ts">
/**
 * 首页组件
 * 根据设备类型自动切换桌面端和移动端版本
 */

// 使用设备检测组合函数
const { isMob } = useDeviceDetection()
</script>

<style lang="scss" scoped>
// 全局样式可以在这里定义
</style>