<template>
  <header class="app-header">
    <div class="header-content">
      <div class="site-logo">
        <NuxtImg :src="buildImageUrl('image/logo.webp')" alt="Logo" />
      </div>
      <div class="site-contact">
        <NuxtImg :src="buildImageUrl('image/Mail.webp')" alt="Email" />
        Email: consult@minnuo.com
        <NuxtImg :src="buildImageUrl('image/youtube.webp')" alt="YouTube" />
        <NuxtImg :src="buildImageUrl('image/facebook.webp')" alt="Facebook" />
        <NuxtImg :src="buildImageUrl('image/ig.webp')" alt="Instagram" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * 应用头部组件
 * 提供网站logo和联系信息
 */

// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.site-logo {
  img {
    height: 40px;
    width: auto;
  }
}

.site-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;

  img {
    height: 20px;
    width: auto;
  }
}

.debug-info {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #67c23a;

  summary {
    cursor: pointer;
    font-weight: bold;
    color: #409eff;
  }

  .debug-content {
    margin-top: 0.5rem;
    p {
      margin-bottom: 0.25rem;
    }
    pre {
      background-color: #f4f4f4;
      padding: 0.5rem;
      border-radius: 0.25rem;
      overflow-x: auto;
    }
  }
}
</style>
