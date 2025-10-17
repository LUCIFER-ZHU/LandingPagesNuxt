<template>
  <div class="faq-accordion">
    <h2 class="title">{{ title }}</h2>

    <UAccordion :items="accordionItems" :type="type" :collapsible="collapsible" :unmount-on-hide="unmountOnHide"
      :ui="{ item: 'ac-item', content: 'ac-content' }" v-model="activeValues">
      <!-- 1. Do Ouman trucks work in hot or rough environments? -->
      <template #hot-environments>
        <div class="que-1">
          <p class="text-style-common">Yes, tested in mining, desert, and port conditions worldwide.</p>
        </div>
      </template>

      <!-- 2. What certifications are required for exporting to Europe? Can you provide them? -->
      <template #certifications>
        <div class="que-2">
          <p class="text-style-common"><!-- Content will be expanded when clicked --></p>
        </div>
      </template>

      <!-- 3. Can we test the machine before purchasing? What payment methods are available? -->
      <template #test-payment>
        <div class="que-3">
          <p class="text-style-common"><!-- Content will be expanded when clicked --></p>
        </div>
      </template>

      <!-- 4. What do we need to prepare for the installation of the equipment? How long does the operator need training? -->
      <template #installation-training>
        <div class="que-4">
          <p class="text-style-common"><!-- Content will be expanded when clicked --></p>
        </div>
      </template>

      <!-- 5. Can old looms be used as a trade-in for new equipment? How is the price evaluated? -->
      <template #trade-in>
        <div class="que-5">
          <p class="text-style-common"><!-- Content will be expanded when clicked --></p>
        </div>
      </template>

    </UAccordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AccordionItem } from '@nuxt/ui'

const props = withDefaults(defineProps<{ title?: string; type?: 'single' | 'multiple'; collapsible?: boolean; unmountOnHide?: boolean }>(), {
  title: 'Frequently Asked Questions',
  type: 'multiple',
  collapsible: true,
  unmountOnHide: true
})

/** accordionItems：仅 label/value/slot */
const accordionItems = ref<AccordionItem[]>([
  { label: 'Do Ouman trucks work in hot or rough environments?', value: 'hot-environments', slot: 'hot-environments' },
  { label: 'What certifications are required for exporting to Europe? Can you provide them?', value: 'certifications', slot: 'certifications' },
  { label: 'Can we test the machine before purchasing? What payment methods are available?', value: 'test-payment', slot: 'test-payment' },
  { label: 'What do we need to prepare for the installation of the equipment? How long does the operator need training?', value: 'installation-training', slot: 'installation-training' },
  { label: 'Can old looms be used as a trade-in for new equipment? How is the price evaluated?', value: 'trade-in', slot: 'trade-in' }
])
/**
 * 默认全部展开的面板值数组
 * @description 所有手风琴项的 value，实现默认全部展开
 */
const activeValues = ref<string[]>([
  'hot-environments'
])
</script>

<style scoped>
.faq-accordion {
  width: 100%;
  padding: 0 18.75vw 1.875vw;
  background: #F9F9FB;

  .title {
    font-weight: bold;
    font-size: clamp(14px, 2.5vw, 2.5vw);
    color: #000000;
    margin-bottom: 3.0208vw;
  }
}

.text-style-bold {
  font-weight: bold;
  font-size: .9375vw;
  color: #020202;
}

.text-style-common {
  font-weight: 400;
  font-size: .8333vw;
  color: rgba(0, 0, 0, 0.6);
}

:deep(.ac-item) {
  margin-bottom: 1.5625vw;
  
  button {
    background: #020202;
    padding: 1.0417vw 1.3542vw;
    font-weight: bold;
    font-size: clamp(12px, .9375vw, .9375vw);
    color: #FFFFFF;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

:deep(.ac-content) {
  background: #fff;
  padding: 1.7708vw 1.3542vw;
}
</style>
