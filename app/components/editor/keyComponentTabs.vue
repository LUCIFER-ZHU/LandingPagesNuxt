<template>
  <div class="key-component-tabs">
    <div class="title">
      Key Components of an Industrial Chiller Unit
    </div>
    <!-- 标签页选项卡 -->
    <UTabs v-model="activeTab" color="primary" variant="link" :content="false" :items="tabItems" :ui="{
      indicator: 'h-[.1042vw]'
    }" class="w-full chiller-tabs" />

    <!-- 自定义内容区域 -->
    <div class="tab-content mt-4">
      <!-- 根据活动标签显示相应内容 -->
      <div v-if="activeTab === 'low-temp'" class="tab-pane tab-pane-1">
      </div>

      <div v-if="activeTab === 'air-cooled'" class="tab-pane tab-pane-2">
        <div v-for="item in tabPane2Content" :key="item.title" class="box">
          <NuxtImg densities="1" :src="item.image" alt="icon" loading="lazy"/>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'industrial'" class="tab-pane tab-pane-3">
        <h3 class="text-lg font-medium">Industrial Chillers 内容</h3>
        <div class="mt-2">
          <!-- 这里放置第三个标签页的内容 -->
          3
        </div>
      </div>

      <div v-if="activeTab === 'mtc'" class="tab-pane tab-pane-4">
        <h3 class="text-lg font-medium">MTC 内容</h3>
        <div class="mt-2">
          <!-- 这里放置第四个标签页的内容 -->
          4
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsItem } from '@nuxt/ui'

// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();

/**
 * 定义标签页项目数组
 * @type {TabsItem[]} 标签页配置项数组
 */
const tabItems: TabsItem[] = [
  {
    label: 'low-temp chiller',
    value: 'low-temp',
    disabled: true
  },
  {
    label: 'air-cooled chiller',
    value: 'air-cooled'
  },
  {
    label: 'Industrial chillers',
    value: 'industrial',
    disabled: true
  },
  {
    label: 'MTC',
    value: 'mtc',
    disabled: true
  }
]

/**
 * 当前激活的标签页，默认设为第二个选项卡
 * @type {Ref<string>} 当前选中的标签页值
 */
const activeTab = ref('air-cooled')



/**
 * 第二标签页内容
 */
const tabPane2Content = ref([
  {
    image: buildImageUrl('image/img10.webp'),
    title: 'Refrigeration compressor',
    content: 'It uses the internationally renowned Japanese Panasonic brand compressor to provide continuous and strong power support for the refrigeration cycle system, with high energy efficiency, low noise, reliability and durability.'
  },
  {
    image: buildImageUrl('image/img11.webp'),
    title: 'Water pump',
    content: 'Equipped with high-quality impellers and energy-saving motors, it can accurately drive the circulation of cooling water, adapt to different flow and pressure requirements, operate stably, and have low energy consumption, ensuring the continuous circulation of water.'
  },
  {
    image: buildImageUrl('image/img12.webp'),
    title: 'Coil evaporator',
    content: 'It uses high-efficiency heat exchange copper tubes and optimized flow channel design, with high heat exchange efficiency, which can quickly convert refrigeration potential into low-temperature power and accelerate water cooling.'
  },
  {
    image: buildImageUrl('image/img13.webp'),
    title: 'Condenser',
    content: 'It adopts a structure that combines high-efficiency heat exchange fins and copper tubes, and cooperates with the top fan to force heat dissipation, which can quickly condense the gaseous refrigerant into liquid and ensure the recycling of the refrigerant.'
  },
  {
    image: buildImageUrl('image/img14.webp'),
    title: 'Fan',
    content: 'Low noise, high air volume, targeted assistance to condenser heat dissipation, accelerated heat dissipation, and significantly improved condensation efficiency.'
  },
  {
    image: buildImageUrl('image/img15.webp'),
    title: 'Pipeline interface',
    content: 'The nozzles are made of a corrosion-resistant alloy and feature clear functional areas, with the outlet, return, inlet, and drain ports clearly marked. Operational instructions and basic troubleshooting instructions are also provided.'
  },
  {
    image: buildImageUrl('image/img16.webp'),
    title: 'Electric control cabinet',
    content: 'Equipped with high-quality electrical components and modular circuit design, it has high integration and precise control, can quickly respond to temperature adjustment needs, and ensure stable equipment temperature.'
  },


])
</script>

<style scoped>
.key-component-tabs {
  width: 100%;

  >.title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    text-align: center;
    margin-top: 6.875vw;
    margin-bottom: 1.9792vw;
  }
}

.chiller-tabs :deep(.flex) {
  justify-content: center;
  gap: 1rem;
  border-bottom: none;

  button {
    font-size: .9375vw;

    &[data-state="active"] {
      font-weight: bold;
    }
  }
}

.tab-content {
  padding: 1rem 0;
  border-top: none;
}

.tab-pane {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(.2604vw);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-pane-2 {
  padding: 0 18.5938vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.6042vw 1.25vw;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 22.3958vw;

    .title {
      font-weight: bold;
      font-size: .8333vw;
      color: #000000;
      margin: .8333vw 0 .4167vw;
    }

    .content {
      font-weight: 400;
      font-size: .7292vw;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.0938vw;
    }
  }
}
</style>