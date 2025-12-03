<template>
  <div class="home-page" :class="{ 'is-mobile': isMobile }">
    <div class="container">
      <!-- 标题区域 -->
      <div class="header-section">
        <h1 class="main-title">单页导航</h1>
        <p class="subtitle">欢迎访问单页集合</p>
      </div>

      <!-- 提示信息 -->
      <div class="info-section">
        <p class="info-text">
          点击上方卡片或按钮即可访问对应的单页
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isMobile } = useDeviceDetection()

// 定义单页列表
const pages = [
  {
    path: '/diesel',
    title: '柴油压缩机'
  },
]

// 导航到指定页面
const navigateToPage = (path: string) => {
  navigateTo(path)
}

// SEO 设置
useHead({
  title: '单页项目导航 - MINNUO Group',
  meta: [
    {
      name: 'description',
      content: 'MINNUO Group 单页项目导航页面，提供所有可用单页的快速访问入口'
    }
  ]
})
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: clamp(40px, 5.2083vw, 80px) clamp(20px, 2.6042vw, 40px);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header-section {
    text-align: center;
    margin-bottom: clamp(40px, 5.2083vw, 60px);

    .main-title {
      font-size: clamp(32px, 3.125vw, 48px);
      font-weight: 700;
      color: #1a202c;
      margin-bottom: clamp(12px, 1.5625vw, 20px);
      line-height: 1.2;
    }

    .subtitle {
      font-size: clamp(16px, 1.5625vw, 20px);
      color: #4a5568;
      line-height: 1.6;
    }
  }

  .pages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(24px, 3.125vw, 32px);
    margin-bottom: clamp(40px, 5.2083vw, 60px);
  }

  .page-card {
    background: #ffffff;
    border-radius: clamp(12px, 1.5625vw, 16px);
    padding: clamp(24px, 3.125vw, 32px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .card-title {
      font-size: clamp(20px, 2.0833vw, 24px);
      font-weight: 600;
      color: #1a202c;
      line-height: 1.3;
      margin: 0;
    }
  }

  .info-section {
    text-align: center;
    padding: clamp(20px, 2.6042vw, 32px);
    background: rgba(255, 255, 255, 0.6);
    border-radius: clamp(8px, 1.0417vw, 12px);
    backdrop-filter: blur(10px);

    .info-text {
      font-size: clamp(14px, 1.4583vw, 16px);
      color: #4a5568;
      line-height: 1.6;
      margin: 0;
    }
  }
}

/* ---Mobile样式----*/
.home-page.is-mobile {
  padding: 5.3333vw 4.2667vw;

  .header-section {
    margin-bottom: 5.3333vw;

    .main-title {
      font-size: clamp(24px, 6.4vw, 32px);
      margin-bottom: 2.6667vw;
    }

    .subtitle {
      font-size: clamp(14px, 3.7333vw, 16px);
    }
  }

  .pages-grid {
    grid-template-columns: 1fr;
    gap: 4.2667vw;
    margin-bottom: 5.3333vw;
  }

  .page-card {
    padding: 5.3333vw 4.2667vw;
    border-radius: 2.6667vw;

    .card-title {
      font-size: clamp(18px, 4.8vw, 20px);
    }
  }

  .info-section {
    padding: 4.2667vw;
    border-radius: 2.6667vw;

    .info-text {
      font-size: clamp(13px, 3.4667vw, 14px);
    }
  }
}
</style>

