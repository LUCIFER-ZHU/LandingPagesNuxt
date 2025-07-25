<template>
  <div class="product-detail-page">
    <!-- 页面头部 -->
    <header class="header">
      <UContainer>
        <div class="flex justify-between items-center py-4">
          <h1 class="text-2xl font-bold">公司名称</h1>
          <nav>
            <UButton to="/" variant="ghost" class="mr-2">首页</UButton>
            <UButton to="/about" variant="ghost" class="mr-2">关于我们</UButton>
            <UButton to="/contact" variant="ghost">联系我们</UButton>
          </nav>
        </div>
      </UContainer>
    </header>

    <div v-if="product">
      <!-- 面包屑导航 -->
      <section class="breadcrumb bg-gray-50">
        <UContainer class="py-4">
          <nav class="flex">
            <UButton to="/" variant="link" class="text-gray-600">首页</UButton>
            <span class="mx-2 text-gray-400">/</span>
            <span class="text-gray-900">{{ product.name }}</span>
          </nav>
        </UContainer>
      </section>

      <!-- 产品详情 -->
      <section class="product-detail">
        <UContainer class="py-16">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- 产品图片 -->
            <div>
              <img :src="product.image" :alt="product.name" class="w-full rounded-lg shadow-lg mb-4" />
              <div class="grid grid-cols-4 gap-2">
                <img v-for="(thumb, index) in product.thumbnails" :key="index" 
                     :src="thumb" :alt="`${product.name} 图片 ${index + 1}`" 
                     class="w-full aspect-square object-cover rounded cursor-pointer hover:opacity-75" />
              </div>
            </div>

            <!-- 产品信息 -->
            <div>
              <h1 class="text-4xl font-bold mb-4">{{ product.name }}</h1>
              <div class="flex items-center mb-4">
                <div class="flex text-yellow-400 mr-2">
                  <UIcon v-for="i in 5" :key="i" name="i-mdi-star" 
                         :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'" />
                </div>
                <span class="text-gray-600">({{ product.reviews }} 条评价)</span>
              </div>
              <p class="text-3xl font-bold text-primary mb-6">¥{{ product.price }}</p>
              <p class="text-lg text-gray-700 mb-8">{{ product.description }}</p>

              <!-- 产品选项 -->
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-3">选择规格</h3>
                <div class="flex flex-wrap gap-2">
                  <UButton v-for="(spec, index) in product.specifications" :key="index"
                           :variant="selectedSpec === index ? 'solid' : 'outline'"
                           @click="selectedSpec = index">
                    {{ spec.name }}
                  </UButton>
                </div>
              </div>

              <!-- 数量选择 -->
              <div class="mb-8">
                <h3 class="text-lg font-semibold mb-3">数量</h3>
                <div class="flex items-center space-x-4">
                  <ElInputNumber v-model="quantity" :min="1" :max="99" />
                  <span class="text-gray-600">库存：{{ product.stock }} 件</span>
                </div>
              </div>

              <!-- 操作按钮 -->
              <div class="flex space-x-4 mb-8">
                <UButton color="primary" size="lg" class="flex-1" @click="addToCart">
                  加入购物车
                </UButton>
                                 <UButton color="error" size="lg" class="flex-1" @click="buyNow">
                   立即购买
                 </UButton>
              </div>

              <!-- 产品特点 -->
              <div class="border-t pt-6">
                <h3 class="text-lg font-semibold mb-4">产品特点</h3>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in product.features" :key="index" class="flex items-center">
                    <UIcon name="i-mdi-check-circle" class="text-green-500 mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <!-- 产品详细描述 -->
      <section class="product-description bg-gray-50">
        <UContainer class="py-16">
          <ElTabs v-model="activeTab">
            <ElTabPane label="详细描述" name="description">
              <div class="prose max-w-none">
                <h3 class="text-2xl font-bold mb-4">产品详细介绍</h3>
                <p class="mb-4">{{ product.detailedDescription }}</p>
                <h4 class="text-xl font-semibold mb-3">主要特性</h4>
                <ul class="list-disc list-inside mb-6">
                  <li v-for="(feature, index) in product.features" :key="index">{{ feature }}</li>
                </ul>
              </div>
            </ElTabPane>
            <ElTabPane label="技术规格" name="specs">
              <ElTable :data="product.technicalSpecs" class="w-full">
                <ElTableColumn prop="name" label="规格项" width="200" />
                <ElTableColumn prop="value" label="规格值" />
              </ElTable>
            </ElTabPane>
            <ElTabPane label="用户评价" name="reviews">
              <div class="space-y-6">
                <div v-for="(review, index) in product.userReviews" :key="index" 
                     class="bg-white p-6 rounded-lg shadow">
                  <div class="flex items-center mb-3">
                    <img :src="review.avatar" :alt="review.username" class="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h5 class="font-semibold">{{ review.username }}</h5>
                      <div class="flex text-yellow-400">
                        <UIcon v-for="i in 5" :key="i" name="i-mdi-star" 
                               :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'" />
                      </div>
                    </div>
                  </div>
                  <p>{{ review.comment }}</p>
                </div>
              </div>
            </ElTabPane>
          </ElTabs>
        </UContainer>
      </section>

      <!-- 相关产品推荐 -->
      <section class="related-products">
        <UContainer class="py-16">
          <h2 class="text-3xl font-bold mb-8 text-center">相关产品推荐</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UCard v-for="(relatedProduct, index) in relatedProducts" :key="index" class="product-card">
              <template #header>
                <img :src="relatedProduct.image" :alt="relatedProduct.name" class="w-full h-40 object-cover" />
              </template>
              <template #title>
                <h3 class="text-lg font-bold">{{ relatedProduct.name }}</h3>
              </template>
              <p class="text-sm mb-3">{{ relatedProduct.description }}</p>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-primary">¥{{ relatedProduct.price }}</span>
                <UButton size="sm" :to="`/product/${relatedProduct.id}`">查看</UButton>
              </div>
            </UCard>
          </div>
        </UContainer>
      </section>
    </div>

    <!-- 产品未找到 -->
    <div v-else class="flex items-center justify-center h-96">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">产品未找到</h2>
        <p class="text-gray-600 mb-6">抱歉，您查找的产品不存在。</p>
        <UButton to="/" color="primary">返回首页</UButton>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white">
      <UContainer class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">公司名称</h3>
            <p>提供高品质的产品和服务，致力于为客户创造价值。</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">快速链接</h3>
            <ul>
              <li class="mb-2"><a href="/" class="hover:underline">首页</a></li>
              <li class="mb-2"><a href="/about" class="hover:underline">关于我们</a></li>
              <li class="mb-2"><a href="/products" class="hover:underline">产品中心</a></li>
              <li><a href="/contact" class="hover:underline">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">联系我们</h3>
            <div class="mb-2">
              <strong>电话：</strong> 400-123-4567
            </div>
            <div class="mb-2">
              <strong>邮箱：</strong> support@example.com
            </div>
            <div>
              <strong>地址：</strong> 北京市朝阳区某某大厦123号
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {{ new Date().getFullYear() }} 公司名称. 保留所有权利.</p>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';

// 引入Element Plus消息组件
import { ElMessage } from 'element-plus';

/**
 * 获取路由参数
 */
const route = useRoute();
const productId = route.params.id as string;

/**
 * 组件状态
 */
const selectedSpec = ref(0);
const quantity = ref(1);
const activeTab = ref('description');

/**
 * 模拟产品数据库
 * @type {Record<string, any>}
 */
const productDatabase: Record<string, any> = {
  '1': {
    id: '1',
    name: '产品一 - 旗舰版智能设备',
    description: '这是我们的旗舰产品，拥有卓越的性能和可靠性，适合各种复杂场景的应用。采用最新的AI技术，为用户提供智能化体验。',
    detailedDescription: '本产品采用先进的处理器技术，配备高分辨率显示屏和多种传感器，能够在各种环境下稳定运行。产品经过严格的质量测试，确保长期使用的可靠性。适用于专业用户和企业级应用场景。',
    price: 1999,
    rating: 4.8,
    reviews: 156,
    stock: 50,
    image: 'https://via.placeholder.com/800x600',
    thumbnails: [
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200'
    ],
    specifications: [
      { name: '标准版', price: 1999 },
      { name: '专业版', price: 2499 },
      { name: '企业版', price: 3999 }
    ],
    features: [
      '高性能处理器',
      '长效电池续航',
      '防水防尘设计',
      '智能AI算法',
      '多设备连接'
    ],
    technicalSpecs: [
      { name: '处理器', value: 'ARM Cortex-A78' },
      { name: '内存', value: '8GB LPDDR5' },
      { name: '存储', value: '256GB UFS 3.1' },
      { name: '显示屏', value: '6.8寸 AMOLED' },
      { name: '电池', value: '5000mAh' },
      { name: '重量', value: '250g' }
    ],
    userReviews: [
      {
        username: '张先生',
        rating: 5,
        comment: '产品质量非常好，功能强大，使用体验很棒！',
        avatar: 'https://via.placeholder.com/50x50'
      },
      {
        username: '李女士',
        rating: 4,
        comment: '性价比很高，推荐购买。唯一不足是重量稍重。',
        avatar: 'https://via.placeholder.com/50x50'
      }
    ]
  },
  '2': {
    id: '2',
    name: '产品二 - 便携式轻量设备',
    description: '轻量级设计，便携易用，是出差和旅行的理想选择。',
    detailedDescription: '专为移动办公设计的轻量级产品，重量仅为150g，厚度不到1cm。虽然体积小巧，但功能齐全，能够满足日常工作需求。',
    price: 1299,
    rating: 4.5,
    reviews: 89,
    stock: 30,
    image: 'https://via.placeholder.com/800x600',
    thumbnails: [
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200',
      'https://via.placeholder.com/200x200'
    ],
    specifications: [
      { name: '基础版', price: 1299 },
      { name: '增强版', price: 1599 }
    ],
    features: [
      '超轻量设计',
      '便携式外观',
      '快速启动',
      '低功耗运行'
    ],
    technicalSpecs: [
      { name: '处理器', value: 'ARM Cortex-A55' },
      { name: '内存', value: '4GB LPDDR4' },
      { name: '存储', value: '128GB eMMC' },
      { name: '显示屏', value: '5.5寸 LCD' },
      { name: '电池', value: '3000mAh' },
      { name: '重量', value: '150g' }
    ],
    userReviews: [
      {
        username: '王经理',
        rating: 4,
        comment: '很轻便，适合出差使用，电池续航也不错。',
        avatar: 'https://via.placeholder.com/50x50'
      }
    ]
  }
};

/**
 * 获取当前产品信息
 */
const product = computed(() => {
  return productDatabase[productId] || null;
});

/**
 * 相关产品推荐
 */
const relatedProducts = ref([
  {
    id: '2',
    name: '产品二',
    description: '轻量级设计，便携易用',
    price: 1299,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: '3',
    name: '产品三',
    description: '专为专业用户设计',
    price: 2499,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: '4',
    name: '产品四',
    description: '入门级产品，价格亲民',
    price: 899,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: '5',
    name: '产品五',
    description: '采用最新技术',
    price: 3999,
    image: 'https://via.placeholder.com/300x200'
  }
]);

/**
 * 设置页面SEO元数据
 */
if (product.value) {
  useHead({
    title: `${product.value.name} - 公司名称`,
    meta: [
      { name: 'description', content: product.value.description },
      { name: 'keywords', content: `${product.value.name},产品,购买,${product.value.features.join(',')}` },
      { property: 'og:title', content: `${product.value.name} - 公司名称` },
      { property: 'og:description', content: product.value.description },
      { property: 'og:image', content: product.value.image },
      { property: 'og:type', content: 'product' },
      { property: 'product:price:amount', content: product.value.price.toString() },
      { property: 'product:price:currency', content: 'CNY' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${product.value.name} - 公司名称` },
      { name: 'twitter:description', content: product.value.description },
      { name: 'twitter:image', content: product.value.image }
    ],
    link: [
      { rel: 'canonical', href: `https://example.com/product/${productId}` }
    ]
  });
} else {
  useHead({
    title: '产品未找到 - 公司名称',
    meta: [
      { name: 'description', content: '抱歉，您查找的产品不存在。' }
    ]
  });
}

/**
 * 加入购物车功能
 * @returns {Promise<void>}
 */
const addToCart = async () => {
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 500));
    ElMessage.success(`已将 ${quantity.value} 件商品加入购物车`);
  } catch (error) {
    console.error('加入购物车失败:', error);
    ElMessage.error('加入购物车失败，请稍后再试');
  }
};

/**
 * 立即购买功能
 * @returns {Promise<void>}
 */
const buyNow = async () => {
  try {
    // 模拟跳转到结算页面
    ElMessage.info('正在跳转到结算页面...');
    // 这里可以添加路由跳转逻辑
  } catch (error) {
    console.error('购买失败:', error);
    ElMessage.error('购买失败，请稍后再试');
  }
};
</script>

<style scoped>
/* 使用vw单位实现自适应宽度 */
.product-detail-page {
  width: 100vw;
  overflow-x: hidden;
}

.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .product-detail h1 {
    font-size: 2rem;
  }
  
  .product-detail .grid {
    grid-template-columns: 1fr;
  }
}
</style> 