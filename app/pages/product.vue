<template>
  <div class="product-page">
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

    <!-- 产品展示区 -->
    <section class="hero bg-gray-100">
      <UContainer class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="text-4xl font-bold mb-4">产品名称</h1>
            <p class="text-xl text-gray-600 mb-6">
              这是一款创新性产品，为用户提供卓越的使用体验和高效的解决方案。
            </p>
            <div class="flex space-x-4">
              <UButton color="primary" size="lg">立即购买</UButton>
              <UButton variant="outline" size="lg">了解更多</UButton>
            </div>
          </div>
          <div class="flex justify-center">
            <img src="https://via.placeholder.com/500x300" alt="产品图片" class="rounded-lg shadow-lg" />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 产品特点 -->
    <section class="features">
      <UContainer class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">产品特点</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard v-for="(feature, index) in features" :key="index">
            <template #header>
              <div class="flex items-center">
                <UIcon :name="feature.icon" class="mr-2 text-primary" />
                <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
              </div>
            </template>
            <p>{{ feature.description }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- 产品规格 -->
    <section class="specifications bg-gray-50">
      <UContainer class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">产品规格</h2>
        <ElTable :data="specifications" stripe>
          <ElTableColumn prop="name" label="规格名称" />
          <ElTableColumn prop="value" label="规格值" />
          <ElTableColumn prop="description" label="说明" />
        </ElTable>
      </UContainer>
    </section>

    <!-- 客户评价 -->
    <section class="testimonials">
      <UContainer class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">客户评价</h2>
        <ElCarousel :interval="4000" type="card" height="300px">
          <ElCarouselItem v-for="(testimonial, index) in testimonials" :key="index">
            <div class="h-full bg-white p-6 rounded-lg shadow flex flex-col justify-between">
              <p class="text-lg mb-4">{{ testimonial.content }}</p>
              <div class="flex items-center">
                <img :src="testimonial.avatar" alt="客户头像" class="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 class="font-semibold">{{ testimonial.name }}</h4>
                  <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </ElCarouselItem>
        </ElCarousel>
      </UContainer>
    </section>

    <!-- 常见问题 -->
    <section class="faq bg-gray-50">
      <UContainer class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">常见问题</h2>
        <ElCollapse>
          <ElCollapseItem v-for="(item, index) in faqs" :key="index" :title="item.question">
            <div>{{ item.answer }}</div>
          </ElCollapseItem>
        </ElCollapse>
      </UContainer>
    </section>

    <!-- 联系我们 -->
    <section class="contact">
      <UContainer class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="mb-4">如果您对我们的产品有任何疑问，请随时联系我们。我们的客服团队将竭诚为您服务。</p>
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
          <div>
            <ElForm>
              <ElFormItem label="您的姓名">
                <ElInput v-model="contactForm.name" />
              </ElFormItem>
              <ElFormItem label="电子邮箱">
                <ElInput v-model="contactForm.email" />
              </ElFormItem>
              <ElFormItem label="留言内容">
                <ElInput v-model="contactForm.message" type="textarea" :rows="4" />
              </ElFormItem>
              <ElFormItem>
                <UButton color="primary" @click="submitForm">提交留言</UButton>
              </ElFormItem>
            </ElForm>
          </div>
        </div>
      </UContainer>
    </section>

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
            <h3 class="text-xl font-bold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-gray-300">
                <UIcon name="i-mdi-wechat" class="text-2xl" />
              </a>
              <a href="#" class="hover:text-gray-300">
                <UIcon name="i-mdi-weibo" class="text-2xl" />
              </a>
              <a href="#" class="hover:text-gray-300">
                <UIcon name="i-mdi-linkedin" class="text-2xl" />
              </a>
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
import { ref } from 'vue';

/**
 * 产品特点数据
 * @type {Array<{title: string, icon: string, description: string}>}
 */
const features = ref([
  {
    title: '高效性能',
    icon: 'i-mdi-rocket-launch',
    description: '采用先进技术，提供卓越的性能表现，大幅提升工作效率。'
  },
  {
    title: '易于使用',
    icon: 'i-mdi-hand-okay',
    description: '简洁直观的用户界面，无需专业培训，轻松上手使用。'
  },
  {
    title: '安全可靠',
    icon: 'i-mdi-shield-check',
    description: '多重安全防护机制，保障数据安全，使用更放心。'
  }
]);

/**
 * 产品规格数据
 * @type {Array<{name: string, value: string, description: string}>}
 */
const specifications = ref([
  {
    name: '尺寸',
    value: '120 x 75 x 30 mm',
    description: '便携小巧，易于携带'
  },
  {
    name: '重量',
    value: '250g',
    description: '轻量化设计'
  },
  {
    name: '材质',
    value: '高强度合金',
    description: '耐用防摔'
  },
  {
    name: '电池容量',
    value: '5000mAh',
    description: '长效续航'
  },
  {
    name: '保修期',
    value: '2年',
    description: '全国联保'
  }
]);

/**
 * 客户评价数据
 * @type {Array<{content: string, name: string, company: string, avatar: string}>}
 */
const testimonials = ref([
  {
    content: '这是我用过的最好的产品之一，极大地提高了我的工作效率。',
    name: '张先生',
    company: 'ABC科技有限公司',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    content: '产品质量非常好，客服响应迅速，售后服务一流。',
    name: '李女士',
    company: 'XYZ传媒集团',
    avatar: 'https://via.placeholder.com/150'
  },
  {
    content: '功能强大，界面简洁，是同类产品中的佼佼者。',
    name: '王经理',
    company: '未来科技有限公司',
    avatar: 'https://via.placeholder.com/150'
  }
]);

/**
 * 常见问题数据
 * @type {Array<{question: string, answer: string}>}
 */
const faqs = ref([
  {
    question: '产品有哪些颜色可选？',
    answer: '我们的产品提供黑色、白色、银色三种颜色选择，可以满足不同用户的需求。'
  },
  {
    question: '产品保修期是多久？',
    answer: '我们提供2年的全国联保服务，在保修期内因产品质量问题产生的维修费用全免。'
  },
  {
    question: '如何联系客服？',
    answer: '您可以通过我们的客服热线400-123-4567或发送邮件至support@example.com联系我们的客服团队。'
  },
  {
    question: '是否支持7天无理由退货？',
    answer: '是的，我们支持7天无理由退货服务，但产品需保持完好，不影响二次销售。'
  }
]);

/**
 * 联系表单数据
 * @type {{name: string, email: string, message: string}}
 */
const contactForm = ref({
  name: '',
  email: '',
  message: ''
});

/**
 * 提交联系表单
 * @returns {Promise<void>}
 * @throws {Error} 当表单提交失败时抛出错误
 */
const submitForm = async () => {
  try {
    // 这里可以添加表单验证逻辑
    if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
      ElMessage.error('请填写完整的表单信息');
      return;
    }
    
    // 模拟API请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 成功提示
    ElMessage.success('表单提交成功，我们会尽快与您联系');
    
    // 重置表单
    contactForm.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    // 错误处理
    console.error('表单提交失败:', error);
    ElMessage.error('提交失败，请稍后再试');
  }
};
</script>

<style scoped>
/* 使用vw单位实现自适应宽度 */
.product-page {
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

/* 响应式调整 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
}
</style> 