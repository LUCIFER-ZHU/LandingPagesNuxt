<template>
  <div class="index-page">
    <!-- 使用新的头部组件 -->
    <ReNewAppHeader />
    <PagesIndexNoAuth v-if="!authStore.isLoggedIn" />
    <PagesIndexAuth v-else />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

/**
 * 首页组件
 * 显示用户信息和退出登录功能
 */

const { $toast } = useNuxtApp()
const authStore = useAuthStore()

// 使用设备检测组合函数
const { isMob } = useDeviceDetection()


</script>

<style lang="scss" scoped>
// 全局样式可以在这里定义
</style>
