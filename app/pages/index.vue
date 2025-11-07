<template>
  <div class="index-page">
    <!-- 添加 key 确保组件正确切换 -->
    <PagesIndexNoAuth v-if="!authStore.isLoggedIn" key="no-auth" />
    <PagesIndexAuth v-else key="auth" />
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
