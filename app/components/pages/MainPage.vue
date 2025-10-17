<template>
  <div class="main-page">
    <!-- banner -->
    <div class="banner">
      <div class="content">
        <div class="title">Buy Ouman Trucks with Distributor Advantage</div>
        <div class="sub-title">Lower Price · Faster Delivery · Reliable After-Sales Service</div>
        <UButton class="default-btn" label="Request Catalog" @click="dialogOpen = true" />
      </div>
    </div>
    <!-- 工厂视频 -->
    <div class="factory-video">
      <div class="factory-video-content-video">
        <EditorVideoBox :videoUrl="buildImageUrl('/video/video1.mp4')" :coverImage="buildImageUrl('/image/img2.webp')"
          width="100%" height="26.1979vw" />
      </div>
      <div class="factory-video-content">
        <div class="content-box">
          <div class="left">
            Ouman Truck is one of China’s well-known heavy-duty truck manufacturers, delivering reliable solutions for
            logistics, construction, and mining industries.
            With EURO V/VI, EPA, and ISO certifications, Ouman trucks are already serving customers in 60+ countries
            worldwide.
          </div>
          <div class="right">
            <div class="right-box">
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon3.webp')" alt="icon" loading="lazy"
                class="w-[1.6667vw]" />
              <div class="right-box-text">Proven durability in harsh working environments</div>
            </div>
            <div class="right-box">
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon4.webp')" alt="icon" loading="lazy"
                class="w-[1.6667vw]" />
              <div class="right-box-text">International compliance for global markets</div>
            </div>
            <div class="right-box">
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon5.webp')" alt="icon" loading="lazy"
                class="w-[1.6667vw]" />
              <div class="right-box-text">Trusted by fleets across Africa, Middle East, Southeast Asia, and South
                America</div>
            </div>
          </div>
        </div>
        <div class="btn text-center">
          <UButton class="default-btn" label="Request Catalog" @click="dialogOpen = true" />
        </div>
      </div>
    </div>
    <!-- 产品系列 -->
    <div class="product-range">
      <div class="title">Product Range</div>
      <div class="sub-title">We supply the full line of Ouman heavy-duty trucks:</div>
      <div class="content">
        <div class="content-item" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img2.webp')" alt="img" loading="lazy" />
          <div class="content-item-title">Ouman Galaxy 9</div>
          <div class="content-item-text">For container & long-haul<br> transport</div>
        </div>
        <div class="content-item" data-aos="fade-down">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img2.webp')" alt="img" loading="lazy" />
          <div class="content-item-title">Ouman Galaxy 7</div>
          <div class="content-item-text">For container & long-haul<br> transport</div>
        </div>
        <div class="content-item" data-aos="fade-left">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img2.webp')" alt="img" loading="lazy" />
          <div class="content-item-title">Ouman Galaxy 5</div>
          <div class="content-item-text">For container & long-haul<br> transport</div>
        </div>
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Request Catalog" @click="dialogOpen = true" />
      </div>
    </div>
    <!-- 品牌对比表格 -->
    <EditorTrucksComparisonTable data-aos="fade-up" />
    <!-- 产品亮点 -->
    <div class="product-highlights">
      <div class="title">Product Highlights</div>
      <div class="sub-title">(Truck Features & Advantages)</div>
      <div class="content">
        <div class="left" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img2.webp')" alt="Highlights" loading="lazy" />
        </div>
        <div class="right">
          <div class="right-title">Luxury configuration</div>
          <div class="right-box">
            <NuxtImg densities="1" :src="buildImageUrl('/image/icon1.webp')" alt="icon" loading="lazy"
              class="w-[2.5vw]" />
            <div class="right-box-text">Panoramic windshield with reduced blind spots – safer driving, compliant with
              European Direct Vision Standard.</div>
          </div>
          <div class="right-box">
            <NuxtImg densities="1" :src="buildImageUrl('/image/icon2.webp')" alt="icon" loading="lazy"
              class="w-[2.5vw]" />
            <div class="right-box-text">Ergonomic seats designed for long-haul comfort – less fatigue, more
              productivity.</div>
          </div>
        </div>
      </div>
      <div class="content2">
        <div class="content2-box">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img3.webp')" alt="img" loading="lazy" class="bg-white"
            data-aos="fade-right" />
          <div class="content2-box-txt">
            <div class="title">Super Power Chain 5.0</div>
            <div class="text">Equipped with a Cummins engine and ZF transmission, the new Ouman truck integrates
              world-class components with advanced vehicle engineering. The result is up to 8% lower fuel consumption,
              stronger performance under heavy loads, and higher overall reliability—helping fleets reduce operating
              costs while ensuring long-term durability.</div>
          </div>
        </div>
        <div class="content2-box">
          <div class="content2-box-txt">
            <div class="title">Aerodynamic Design</div>
            <div class="text">Advanced body design with wind resistance coefficient ≤ 0.348 – resulting in better fuel
              efficiency and smoother driving.</div>
          </div>
          <NuxtImg densities="1" :src="buildImageUrl('/image/img4.webp')" alt="img" loading="lazy"
            data-aos="fade-left" />
        </div>
        <div class="content2-box">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img5.webp')" alt="img" loading="lazy"
            data-aos="fade-right" />
          <div class="content2-box-txt">
            <div class="title">Comfort for Long Journeys</div>
            <div class="text">Industry-leading cabin space (2125×2450×1538 mm) and the widest sleeper bed (1240 mm) –
              maximum driver comfort on the road.</div>
          </div>
        </div>
        <div class="content2-box">
          <div class="content2-box-txt">
            <div class="title">Superior Quality</div>
            <div class="text">Built with a high-strength body structure exceeding international standards, Ouman
              trucks
              deliver outstanding safety and durability. The cabin meets car-level air quality standards for a
              healthier
              driving environment, while the industry’s lightest vehicle weight ensures better fuel efficiency and
              higher payload capacity. With 30% improved corrosion resistance, every truck is designed to last
              longer—even in coastal, mining, or humid conditions.</div>
          </div>
          <NuxtImg densities="1" :src="buildImageUrl('/image/img6.webp')" alt="img" loading="lazy"
            data-aos="fade-left" />
        </div>
        <div class="content2-box">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img7.webp')" alt="img" loading="lazy"
            data-aos="fade-right" />
          <div class="content2-box-txt">
            <div class="title">Extreme Validation</div>
            <div class="text">Every Ouman truck undergoes over 40,000 hours of extreme testing, including ozone
              exposure, salt spray, temperature and humidity cycles, structural strength, and material analysis. These
              rigorous tests ensure durability, reliability, and long-lasting performance even under the harshest road
              and climate conditions.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 经销商优势 -->
    <div class="advantages">
      <div class="title">Distributor Advantages</div>
      <div class="sub-title">Why Buy from Us</div>
      <div class="sub-text">As the largest authorized Ouman distributor, we guarantee better deals<br> and stronger
        support than factory direct sales.</div>
      <div class="content">
        <div class="left" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img8.webp')" alt="img" loading="lazy" />
        </div>
        <div class="right">
          <div class="right-box"><b>Lower-than-factory price</b> through bulk purchasing power</div>
          <div class="right-box"><b>Flexible orders –</b> from 1 unit to bulk fleets</div>
          <div class="right-box"><b>Ready stock & faster delivery</b> without factory waiting times</div>
          <div class="right-box"><b>Full after-sales support</b> with spare parts guarantee</div>
          <div class="right-box">Trusted by buyers across Africa, Middle East, Southeast Asia, and South America</div>
          <UButton class="default-btn" label="Get Price Now" @click="dialogOpen = true" />
        </div>
      </div>
    </div>
    <!-- 案例 -->
    <div class="cases">
      <div class="grid3">
        <div class="grid3-item" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img4.webp')" alt="img" loading="lazy" />
          <div class="text">The trucks performed very well in our mining site, durable and reliable even in rough
            terrain.</div>
          <div class="name">– Joseph, Kenya</div>
        </div>
        <div class="grid3-item" data-aos="fade-down">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img4.webp')" alt="img" loading="lazy" />
          <div class="text">Comfortable cabin and lower fuel consumption compared to our old European trucks.</div>
          <div class="name">– Carlos, Chile</div>
        </div>
        <div class="grid3-item" data-aos="fade-left">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img4.webp')" alt="img" loading="lazy" />
          <div class="text">We purchased 10 units for port operations; delivery was fast and service was responsive.
          </div>
          <div class="name">– Ali, UAE</div>
        </div>
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Get Price Now" @click="dialogOpen = true" />
      </div>
    </div>
    <!-- 常见问题 -->
    <EditorTrucksFaqAccordion data-aos="fade-up" />
    <!-- 联系表单 -->
    <EditorTrucksContactForm />
    <!-- 挂载对话框组件 -->
    <EditorContactFormDialog v-model="dialogOpen" />
  </div>
</template>

<script setup lang="ts">
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();

// 使用联系表单组合函数
const {
  contactForm,
  handleFormSubmit,  // 添加兼容UForm的提交处理函数
  updateField,
  isSubmitting,
} = useContactForm();

// 控制对话框显示
const dialogOpen = ref(false)

// 页面 SEO 元信息（根据主页面内容定制）
useSeoMeta({
  // 标题
  title: 'Heavy Duty Trucks | Mining & Construction Vehicles | Ouman Trucks',
  ogTitle: 'Heavy Duty Trucks | Mining & Construction Vehicles | Ouman',

  // 描述
  description: 'Professional heavy duty trucks for mining, construction, and industrial applications. Durable, reliable vehicles designed for harsh environments. Get distributor pricing and technical support for your fleet needs.',
  ogDescription: 'Heavy duty trucks for mining and construction. Durable, reliable vehicles for harsh environments. Professional fleet solutions with distributor support.',

  // 关键词
  keywords: 'heavy duty trucks, mining trucks, construction vehicles, industrial trucks, fleet vehicles, off-road trucks, commercial vehicles, truck distributor, mining equipment, construction machinery, Ouman trucks',

  // 其他
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
})

const goExternal = () => {
  navigateTo("https://mncompressor.com/screw-air-compressor/", {
    external: true, open: {
      target: '_blank',
    }
  })
}
</script>

<style lang="scss" scoped>
.main-page {
  background-color: #f9f9fb;
}

:deep(.default-btn) {
  @include default-btn;
  @include button-hover-effect(-0.1042vw, 1.05, 0.98);

  // 自定义悬浮阴影效果
  &:hover {
    box-shadow: 0 .4167vw 1.3021vw rgba(246, 102, 24, 0.4);
  }
}

.banner {
  width: 100%;
  height: clamp(210px, 31.25vw, 31.25vw);
  background: #000;
  padding: 6.9271vw 45.2083vw 0 12.4479vw;

  .content {
    .title {
      font-weight: bold;
      font-size: clamp(14px, 3.3333vw, 3.3333vw);
      color: #FFFFFF;
    }

    .sub-title {
      font-weight: 400;
      font-size: clamp(12px, 1.3542vw, 1.3542vw);
      color: #FFFFFF;
      margin: .9375vw 0 2.0833vw;
    }
  }
}

.factory-video {
  padding: 3.6458vw 18.8021vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .factory-video-content-video {
    width: 100%;

    :deep(.video-box) {
      >div {
        border-radius: 0;
      }
    }
  }

  .factory-video-content {
    padding: 2.0833vw 3.125vw;
    background: #fff;

    .content-box {
      display: flex;
      gap: 3.6458vw;

      .left {
        width: 26.9792vw;
        flex-shrink: 0;
        font-weight: 400;
        font-size: clamp(12px, .8333vw, .8333vw);
        color: #020202;
        line-height: 2;
      }

      .right {
        display: flex;
        flex-wrap: wrap;

        .right-box {
          width: 50%;
          margin-bottom: 2.0833vw;
          display: flex;
          align-items: flex-start;
          gap: 1.0417vw;

          .right-box-text {
            font-weight: 400;
            font-size: clamp(12px, .8333vw, .8333vw);
            color: rgba(0, 0, 0, 0.6);
          }

          &:nth-child(3) {
            width: 100%;
          }
        }
      }
    }
  }
}

.product-range {
  padding: 1.5625vw 18.8021vw 5.2083vw;

  .title {
    font-weight: bold;
    font-size: clamp(14px, 3.3333vw, 3.3333vw);
    color: #020202;
    margin-bottom: 1.0417vw;
    text-align: center;
  }

  .sub-title {
    font-weight: 400;
    font-size: clamp(12px, 1.6667vw, 1.6667vw);
    color: #020202;
    margin-bottom: 4.6875vw;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5vw;
    margin-bottom: 2.9688vw;

    .content-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        @include hover-glow-effect;
      }

      .content-item-title {
        margin: 1.5625vw 0 .4167vw;
        font-weight: bold;
        font-size: 1.0417vw;
        color: #000000;
      }

      .content-item-text {
        font-weight: 400;
        font-size: .8333vw;
        color: #000000;
        text-align: center;
      }
    }
  }
}


.product-highlights {
  padding: 7.6563vw 6.4583vw 5.2083vw;


  >.title {
    font-weight: bold;
    font-size: clamp(14px, 3.3333vw, 3.3333vw);
    color: #020202;
    text-align: center;
  }

  >.sub-title {
    font-weight: 400;
    font-size: clamp(12px, 1.6667vw, 1.6667vw);
    color: #020202;
    text-align: center;
    margin-bottom: 3.9063vw;
  }

  >.content {
    display: flex;
    align-items: center;

    .left {
      width: 50.1563vw;
      flex-shrink: 0;

      img {
        @include hover-glow-effect;
      }
    }

    .right {
      padding: 3.8542vw 5.2083vw 1.0417vw;
      background: #FFFFFF;

      .right-title {
        font-weight: bold;
        font-size: clamp(14px, 1.6667vw, 1.6667vw);
        color: #020202;
        margin-bottom: 3.5417vw;
      }

      .right-box {
        display: flex;
        align-items: center;
        gap: 1.4583vw;
        margin-bottom: 3.5417vw;

        .right-box-text {
          font-weight: 400;
          font-size: clamp(12px, .9375vw, .9375vw);
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  >.content2 {
    padding: 4.5313vw 11.875vw;

    .content2-box {
      display: flex;
      align-items: center;
      gap: 1.25vw;
      margin-bottom: 1.9271vw;

      img {
        @include hover-glow-effect;
        flex-shrink: 0;
      }

      .content2-box-txt {
        padding: .9375vw;

        .title {
          font-weight: bold;
          font-size: clamp(14px, 1.6667vw, 1.6667vw);
          color: #020202;
          margin-bottom: 1.25vw;
        }

        .text {
          font-weight: 400;
          font-size: clamp(12px, .9375vw, .9375vw);
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}

.advantages {
  padding: 0 314px 0 18.8021vw;

  .title {
    font-weight: bold;
    font-size: clamp(14px, 3.3333vw, 3.3333vw);
    color: #020202;
    text-align: center;
    margin-bottom: 1.0417vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: clamp(12px, 1.6667vw, 1.6667vw);
    color: #020202;
    text-align: center;
    margin-bottom: 2.0833vw;
  }

  .sub-text {
    font-weight: 400;
    font-size: clamp(12px, 1.0417vw, 1.0417vw);
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    margin-bottom: 4.6875vw;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 2.6042vw;

    .left {
      width: 32.0313vw;
      flex-shrink: 0;

      img {
        @include hover-glow-effect;
      }
    }

    .right {
      .right-box {
        font-size: 1.0417vw;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 1.3021vw;

        b {
          color: #020202;
        }
      }
    }
  }
}

.cases {
  padding: 15.625vw 18.8021vw 5.2083vw;

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25vw;
    margin-bottom: 2.8646vw;

    .grid3-item {
      padding: 1.4063vw;
      background: #FFFFFF;

      img {
        @include hover-glow-effect;
      }

      .text {
        font-weight: 400;
        font-size: clamp(12px, 1.0417vw, 1.0417vw);
        color: #020202;
        margin: 1.25vw 0 1.8229vw;
      }

      .name {
        font-weight: 400;
        font-size: clamp(12px, 1.0417vw, 1.0417vw);
        color: #020202;
        text-align: right;
      }

    }
  }
}
</style>