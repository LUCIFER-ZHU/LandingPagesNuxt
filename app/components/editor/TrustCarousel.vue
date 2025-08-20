<template>
  <div class="trust-carousel">
    <div class="title">Trusted by 100+ Clients Across Industries</div>

    <!-- 轮播图主体 -->
    <div class="carousel-container">
      <UCarousel ref="carouselRef" :items="slides" :ui="{
        item: 'basis-full',
      }" @select="onSlideSelect">
        <template #default="{ item }">
          <div v-if="item.number === 1" class="slide-content slide-content-1">
            <NuxtImg densities="1" :src="buildImageUrl('image/img3.webp')" alt="Indonesia Power Company"
              class="w-[31.1458vw] h-[23.3854vw]" />
            <div class="content">
              <div class="title">Indonesia Power Company</div>
              <div class="sub-title">– Cooling + Heat Recovery Solution</div>
              <div class="grid3">
                <div class="grid3-item">
                  <NuxtImg densities="1" :src="buildImageUrl('image/icon10.webp')" alt="icon" />
                  <div class="item">
                    <div class="title">Location: </div>
                    <div class="text">Border region near Xinjiang, China</div>
                  </div>
                </div>
                <div class="grid3-item">
                  <NuxtImg densities="1" :src="buildImageUrl('image/icon11.webp')" alt="icon" />
                  <div class="item">
                    <div class="title">Solution: </div>
                    <div class="text">MINNUO screw chiller + heat recovery chiller</div>
                  </div>
                </div>
                <div class="grid3-item">
                  <NuxtImg densities="1" :src="buildImageUrl('image/icon12.webp')" alt="icon" />
                  <div class="item">
                    <div class="title">Application:  </div>
                    <div class="text">Year-round equipment cooling & hot water generation</div>
                  </div>
                </div>
              </div>
              <div class="grid2">
                <div class="grid2-item">
                  <div class="title">
                    Highlights:
                  </div>
                  <div class="text">
                    Stable 24/7 equipment cooling<br>
                    Recovered waste heat for industrial hot water<br>
                    Lower upfront cost than traditional chiller + boiler system<br>
                    Energy-saving & low maintenance
                  </div>
                </div>
                <div class="grid2-item">
                  <div class="title">
                    Client Feedback:
                  </div>
                  <div class="text">
                    MINNUO helped us build a stable and energy-efficient cooling system. The heat recovery function
                    works perfectly.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="item.number === 2" class="slide-content">
            222222
          </div>
          <div v-if="item.number === 3" class="slide-content">
          </div>
          <div v-if="item.number === 4" class="slide-content">
          </div>
        </template>
      </UCarousel>
    </div>

    <!-- 底部控制按钮 -->
    <div class="carousel-controls">
      <div class="control-buttons">
        <UButton :disabled="currentSlide === 0" variant="outline" @click="goToPrevious"
          class="control-btn rounded-[50%] border-1 flex justify-center items-center">
          <UIcon name="i-heroicons-chevron-left" class="size-[2.0833vw]" />
        </UButton>

        <div class="slide-counter">
          {{ currentSlide + 1 }} / {{ slides.length }}
        </div>

        <UButton :disabled="currentSlide === slides.length - 1" variant="outline" trailing @click="goToNext"
          class="control-btn rounded-[50%] border-1 flex justify-center items-center">
          <UIcon name="i-heroicons-chevron-right" class="size-[2.0833vw]" />
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();
/**
 * TrustCarousel 组件 - 使用UCarousel的轮播图组件
 * 支持自定义每个slide内容，展示1234四个数字，支持点击切换
 */

/**
 * 轮播图组件引用
 */
const carouselRef = ref();

/**
 * 当前活跃的轮播项索引
 * @type {Ref<number>}
 */
const currentSlide = ref(0);

/**
 * 轮播图数据项
 * @type {Array<Object>} 包含number字段的轮播项数据
 */
const slides = ref([
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 }
]);

/**
 * 处理轮播图选择事件
 * @param {number} selectedIndex - 选中的索引
 */
const onSlideSelect = (selectedIndex: number) => {
  try {
    currentSlide.value = selectedIndex;
  } catch (error) {
    console.error('Error handling slide selection:', error);
  }
};

/**
 * 切换到上一张轮播图
 */
const goToPrevious = () => {
  try {
    if (carouselRef.value?.emblaApi) {
      carouselRef.value.emblaApi.scrollPrev();
    }
  } catch (error) {
    console.error('Error navigating to previous slide:', error);
  }
};

/**
 * 切换到下一张轮播图
 */
const goToNext = () => {
  try {
    if (carouselRef.value?.emblaApi) {
      carouselRef.value.emblaApi.scrollNext();
    }
  } catch (error) {
    console.error('Error navigating to next slide:', error);
  }
};

/**
 * 直接跳转到指定轮播图
 * @param {number} index - 目标轮播图索引
 */
const goToSlide = (index: number) => {
  try {
    if (index >= 0 && index < slides.value.length && carouselRef.value?.emblaApi) {
      carouselRef.value.emblaApi.scrollTo(index);
    }
  } catch (error) {
    console.error('Error navigating to slide:', error);
  }
};

// 对外暴露方法（可选）
defineExpose({
  goToPrevious,
  goToNext,
  goToSlide,
  currentSlide,
  carouselRef
});
</script>

<style lang="scss" scoped>
.trust-carousel {
  width: 100%;
  background: #f9f9fb;
  padding: 0 4.1667vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  >.title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    line-height: 3.75vw;
    text-align: center;
    margin-bottom: 2.5vw;
    width: 40.7813vw;
  }

  .carousel-container {
    width: 100%;
    margin-bottom: 1.5625vw;

    // UCarousel slide内容样式
    :deep(.slide-content) {
      width: 100%;
      height: 26.25vw;
      background: #ffffff;
      border-radius: 0.625vw;

      .slide-number {
        font-size: 5vw;
        font-weight: bold;
        color: #092991;
      }

      &.slide-content-1 {
        display: flex;
        align-items: center;

        img {
          flex-shrink: 0;
        }

        .content {
          padding: 2.6042vw 3.125vw;

          .title {
            font-weight: bold;
            font-size: 1.875vw;
            color: #000000;
            margin-bottom: .8854vw;
          }

          .sub-title {
            font-weight: 400;
            font-size: .8333vw;
            color: rgba(0, 0, 0, 0.6);
            margin-bottom: 1.9271vw;
          }

          .grid3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: .8854vw;
            margin-bottom: 1.875vw;

            .grid3-item {
              display: flex;
              align-items: flex-start;
              gap: .8333vw;

              .item {
                .title {
                  font-weight: bold;
                  font-size: .8333vw;
                  color: #000000;
                  margin-bottom: .8854vw;
                }

                .text {
                  font-weight: 400;
                  font-size: .8333vw;
                  color: rgba(0, 0, 0, 0.6);
                  line-height: 1.25vw;
                }
              }
            }
          }

          .grid2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: .8854vw;

            .grid2-item {
              background: #F9F9FB;
              border-radius: .625vw .625vw .625vw .625vw;
              padding: 1.0417vw 1.1458vw;

              .title {
                font-weight: bold;
                font-size: .8333vw;
                color: #000000;
              }

              .text {
                font-weight: 400;
                font-size: .8333vw;
                color: rgba(0, 0, 0, 0.6);
                line-height: 1.6667vw;
              }
            }
          }

        }
      }
    }


  }

  // 轮播控制按钮样式
  .carousel-controls {
    display: flex;
    justify-content: center;
    padding: 1.25vw 0;

    .control-buttons {
      display: flex;
      align-items: center;
      gap: 1.25vw;

      .slide-counter {
        font-weight: 400;
        font-size: 1.4583vw;
        color: #000000;
        padding: 0 1.25vw;
      }

      :deep(.control-btn) {
        width: 4.6875vw;
        height: 4.6875vw;
      }
    }
  }


}
</style>
