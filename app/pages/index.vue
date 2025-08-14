<template>
  <div class="products-page">

    <!-- API 演示区：展示如何区分环境并发起请求 -->
    <section class="api-demo">
      <UContainer class="py-6">
        <h2 class="text-2xl font-bold mb-4">API 演示</h2>
        <div class="flex items-center gap-4">
          <UButton color="primary" :loading="isLoading" @click="onTestApi">测试请求 /todos/1</UButton>
          <span v-if="errorMessage" class="text-red-600">{{ errorMessage }}</span>
        </div>
        <pre v-if="apiResult" class="mt-4 bg-gray-100 p-4 rounded text-sm overflow-auto">{{ apiResult }}</pre>
      </UContainer>
    </section>

    <!-- 产品列表 -->
    <section class="products">
      <UContainer class="py-16">
        <h1 class="text-4xl font-bold mb-8 text-center">我们的产品</h1>
        <p class="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          我们提供多种高品质产品，满足不同客户的需求。每款产品都经过严格的质量控制，确保卓越的性能和可靠性。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard v-for="(product, index) in products" :key="index" class="product-card">
            <template #header>
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
            </template>
            <template #title>
              <h3 class="text-xl font-bold">{{ product.name }}</h3>
            </template>
            <p class="mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-semibold text-primary">¥{{ product.price }}</span>
              <UButton color="primary" :to="`/`">查看详情</UButton>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 公司简介 -->
    <section class="about bg-gray-50">
      <UContainer class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">关于我们</h2>
            <p class="mb-4">
              我们是一家专注于提供高品质产品和卓越服务的企业。自成立以来，我们始终坚持以客户需求为中心，不断创新和完善我们的产品。
            </p>
            <p class="mb-6">
              我们拥有一支经验丰富、专业技能过硬的团队，致力于为客户提供最佳的解决方案和体验。
            </p>
            <UButton color="primary" to="/">了解更多</UButton>
          </div>
          <div class="flex justify-center">
            <img src="https://via.placeholder.com/600x400" alt="公司图片" class="rounded-lg shadow-lg" />
          </div>
        </div>
      </UContainer>
    </section>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useHead, useRuntimeConfig } from '#imports';

/**
 * 设置页面元数据，优化SEO
 */
useHead({
  title: '公司名称 - 高品质产品提供商',
  meta: [
    { name: 'description', content: '我们提供多种高品质产品，满足不同客户的需求。每款产品都经过严格的质量控制，确保卓越的性能和可靠性。' },
    { name: 'keywords', content: '产品,高品质,创新,解决方案' },
    { property: 'og:title', content: '公司名称 - 高品质产品提供商' },
    { property: 'og:description', content: '我们提供多种高品质产品，满足不同客户的需求。每款产品都经过严格的质量控制，确保卓越的性能和可靠性。' },
    { property: 'og:image', content: 'https://example.com/og-image.jpg' },
    { property: 'og:url', content: 'https://example.com' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '公司名称 - 高品质产品提供商' },
    { name: 'twitter:description', content: '我们提供多种高品质产品，满足不同客户的需求。每款产品都经过严格的质量控制，确保卓越的性能和可靠性。' },
    { name: 'twitter:image', content: 'https://example.com/twitter-image.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://example.com' }
  ]
});

/**
 * API 请求结果
 * @type {import('vue').Ref<any | null>}
 */
const apiResult = ref<any | null>(null);

/**
 * 加载状态
 * @type {import('vue').Ref<boolean>}
 */
const isLoading = ref<boolean>(false);

/**
 * 错误消息
 * @type {import('vue').Ref<string | null>}
 */
const errorMessage = ref<string | null>(null);

/**
 * 发起 GET 请求示例
 * @param {string} endpoint - 业务端点（例如："/todos/1"）
 * @returns {Promise<void>} 无显式返回，结果通过响应式变量暴露
 * @throws {Error} 当网络异常或服务端返回错误时抛出
 */
const fetchExample = async (endpoint: string): Promise<void> => {
  try {
    isLoading.value = true; // 开始加载
    errorMessage.value = null; // 重置错误
    apiResult.value = null; // 清空旧数据

    // 使用自定义的 $customFetch 发起同构请求，自动添加 baseURL
    const { $customFetch } = useNuxtApp();
    const data = await $customFetch(endpoint, {
      method: 'GET'
    });

    apiResult.value = data;
  } catch (err: any) {
    // 统一错误处理，保证可观测性
    const message = err?.data?.message || err?.message || '请求失败';
    errorMessage.value = message;
    // 抛出错误便于上层调用链感知
    throw new Error(message);
  } finally {
    isLoading.value = false; // 结束加载
  }
};

/**
 * 点击触发测试请求
 * @returns {Promise<void>} 无显式返回
 */
const onTestApi = async (): Promise<void> => {
  await fetchExample('/todos/1');
};

/**
 * 产品数据
 * @type {Array<{id: string, name: string, description: string, price: number, image: string}>}
 */
const products = ref([
  {
    id: '1',
    name: '产品一',
    description: '这是我们的旗舰产品，拥有卓越的性能和可靠性，适合各种复杂场景的应用。',
    price: 1999,
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: '2',
    name: '产品二',
    description: '轻量级设计，便携易用，是出差和旅行的理想选择。',
    price: 1299,
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: '3',
    name: '产品三',
    description: '专为专业用户设计，提供强大的功能和定制选项。',
    price: 2499,
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: '4',
    name: '产品四',
    description: '入门级产品，价格亲民，功能齐全，适合初次使用的用户。',
    price: 899,
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: '5',
    name: '产品五',
    description: '采用最新技术，性能卓越，是高端市场的首选。',
    price: 3999,
    image: 'https://via.placeholder.com/600x400'
  },
  {
    id: '6',
    name: '产品六',
    description: '特殊定制版，限量发售，拥有独特的外观设计和功能。',
    price: 4999,
    image: 'https://via.placeholder.com/600x400'
  }
]);
</script>

<style lang="scss" scoped>
/* 使用vw单位实现自适应宽度 */
.products-page {
  width: 100vw;
  overflow-x: hidden;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: $shadow-sm;
}

.product-card {
  @include transition-base;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
  }
}
</style> 