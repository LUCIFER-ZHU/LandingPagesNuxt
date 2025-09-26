<template>
  <div class="main-page">
    <div class="banner" id="banner-anchor">
      <div class="banner-content">
        <div class="title">
          High-Pressure Oil-Free Diaphragm Compressors<br>
          for Hydrogen,Nitrogen,Oxygen,Helium,<br>
          Krypton, Xenon,Syngas & More
        </div>
        <div class="sub-title">
          <span>• Up to 1000 bar</span>
          <span>• Oil-Free Compression</span>
          <span>• CE/ISO Certified</span>
        </div>
        <UButton class="default-btn" label="Get A Quote Today" @click="dialogOpen = true" />
      </div>
    </div>
    <div class="reliable-sol" id="application-scenarios-anchor">
      <div class="title">Reliable Solution for Hydrogen Compression</div>
      <EditorVideoBox :videoUrl="buildImageUrl('/video/video1.mp4')" :coverImage="buildImageUrl('/image/img9.webp')"
        title="videos" width="62.5vw" height="35.1563vw" />
      <div class="content">
        <div class="text" data-aos="fade-right">
          Our diaphragm compressors are engineered to meet the demanding needs of hydrogen applications.
          <br><br></br>
          From <b>hydrogen refueling stations</b> to <b>cylinder filling, storage & transportation, and fuel cell
            supply,</b> we provide safe, reliable, and oil-free compression solutions trusted worldwide. Our machines
          deliver stable performance under ultra-high pressures, ensuring hydrogen purity and safety at every stage.
        </div>
        <div class="list" data-aos="fade-left">
          <div class="list-title">Bullet Points</div>
          <ul>
            <li>
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon1.webp')" alt="icon"
                class="w-[2.1875vw] h-[2.1875vw]" loading="lazy" />
              Handle pressures up to 1000 bar
            </li>
            <li>
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon2.webp')" alt="icon"
                class="w-[2.1875vw] h-[2.1875vw]" loading="lazy" />
              Oil-free compression for ultra-pure hydrogen
            </li>
            <li>
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon3.webp')" alt="icon"
                class="w-[2.1875vw] h-[2.1875vw]" loading="lazy" />
              Long service life with low maintenance
            </li>
            <li>
              <NuxtImg densities="1" :src="buildImageUrl('/image/icon4.webp')" alt="icon"
                class="w-[2.1875vw] h-[2.1875vw]" loading="lazy" />
              CE / ISO / ASME certified for global compliance
            </li>
          </ul>
        </div>
      </div>
      <div class></div>
    </div>
    <div class="pic-gallery" data-aos="fade-up">
      <div class="top">
        <NuxtImg densities="1" :src="buildImageUrl('/image/img4.webp')" alt="icon" loading="lazy"
          class="w-[50%] h-[22.9167vw]" />
        <NuxtImg densities="1" :src="buildImageUrl('/image/img5.webp')" alt="icon" loading="lazy" class="w-[28%]" />
        <div
          class="w-[22%] bg-[#F66618] flex flex-col justify-center items-center text-[#fff] font-bold text-[clamp(10px, 1.25vw, 24px)] leading-[2]">
          Contact us today <br>
          for your customized <br>
          hydrogen compression solution.
        </div>
      </div>
      <div class="bottom">
        <div class="w-[18%] bg-[#072D72] h-[22.9167vw]"></div>
        <NuxtImg densities="1" :src="buildImageUrl('/image/img6.webp')" alt="icon" loading="lazy"
          class="w-[32%] h-[22.9167vw]" />
        <NuxtImg densities="1" :src="buildImageUrl('/image/img7.webp')" alt="icon" loading="lazy"
          class="w-[50%] h-[22.9167vw]" />
      </div>
    </div>
    <div class="versatile-app">
      <div class="title">Versatile Applications Beyond Hydrogen</div>
      <div class="sub-title">While hydrogen is a primary focus, our diaphragm compressors are also widely used across
        other critical gases and industries.</div>
      <div class="types" data-aos="fade-up">
        <div class="types-item">
          <div class="title">N₂</div>
          <div class="sub-title">Nitrogen</div>
          <div class="description">For food packaging, electronics, and chemical industries.</div>
        </div>
        <div class="types-item">
          <div class="title">O₂</div>
          <div class="sub-title">Oxygen</div>
          <div class="description">For medical, aquaculture, and industrial processing.</div>
        </div>
        <div class="types-item">
          <div class="title">He</div>
          <div class="sub-title">Helium</div>
          <div class="description">For leak detection, electronics, and aerospace.</div>
        </div>
        <div class="types-item">
          <div class="title">Kr & Xe</div>
          <div class="sub-title">Krypton (Kr) & Xenon (Xe)</div>
          <div class="description">For lighting, medical imaging, and semiconductor industries.</div>
        </div>
        <div class="types-item">
          <div class="title">CO+H₂</div>
          <div class="sub-title">Syngas</div>
          <div class="description">For chemical synthesis, fuel production, and industrial energy.</div>
        </div>
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Explore All Applications " @click="dialogOpen = true" />
      </div>
    </div>
    <div class="what-is">
      <div class="title">What is Diaphragm Compressor ?</div>
      <EditorTypesCarousel :images="typeImages" width="62.5vw" height="auto" autoplay data-aos="fade-left" />
      <div class="content" data-aos="zoom-in">
        <div class="left">Diaphragm compressors are classified from reciprocating compressors.<br>A diaphragm compressor
          is a specially constructed volumetric compressor that uses a rotating diaphragm to compress air or gas. The
          rotating diaphragm helps to deliver air or gas within the compression chamber and applies the required
          pressure to deliver air in the desired area.
        </div>
        <div class="right">
          The cylinders are highly sealed, no lubrication is required, and the compressed gas medium avoids contact with
          any lubricant, so diaphragm compressors can compress gases of very high purity, typically up to 99.999%
          purity.
          Diaphragm compressor is especially suitable for the compression, transport, bottling of precious and rare
          gases,
          in addition to extremely corrosive, toxic, flammable and explosive, radioactive gases, also suitable for the
          use
          of diaphragm compressor.
        </div>
      </div>
    </div>
    <div class="why-choose" id="about-us-anchor">
      <NuxtImg densities="1" :src="buildImageUrl('/image/img8.webp')" alt="factory" loading="lazy" data-aos="zoom-in"
        class="w-[47.9688vw]" />
      <div class="right" id="our-service-anchor">
        <div class="title">Why Choose Minnuo Diaphragm Compressor?</div>
        <div class="content">
          Established in 1987, Min Group has been developing and manufacturing industrial diaphragm gas compressors.
          They are the preferred equipment for high purity, hermetic gas lift compression for hydrogen fuel stations,
          chemicals, oil, and gas, etc. We have developed H, D, L, V, and Z models and more than 30 product series for
          intelligent diaphragm gas compression systems.<br>
          <br>
          We can design and manufacture full instrumentation oil-free reciprocating diaphragm gas compression systems
          according to customer requirements.<br>
          Sizes range from 3 hp (2 kW) – 250 hp (186 kW). Output pressures range from 50 psi- 45,000 psi (3,100 bar).
        </div>
        <div class="grid4">
          <div class="grid4-item"><b>MINNUO's</b> diaphragm compressor can ensure that the gas and hydraulic oil are
            completely out of contact.</div>
          <div class="grid4-item"><b>MINNUO</b> will provide a detailed and complete maintenance plan for each machine.
          </div>
          <div class="grid4-item"><b>MINNUO</b> will conduct a series of tests on the compressor before it leaves the
            factory, including: explosion-proof test, raw material test, water pressure test, no-load and full-load
            test, etc.</div>
          <div class="grid4-item"><b>MINNUO's</b> compressor has comprehensive protection and alarm functions to ensure
            on-site safety.</div>
        </div>
      </div>
    </div>
    <div class="select-model" data-aos="zoom-in" id="products-anchor">
      <EditorSelectModelTabs />
    </div>
    <div class="tech-features">
      <div class="title">— Technology Features —</div>
      <EditorVideoBox :videoUrl="buildImageUrl('/video/video2.mp4')" :coverImage="buildImageUrl('/image/img19.webp')"
        title="videos" width="62.5vw" height="35.1563vw" />
      <div class="content">
        <div class="item">
          <div class="box">1</div>Compact transmission components for smoother operation.
        </div>
        <div class="item">
          <div class="box">2</div>Optimized oil system design eliminates oil leaks.
        </div>
        <div class="item">
          <div class="box">3</div>High energy efficiency, energy conservation, and environmental protection.
        </div>
        <div class="item item-4">
          <div class="box">4</div>Advanced membrane cavity curve and Hoerbiger air valve significantly increase the
          designed life of vulnerable parts, such as the diaphragm and air valve.
        </div>
        <div class="item">
          <div class="box">5</div>Highly automated control system.
        </div>
        <div class="item">
          <div class="box">6</div>Diaphragm leak alarm ensures safe operation.
        </div>
      </div>
    </div>
    <div class="case-project" id="project-cases-anchor">
      <div class="title">Case Project</div>
      <div class="grid lg:grid-cols-2 lg:gap-x-[2.7083vw] lg:gap-y-[1.7188vw]">
        <div class="box" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img20.webp')" alt="icon" loading="lazy" />
          <div class="title">2000Nm³/h hydrogen production and delivery integration project</div>
        </div>
        <div class="box" data-aos="fade-left">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img21.webp')" alt="icon" loading="lazy" />
          <div class="title">20MPA Hydrogen Compressor</div>
        </div>
        <div class="box" data-aos="fade-right">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img22.webp')" alt="icon" loading="lazy" />
          <div class="title">3000Nm³/h Coal to Hydrogen Project</div>
        </div>
        <div class="box" data-aos="fade-left">
          <NuxtImg densities="1" :src="buildImageUrl('/image/img23.webp')" alt="icon" loading="lazy" />
          <div class="title">Hydrogen Filling Diaphragm Compressor Project</div>
        </div>
      </div>
    </div>
    <div class="solution-form" id="contact-us-anchor">
      <EditorSolutionForm />
    </div>

    <!-- 挂载对话框组件 -->
    <EditorContactFormDialog v-model="dialogOpen" />
  </div>
</template>

<script setup lang="ts">
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();

// 使用联系表单组合函数 - 启用冷却系统数据
const {
  contactForm,
  handleFormSubmit,  // 添加兼容UForm的提交处理函数
  updateField,
  isSubmitting,
} = useContactForm({
  extraData: ['cooling']
});

// 控制对话框显示
const dialogOpen = ref(false)

const typeImages = [
  { url: buildImageUrl('/image/img10.webp'), alt: 'Hydrogen Compressor', description: 'Hydrogen Compressor' },
  { url: buildImageUrl('/image/img11.webp'), alt: 'Hydrogen Compressor', description: 'Hydrogen Compressor' },
  { url: buildImageUrl('/image/img12.webp'), alt: 'Nitrogen Compressor', description: 'Nitrogen Compressor' },
  { url: buildImageUrl('/image/img13.webp'), alt: 'Oxygen Compressor', description: 'Oxygen Compressor' },
]

// 页面 SEO 元信息（根据主页面内容定制）
useSeoMeta({
  // 标题
  title: 'Hydrogen Diaphragm Compressors | Up to 1000 bar | Oil‑Free | MINNUO',
  ogTitle: 'Hydrogen Diaphragm Compressors | Up to 1000 bar | Oil‑Free',

  // 描述
  description: 'High-pressure oil-free diaphragm compressors for hydrogen and other specialty gases. Up to 1000 bar, CE/ISO certified. Reliable solutions for refueling stations, cylinder filling, storage, transportation, and fuel cell supply.',
  ogDescription: 'High-pressure oil-free diaphragm compressors for hydrogen and specialty gases. Up to 1000 bar, CE/ISO certified. Reliable, clean and safe compression for refueling, storage and fuel cells.',

  // 关键词
  keywords: 'hydrogen compressor, diaphragm compressor, oil-free compressor, 1000 bar, CE ISO certified, hydrogen refueling station, cylinder filling, syngas, nitrogen compressor, oxygen compressor, helium compressor',

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
  background: url($image-base + '/image/img3.webp') no-repeat center/cover;
  padding: 6.0417vw 5.8854vw 0;

  .banner-content {
    .title {
      font-weight: bold;
      font-size: clamp(12px, 1.875vw, 1.875vw);
      color: #ffffff;
    }

    .sub-title {
      font-weight: bold;
      font-size: clamp(12px, .8333vw, .8333vw);
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 1.6667vw;
      color: #ffffff;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(10px, 2.0313vw, 2.0313vw) clamp(16px, 3.4896vw, 3.4896vw);
      width: clamp(300px, 34%, 34%);
      margin: 3.125vw 0;
    }

  }
}

.reliable-sol {
  padding: 3.4896vw 18.6458vw;
  background: #ffffff;

  .title {
    font-weight: bold;
    font-size: clamp(12px, 2.5vw, 2.5vw);
    color: #020202;
    margin-bottom: 3.125vw;
  }

  .video-box {
    margin-bottom: 1.7708vw;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.9167vw;

    .text {
      font-weight: 400;
      font-size: clamp(10px, .8333vw, .8333vw);
      color: rgba(0, 0, 0, 0.6);
      margin-top: 1.0417vw;

      b {
        color: #020202;
      }
    }

    .list {
      .list-title {
        font-weight: bold;
        font-size: clamp(12px, 1.0417vw, 1.0417vw);
        color: #020202;
        margin-bottom: 1.8229vw;
      }

      ul li {
        display: flex;
        gap: 1.25vw;
        margin-bottom: 1.5625vw;
        font-weight: bold;
        font-size: clamp(12px, 1.0417vw, 1.0417vw);
        color: #020202;
      }
    }
  }
}

.versatile-app {
  padding: 6.4583vw 18.8021vw 4.1667vw;
  background: #fff;

  >.title {
    font-weight: bold;
    font-size: clamp(12px, 2.5vw, 2.5vw);
    color: #020202;
    margin-bottom: 1.5625vw;
    text-align: center;
  }

  >.sub-title {
    font-weight: 400;
    font-size: clamp(10px, 1.25vw, 1.25vw);
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    margin-bottom: 1.7188vw;
  }

  .types {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-bottom: 2.1875vw;

    // 第一行三个（每个2列）
    .types-item:nth-child(1),
    .types-item:nth-child(2),
    .types-item:nth-child(3) {
      grid-column: span 2;
    }

    // 第二行两个（每个3列 = 1.5原来的列数）
    .types-item:nth-child(4),
    .types-item:nth-child(5) {
      grid-column: span 3;
    }

    .types-item {
      background: #072D72;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5625vw;
      @include hover-glow-effect;

      .title {
        font-weight: bold;
        font-size: clamp(12px, 3.3333vw, 3.3333vw);
        margin-bottom: .8333vw;
      }

      .sub-title {
        font-weight: 400;
        font-size: clamp(10px, 1.25vw, 1.25vw);
        margin-bottom: .8333vw;
      }

      .description {
        font-weight: 400;
        text-align: center;
        font-size: clamp(10px, 1.25vw, 1.25vw);
        color: #FFFFFF;
      }
    }

  }
}

.what-is {
  padding: 5.8854vw 18.8021vw;

  .title {
    font-weight: bold;
    font-size: clamp(12px, 2.5vw, 2.5vw);
    color: #020202;
    margin-bottom: 2.6563vw;
  }

  :deep(.btns) {
    justify-content: flex-start;

    .btn {
      width: 11.7188vw;
      height: 6.6146vw
    }
  }

  .content {
    margin-top: 2.0833vw;
    padding: 2.6042vw 5.8854vw;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.9167vw;

    .left {
      font-weight: 400;
      font-size: clamp(10px, .8333vw, .8333vw);
      color: #020202;
    }

    .right {
      font-weight: 400;
      font-size: clamp(10px, .8333vw, .8333vw);
      color: #020202;
    }
  }


}

.why-choose {
  padding: 0 9.375vw 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    flex-shrink: 0;
    margin: 4.1667vw 0;
  }

  .right {
    height: 100%;
    background: #FFFFFF;
    border-radius: .625vw;
    padding: 3.3854vw 3.6458vw;

    .title {
      font-weight: bold;
      font-size: clamp(12px, 2.5vw, 48px);
      color: #020202;
      margin-bottom: 2.4479vw;
    }

    .content {
      font-size: clamp(10px, .8333vw, 16px);
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 3.125vw;
    }

    .grid4 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4479vw 3.2813vw;

      .grid4-item {
        font-weight: 400;
        font-size: clamp(10px, .8333vw, 16px);
        color: rgba(0, 0, 0, 0.6);

        b {
          color: #020202;
        }
      }
    }
  }

}

.tech-features {
  padding: 0 18.2292vw 2.6042vw;

  .title {
    font-weight: bold;
    font-size: clamp(12px, 1.875vw, 1.875vw);
    color: #020202;
    margin-bottom: 2.3438vw;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4063vw;
    margin-top: 2.2396vw;

    .item {
      background: #FFFFFF;
      border-radius: .625vw;
      display: flex;
      align-items: center;
      padding: 2.0833vw;
      font-weight: 400;
      font-size: clamp(10px, .8333vw, 16px);
      color: rgba(0, 0, 0, 0.8);
      gap: 1.3542vw;

      .box {
        background: #072D72;
        border-radius: .625vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: clamp(12px, 1.25vw, 24px);
        color: #FFFFFF;
        width: 3.2292vw;
        height: 3.2292vw;
        flex-shrink: 0;
      }
    }

    .item-4 {
      grid-column: 1 / span 2;
      /* 横向跨两列 */
      grid-row: 2 / span 2;
      /* 纵向跨两行 */
    }
  }

}

.case-project {
  padding: 2.6042vw 18.75vw 3.75vw;

  >.title {
    font-weight: bold;
    font-size: clamp(12px, 2.5vw, 2.5vw);
    color: #020202;
    text-align: center;
    margin-bottom: 3.75vw;
  }

  .box {
    img {
      @include hover-glow-effect(-0.1vw, 1.02, #fff, #fff);
      width: 30.625vw;
      height: 19.5313vw;
      margin-bottom: 1.7188vw;
    }

    .title {
      font-weight: 400;
      font-size: clamp(10px, 1.25vw, 1.25vw);
      color: #020202;
      text-align: center;
      padding: 0 4.1667vw;
    }
  }
}

.pic-gallery {

  .top,
  .bottom {
    display: flex;
  }
}

.solution-form {
  padding: 3.75vw 0;
}
</style>