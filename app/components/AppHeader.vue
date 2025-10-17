<template>
  <header class="app-header">
    <div class="header-content">
      <div class="site-logo">
        <NuxtImg densities="1" :src="buildImageUrl('/image/needful/logo.webp')" alt="Logo" class="w-[13.9583vw]"/>
      </div>
      <div class="site-contact">
        <NuxtImg densities="1" :src="buildImageUrl('/image/needful/Mail.webp')" alt="Email" class="w-[2.0833vw]"/>
        <span class="site-contact-text" @click="handleEmailClick">Email: engineer@minnuo.com</span>
      </div>
    </div>

    <!-- 导航菜单 -->
    <!-- <nav class="navigation-menu">
      <ul class="menu-list">
        <li class="menu-item">
          <NuxtLink to="#banner-anchor" class="menu-link">Service Introduction</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#application-scenarios-anchor" class="menu-link">Application scenarios</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#about-us-anchor" class="menu-link">About Us</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#our-service-anchor" class="menu-link">Our Service</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#products-anchor" class="menu-link" >Featured Products</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#project-cases-anchor" class="menu-link">Project Cases</NuxtLink>
        </li>
        <li class="menu-item">
          <NuxtLink to="#contact-us-anchor" class="menu-link">Contact Us</NuxtLink>
        </li>
      </ul>
    </nav> -->
  </header>
</template>

<script setup lang="ts">
/**
 * 应用头部组件
 * 提供网站logo、联系信息和导航菜单
 */

// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();

/**
 * 邮箱点击处理函数
 * 打开默认邮件客户端并预填充收件人地址
 */
const handleEmailClick = () => {
  window.location.href = 'mailto:engineer@minnuo.com'
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #ffffff;
  border-bottom: .0521vw solid #e5e7eb;
  box-shadow: 0 .0521vw .1563vw 0 rgba(0, 0, 0, 0.1);
  // position: sticky;
  top: 0;
  z-index: 10;
  padding: .5208vw 13.5938vw .5208vw;
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
  gap: 1.0417vw;

  .site-contact-text {
    font-weight: 400;
    font-size: .9375vw;
    color: #000000;
    margin-right: 1.5625vw;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #092991;
    }
  }
}


/* 导航菜单样式 */
.navigation-menu {

  .menu-list {
    display: flex;
    align-items: center;
    gap: 3.6458vw;
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

// 移动端---------------------------------------------------------------------
// 响应式设计
@media (max-width: 768px) {
  .app-header{
    padding: 1.3333vw 2.6667vw;

    .site-logo img{
      width: 40vw;
    }

    .site-contact{
      img{
        width: 4.2667vw;
      }
      .site-contact-text{
        font-size: 2.6667vw
      }
    }

    .navigation-menu{
      display: none;
    }

  }
}
</style>
