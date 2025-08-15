<template>
  <header class="app-header">
    <div class="header-content">
      <div class="site-logo">
        <NuxtImg densities="1" :src="buildImageUrl('image/logo.webp')" alt="Logo" />
      </div>
      <div class="site-contact">
        <NuxtImg densities="1" :src="buildImageUrl('image/Mail.webp')" alt="Email" />
        <span class="site-contact-text">Email: consult@minnuo.com</span>
        <NuxtImg densities="1" :src="buildImageUrl('image/youtube.webp')" alt="YouTube" />
        <NuxtImg densities="1" :src="buildImageUrl('image/facebook.webp')" alt="Facebook" />
        <NuxtImg densities="1" :src="buildImageUrl('image/ig.webp')" alt="Instagram" />
      </div>
    </div>

    <!-- 导航菜单 -->
    <nav class="navigation-menu">
      <ul class="menu-list">
        <li class="menu-item active">
          <NuxtLink to="#" class="menu-link">Factory Introduction</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Featured products</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Diverse services</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Empirical history</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Unique value</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Professional technology</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#" class="menu-link">Mature product line</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
/**
 * 应用头部组件
 * 提供网站logo、联系信息和导航菜单
 */

// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #ffffff;
  border-bottom: .0521vw solid #e5e7eb;
  box-shadow: 0 .0521vw .1563vw 0 rgba(0, 0, 0, 0.1);
  // position: sticky;
  top: 0;
  z-index: 10;
  padding: 1.7708vw 13.5938vw 1.4583vw;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25vw;
}

.site-contact {
  display: flex;
  align-items: center;
  gap: 20px;

  .site-contact-text {
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    margin-right: 30px;
  }
}


/* 导航菜单样式 */
.navigation-menu {

  .menu-list {
    display: flex;
    align-items: center;
    gap: 2.2917vw;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .menu-item {
    position: relative;
  }

  .menu-link {
    display: block;
    font-weight: 400;
    font-size: .9375vw;
    color: #000000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #092991;
    }
  }

  .menu-item.active .menu-link {
    color: #092991;
    font-weight: 600;
  }
}
</style>
