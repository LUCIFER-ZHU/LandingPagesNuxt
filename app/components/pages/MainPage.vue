<template>
  <div class="main-page">
    <div class="banner">
      <div class="banner-content">
        <div class="title">
          Industrial Temperature Control Solutions — Cooling & Heating
        </div>
        <div class="sub-title">
          MINNUO, Since 1987 — Not Just a Chiller, But a Full-Range <br>
          Thermal Management Partner for Your Factory
        </div>
        <ul class="description">
          <li>Energy-Efficient | EER > 5 | Stable 24/7 Operation</li>
          <li>Full Product Range: 3KW – 10,000KW Cooling or 25–300°C Heating</li>
          <li>CE & ISO Certified Manufacturing</li>
          <li>One-to-One Engineering Support</li>
        </ul>
        <UButton class="default-btn" label="Request Quote Now" @click="dialogOpen = true" />
      </div>
    </div>
    <!-- Estimated chiller system Cost -->
    <div class="estimated-chiller">
      <div class="title">
        Estimated chiller system Cost
      </div>
      <div class="content">
        <!-- 左侧联系信息表单 -->
        <div class="left-form">
          <div class="form-card">
            <UForm :state="contactForm" @submit="handleFormSubmit">
              <UFormField name="name" class="form-field">
                <UInput v-model="contactForm.name" placeholder="Name" />
              </UFormField>
              <UFormField name="email" class="form-field">
                <UInput v-model="contactForm.email" placeholder="E-mail" type="email" />
              </UFormField>
              <UFormField name="whatsapp" class="form-field">
                <UInput v-model="contactForm.whatsapp" placeholder="WhatApp (Tel)" />
              </UFormField>
              <UFormField name="message" class="form-field">
                <UTextarea v-model="contactForm.message" placeholder="Your Message" :rows="4" />
              </UFormField>
              <UButton type="submit" color="primary" class="send-btn">
                Send
              </UButton>
            </UForm>
          </div>
        </div>
        <!-- 右侧冷却系统配置 -->
        <div class="right-form">
          <div class="form-card flex flex-wrap">
            <div class="config-section sec1 shrink-0">
              <h3 class="section-title">Cooling Capacity</h3>
              <EditorCoolingCapacitySlider v-model="contactForm.coolingCapacity" />
              <UInputNumber v-model="contactForm.coolingCapacity" :min="3" :max="10000" orientation="vertical"
                placeholder="Enter a number" class="float-end mt-[.5208vw]" />
            </div>

            <div class="config-section sec2 shrink-0">
              <h3 class="section-title">What's the water temperature range?</h3>
              <UInput class="w-[15.9375vw]" v-model="contactForm.waterTempRange"
                placeholder="Enter temperature range" />
            </div>

            <div class="config-section sec3 shrink-0">
              <h3 class="section-title">Preferred cooling method?</h3>
              <div class="button-group">
                <UButton variant="outline" :color="contactForm.coolingMethod === 'air' ? 'primary' : 'neutral'"
                  @click="updateField('coolingMethod', 'air')">
                  Air-cooled
                </UButton>
                <UButton variant="outline" :color="contactForm.coolingMethod === 'water' ? 'primary' : 'neutral'"
                  @click="updateField('coolingMethod', 'water')">
                  Water-cooled
                </UButton>
              </div>
            </div>

            <div class="config-section sec4 shrink-0">
              <h3 class="section-title">Power supply available?</h3>
              <div class="button-group">
                <UButton variant="outline" :color="contactForm.powerSupply === '220V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '220V' }" @click="updateField('powerSupply', '220V')">
                  220V
                </UButton>
                <UButton variant="outline" :color="contactForm.powerSupply === '380V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '380V' }" @click="updateField('powerSupply', '380V')">
                  380V
                </UButton>
                <UButton variant="outline" :color="contactForm.powerSupply === '440V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '440V' }" @click="updateField('powerSupply', '440V')">
                  440V
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Industrial Chiller Unit Types -->
    <div class="unit-types">
      <div class="title">
        Industrial Chiller Unit Types
      </div>
      <div class="sub-title">
        MINNUO offers air-cooled, water-cooled, screw and low-temp chillers from 3KW to 10000KW.Factory direct • Export
        ready • Customizable • CE & ISO Certified
      </div>
      <div class="industrial">
        <div class="section-title">Industrial Chillers</div>
        <div class="products-grid">
          <!-- Air-Cooled Chiller -->
          <div class="product-card">
            <div class="product-image">
              <NuxtImg densities="1" :src="buildImageUrl('image/img1.webp')" alt="Air-Cooled Chiller" />
            </div>
            <div class="product-info">
              <h3 class="product-name">Air-Cooled Chiller</h3>
              <div class="specs flex flex-wrap">
                <div class="spec-item w-[50%]">
                  <div class="label">Temp Range:</div>
                  <div class="value">5°C - 30°C</div>
                </div>
                <div class="spec-item  w-[50%]">
                  <div class="label">Compressor:</div>
                  <div class="value">Scroll/Screw Type</div>
                </div>
                <div class="spec-item  w-[50%]">
                  <div class="label">Refrigerant:</div>
                  <div class="value">R22 / R134a</div>
                </div>
                <div class="spec-item  w-[50%]">
                  <div class="label">Refrigeration Range:</div>
                  <div class="value">25KW - 7875KW</div>
                </div>
                <div class="spec-item  w-[100%]">
                  <div class="label">Applications:</div>
                  <div class="value">Plastics, Laser, HVAC</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Water-Cooled Chiller -->
          <div class="product-card">
            <div class="product-image">
              <NuxtImg densities="1" :src="buildImageUrl('image/img2.webp')" alt="Water-Cooled Chiller" />
            </div>
            <div class="product-info">
              <h3 class="product-name">Water-Cooled Chiller</h3>
              <div class="specs flex flex-wrap">
                <div class="spec-item w-[50%]">
                  <div class="label">Temp Range:</div>
                  <div class="value">5°C - 30°C</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Water Tower:</div>
                  <div class="value">Required</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Refrigerant:</div>
                  <div class="value">R22 / R134a</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Refrigeration Range:</div>
                  <div class="value">70KW - 10000KW</div>
                </div>
                <div class="spec-item w-[100%]">
                  <div class="label">Applications:</div>
                  <div class="value">Injection molding, Industry cooling</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Low-Temperature Chiller -->
          <div class="product-card">
            <div class="product-image">
              <NuxtImg densities="1" :src="buildImageUrl('image/img3.webp')" alt="Low-Temperature Chiller" />
            </div>
            <div class="product-info">
              <h3 class="product-name">Low-Temperature Chiller</h3>
              <div class="specs flex flex-wrap">
                <div class="spec-item w-[50%]">
                  <div class="label">Temp Range:</div>
                  <div class="value">-80°C - 0°C</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Anti-freeze:</div>
                  <div class="value">Protection included</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Refrigerant:</div>
                  <div class="value">R404A / R22</div>
                </div>
                <div class="spec-item w-[50%]">
                  <div class="label">Refrigeration Range:</div>
                  <div class="value">55KW - 2439KW</div>
                </div>
                <div class="spec-item w-[100%]">
                  <div class="label">Applications:</div>
                  <div class="value">Electroplating, Pharma, Chemical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="controller">
        <div class="section-title">Mold Temperature Controllers</div>
        <div class="products-grid grid2">
          <!-- Oil Type Mold Temperature Controller -->
          <div class="product-card">
            <div class="product-image">
              <NuxtImg densities="1" :src="buildImageUrl('image/img4.webp')"
                alt="Oil Type Mold Temperature Controller" />
            </div>
            <div class="product-info">
              <h3 class="product-name">Oil Type Mold Temperature Controller</h3>
              <div class="specs flex flex-wrap">
                <div class="spec-item w-[25%]">
                  <div class="label">Heating Power:</div>
                  <div class="value">3 - 72 kW</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Heating Medium:</div>
                  <div class="value">Thermal Oil</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Temperature Range:</div>
                  <div class="value">3°C - 350°C</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Accuracy:</div>
                  <div class="value">±0.1°C</div>
                </div>
                <div class="spec-item w-[100%]">
                  <div class="label">Applications:</div>
                  <div class="value">Die casting, Rubber molding, High-temp processes</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Water Type Mold Temperature Controller -->
          <div class="product-card">
            <div class="product-image">
              <NuxtImg densities="1" :src="buildImageUrl('image/img5.webp')"
                alt="Water Type Mold Temperature Controller" />
            </div>
            <div class="product-info">
              <h3 class="product-name">Water Type Mold Temperature Controller</h3>
              <div class="specs flex flex-wrap">
                <div class="spec-item w-[25%]">
                  <div class="label">Heating Power:</div>
                  <div class="value">3 - 24 kW</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Heating Medium:</div>
                  <div class="value">Water</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Temperature Range:</div>
                  <div class="value">10°C - 180°C</div>
                </div>
                <div class="spec-item w-[25%]">
                  <div class="label">Accuracy:</div>
                  <div class="value">±0.1°C</div>
                </div>
                <div class="spec-item w-[100%]">
                  <div class="label">Applications:</div>
                  <div class="value">Injection molding, Blow molding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Tell Us Your Needs" @click="dialogOpen = true" />
      </div>
    </div>

    <!-- Not sure which system fits your process? -->
    <div class="not-sure h-[26.25vw] flex justify-center items-center">
      <div
        class="img-box w-[52.4479vw] h-[26.25vw] bg-[rgba(16,75,212,0.04)] flex justify-end items-center overflow-hidden">
        <NuxtImg densities="1" :src="buildImageUrl('image/img6.webp')" alt="Not sure which system fits your process?"
          class="translate-y-[-2.0833vw]" />
      </div>
      <div class="content w-[47.8125vw] pl-[4.4271vw]">
        <div class="title w-[28.9583vw]">
          Not sure which system fits your process?
        </div>
        <div class="sub-title w-[27.1354vw]">
          Contact our engineers for a free consultation and selection guide.
        </div>
        <div class="btn">
          <UButton class="default-btn" label="Get a Quote" @click="dialogOpen = true" />
        </div>
      </div>
    </div>

    <!-- Key Components of an Industrial Chiller Unit -->
    <EditorKeyComponentTabs />

    <!-- Do You Need Clean -->
    <div class="need-clean">
      <div class="title">
        Do You Need Clean, Stable Air Supply Too?
      </div>
      <NuxtImg densities="1" :src="buildImageUrl('image/banner2.webp')"
        alt="Do You Need Clean, Stable Air Supply Too?" />
      <div class="sub-title">
        Pair your chiller with a professional air compressor solution.
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="See Our Air Compressor series" @click="dialogOpen = true" />
      </div>
    </div>

    <!-- Who We Are -->
    <div class="who-we-are">
      <div class="title">
        Who We Are
      </div>
      <div class="sub-title">
        Your Cooling Solution Partner
      </div>
      <div class="banner">
        <div class="text">
          MINNUO is a professional industrial chiller manufacturer with over 38 years of experience, dedicated to
          providing turnkey temperature control solutions for various industries.From standard units to fully customized
          systems, we deliver reliable, energy-efficient chillers designed for your specific environment and workflow.
        </div>
      </div>
      <div class="icons">
        <div class="icon-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/icon1.webp')" alt="icon1" />
          <div class="icon-item-title">
            CE & ISO <br>
            Certified Factory
          </div>
        </div>
        <div class="icon-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/icon2.webp')" alt="icon2" />
          <div class="icon-item-title">
            3,000+ Units <br>
            Exported Worldwide
          </div>
        </div>
        <div class="icon-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/icon3.webp')" alt="icon3" />
          <div class="icon-item-title">
            1:1 Technical <br>
            Guidance & Design
          </div>
        </div>
        <div class="icon-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/icon4.webp')" alt="icon4" />
          <div class="icon-item-title">
            OEM / ODM Available
          </div>
        </div>
        <div class="icon-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/icon5.webp')" alt="icon5" />
          <div class="icon-item-title">
            Full Documentation for Export
          </div>
        </div>
      </div>
      <div class="btn text-center">
        <UButton class="default-btn" label="Contact Us" @click="dialogOpen = true" />
      </div>
    </div>

    <!--what problems -->
    <div class="what-problems">
      <div class="left">
        <div class="title">What Problems Are You Trying to Solve?</div>
        <div class="content">
          <div class="box">
            <div class="blue-box">?</div>
            <div class="text">Temperature fluctuation affecting your process quality?</div>
          </div>
          <div class="box">
            <div class="blue-box">?</div>
            <div class="text">Equipment overheating and frequent alarms?</div>
          </div>
          <div class="box">
            <div class="blue-box">?</div>
            <div class="text">Unsure whether to choose air-cooled or water-cooled?</div>
          </div>
          <div class="box">
            <div class="blue-box">?</div>
            <div class="text">Tight budget but complex cooling demands?</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">MINNUO doesn’t just sell chiller units — we deliver complete cooling solutions:</div>
        <div class="content">
          <div class="box">
            <NuxtImg densities="1" :src="buildImageUrl('image/icon6.webp')" alt="icon" />
            <div class="text">On-demand model selection</div>
          </div>
          <div class="box">
            <NuxtImg densities="1" :src="buildImageUrl('image/icon7.webp')" alt="icon" />
            <div class="text">Air / water cooling options based on site</div>
          </div>
          <div class="box">
            <NuxtImg densities="1" :src="buildImageUrl('image/icon8.webp')" alt="icon" />
            <div class="text">1-on-1 technical support</div>
          </div>
          <div class="box">
            <NuxtImg densities="1" :src="buildImageUrl('image/icon9.webp')" alt="icon" />
            <div class="text">Full specs and piping diagrams</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn text-center mb-[6.3021vw]">
      <UButton class="default-btn" label="Get My Cooling Solution" @click="dialogOpen = true" />
    </div>

    <!-- Trust Carousel -->
    <EditorTrustCarousel />

    <!-- factory-videos -->
    <div class="factory-videos">
      <div class="video-box-container">
        <EditorVideoBox :videoUrl="buildImageUrl('video/90kw.mp4')" :coverImage="buildImageUrl('image/img7.webp')"
          title="Factory Videos" />
        <div class="text">90kw high temperature oil type mold temperature controller</div>
      </div>
      <div class="video-box-container">
        <EditorVideoBox :videoUrl="buildImageUrl('video/100HP.mp4')" :coverImage="buildImageUrl('image/img8.webp')"
          title="Factory Videos" />
        <div class="text">100HP air-cooled chiller with water tank</div>
      </div>
      <div class="video-box-container">
        <EditorVideoBox :videoUrl="buildImageUrl('video/Chiller.mp4')" :coverImage="buildImageUrl('image/img9.webp')"
          title="Factory Videos" />
        <div class="text">Chiller workshop display</div>
      </div>
    </div>

    <!-- try-solve -->
    <div class="try-solve">
      <div class="title">What Problems Are You Trying to Solve?</div>
      <div class="content">
        <div class="left">
          <div class="box">
            <div class="num">1</div>
            <div class="num-content">
              <div class="title">Cooling Capacity</div>
              <div class="text">
                Indicates how much heat the chiller can remove per hour. Calculated based on equipment heat load:<br>
                Q = C × M × ΔT<br>
                (Heat capacity × Flow rate × Temp difference).<br>
                ⚠️ Recommend reserving 10–20% extra capacity for peak loads.<br>
                Unit: kW / kcal/h / USRT (1 USRT ≈ 3.517 kW)
              </div>
            </div>
          </div>
          <div class="box">
            <div class="num">2</div>
            <div class="num-content">
              <div class="title">Water Flow Rate</div>
              <div class="text">
                Matches cooling capacity. Typically:<br>
                1 kW ≈ 3–5 L/min<br>
                Ensures effective heat exchange.<br>
                Unit: m³/h or L/min
              </div>
            </div>
          </div>
          <div class="box">
            <div class="num">3</div>
            <div class="num-content">
              <div class="title">Inlet/Outlet Water<br>
                Temperature</div>
              <div class="text">
                Affects cooling calculation and heat exchanger sizing.<br>
                Common ΔT: 5°C<br>
                Smaller ΔT = higher efficiency, but requires larger heat exchanger.
              </div>
            </div>
          </div>
          <div class="box">
            <div class="num">4</div>
            <div class="num-content">
              <div class="title">Cooling Method</div>
              <div class="text">
                Water-cooled: Needs cooling tower, suitable for large capacity or high-temperature environments.<br>
                Air-cooled: No water source needed, ideal for dry or mobile setups.<br>
                ⚠️ Above 35°C, air-cooled efficiency may drop by 8–12%.
              </div>
            </div>
          </div>
          <div class="box">
            <div class="num">5</div>
            <div class="num-content">
              <div class="title">Power Supply</div>
              <div class="text">
                Match voltage and frequency:<br>
                Typical: 220V / 380V / 50Hz<br>
                Units >200 kW need 3-phase power<br>
                Confirm max power capacity on-site.
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="title">
            Fill in your application details<br>
            — we’ll match the right model within 24 hours.
          </div>
          <UForm :state="contactForm" @submit="handleFormSubmit">
            <UFormField name="name" class="form-field">
              <UInput v-model="contactForm.name" placeholder="Name" />
            </UFormField>
            <UFormField name="email" class="form-field">
              <UInput v-model="contactForm.email" placeholder="E-mail" type="email" />
            </UFormField>
            <UFormField name="whatsapp" class="form-field">
              <UInput v-model="contactForm.whatsapp" placeholder="WhatApp (Tel)" />
            </UFormField>
            <UFormField name="message" class="form-field">
              <UTextarea v-model="contactForm.message" placeholder="Your Message" :rows="4" />
            </UFormField>
            <UButton type="submit" color="primary" class="send-btn">
              Send My Request
            </UButton>
            <div class="tip">Response within 24 hours</div>
          </UForm>
        </div>
      </div>
    </div>

    <!-- guarantee -->
    <div class="guarantee">
      <div class="title">
        Logistics and delivery guarantee
      </div>
      <div class="sub-title">
        Export-Ready, Globally Trusted
      </div>
      <div class="content">
        <div class="box">
          Export-standard <br>
          packaging
        </div>
        <div class="box">
          CE, ISO, Form E/C/O <br>
          Available
        </div>
        <div class="box">
          Door-to-door logistics<br>
          supported
        </div>
        <div class="box">
          Online installation & <br>
          after-sale guidance
        </div>
      </div>
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
} = useContactForm({
  extraData: ['cooling']
});

// 控制对话框显示
const dialogOpen = ref(false)
</script>

<style lang="scss" scoped>
.main-page {
  background-color: #f9f9fb;

  >.banner {
    width: 100%;
    height: 31.25vw;
    background: url($image-base + 'image/banner.webp') no-repeat center/cover;
    padding: 5.5729vw 55.1563vw 5.5729vw 4.8958vw;

    .banner-content {
      .title {
        font-weight: bold;
        font-size: 1.875vw;
        color: #000000;
        line-height: 2.8125vw;
        margin-bottom: .5208vw;
      }

      .sub-title {
        font-weight: bold;
        font-size: .9375vw;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.4063vw;
        margin-bottom: 1.6667vw;
      }

      .description {
        font-weight: 400;
        font-size: .625vw;
        color: #000000;
        line-height: 1.25vw;
        margin-bottom: 1.6667vw;

        li {
          position: relative;
          padding-left: 1.0417vw;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: .2083vw;
            height: .2083vw;
            background-color: #000000;
            border-radius: 50%;
          }
        }

      }
    }
  }
}

:deep(.default-btn) {
  @include default-btn;
}

/* 估算冷却系统成本表单样式 */
.estimated-chiller {
  padding: 3.125vw 18.75vw 0;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    line-height: 3.75vw;
    text-align: center;
    margin-bottom: 2.6042vw;
  }

  .content {
    display: flex;
    gap: 1.25vw;

    .left-form {
      width: 25vw;

      .form-field {
        margin-bottom: .8333vw;
      }

      :deep(input),
      :deep(textarea) {
        background: #F9F9FB;
        border-radius: .4167vw .4167vw .4167vw .4167vw;
        padding: .9375vw 1.6667vw;
        width: 21.875vw;
      }

    }

    .right-form {
      width: 36.4583vw;
    }

    .form-card {
      background: #FFFFFF;
      border-radius: .625vw .625vw .625vw .625vw;
      padding: 1.9271vw 1.5625vw 2.1875vw;
      height: 100%;
    }

    :deep(.send-btn) {
      width: 100%;
      margin-top: 1.0417vw;
      padding: .8333vw 1.6667vw;
      font-weight: bold;
      font-size: .9375vw;
      color: #FFFFFF;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .config-section {
      &.sec1 {
        margin-bottom: 3.125vw;
        width: 100%;

        .section-title {
          margin-bottom: 3.75vw;
        }
      }

      &.sec2 {
        margin-bottom: 2.6042vw;
        width: 55%;
      }

      &.sec3 {
        margin-bottom: 2.6042vw;
        width: 45%;
      }

      .section-title {
        font-weight: bold;
        font-size: .8333vw;
        color: #000000;
        margin-bottom: .8333vw;
      }



      .button-group {
        display: flex;
        gap: .8333vw;

        :deep(button) {
          font-size: .8333vw;
          color: #000000;

          &.active {
            color: #092991;
          }
        }
      }
    }
  }
}

/* 产品展示样式 */
.unit-types {
  padding: 3.125vw 18.75vw 5.3646vw;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    line-height: 3.75vw;
    text-align: center;
    margin-bottom: 1.0417vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: .8333vw;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.25vw;
    text-align: center;
    margin-bottom: 3.5417vw;
  }

  .industrial,
  .controller {
    margin-bottom: 4.1667vw;

    .section-title {
      font-weight: bold;
      font-size: 1.875vw;
      color: #000000;
      margin-bottom: 2.5521vw;
      text-align: left;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25vw;

      &.grid2 {
        grid-template-columns: repeat(2, 1fr);
      }

      .product-card {
        background: #FFFFFF;
        border-radius: .625vw;
        padding: .9375vw 1.25vw;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-.2083vw);
          box-shadow: 0 .4167vw 1.25vw rgba(0, 0, 0, 0.15);
        }

        .product-image {
          width: 100%;
          height: 15.625vw;
          margin-bottom: .625vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-info {
          .product-name {
            font-weight: bold;
            font-size: .8333vw;
            color: #000000;
            margin-bottom: .6771vw;
          }

          .spec-item {
            margin-bottom: .625vw;

            .label {
              font-weight: 400;
              font-size: .625vw;
              color: rgba(0, 0, 0, 0.6);
            }

            .value {
              font-weight: bold;
              font-size: .625vw;
              color: #020202;
            }
          }
        }

      }
    }
  }
}


.not-sure {
  .content {
    .title {
      font-weight: bold;
      font-size: 1.875vw;
      color: #000000;
      line-height: 1.875vw;
      margin-bottom: 2.1354vw;
    }

    .sub-title {
      font-weight: 400;
      font-size: 1.25vw;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.875vw;
      margin-bottom: 2.1354vw;
    }
  }
}

.who-we-are {
  padding-top: 7.0833vw;

  .title {
    font-weight: bold;
    font-size: 1.875vw;
    color: #092991;
    text-align: center;
    margin-bottom: .5208vw;
  }

  .sub-title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    text-align: center;
    margin-bottom: 1.0417vw;
  }

  .banner {
    height: 20.8333vw;
    background: url($image-base + 'image/banner1.webp') no-repeat center/cover;
    font-weight: bold;
    font-size: 1.25vw;
    color: #FFFFFF;
    line-height: 1.875vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      width: 61.1979vw;
      text-align: center;
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.125vw;
    padding: 4.0625vw 20.8854vw;
    background-color: #FFFFFF;

    .icon-item {
      width: 100%;
      min-height: 10.625vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon-item-title {
        margin-top: 1.3542vw;
        font-weight: bold;
        font-size: .8333vw;
        color: #000000;
        line-height: 1.6667vw;
        text-align: center;
      }
    }
  }

  .btn {
    background-color: #FFFFFF;
    padding-bottom: 3.2292vw;
  }
}


.what-problems {
  padding: 3.3333vw 18.4375vw 1.8229vw;
  display: flex;
  gap: 1.25vw;
  justify-content: center;
  align-items: center;

  .left,
  .right {
    background: #FFFFFF;
    border-radius: .625vw .625vw .625vw .625vw;
    flex: 0 0 50%;
    height: 32.1354vw;

    .title {
      font-weight: bold;
      font-size: 1.25vw;
      color: #000000;
      line-height: 1.875vw;
    }

    .text {
      font-weight: 400;
      font-size: .9375vw;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.4063vw;
    }
  }

  .left {
    padding: 3.9063vw 2.7083vw 2.5vw;

    .title {
      margin-bottom: 3.2292vw;
    }

    .box {
      display: flex;
      gap: 1.6146vw;
      align-items: center;
      margin-bottom: 3.125vw;

      &:last-child {
        margin-bottom: 0;
      }

      .blue-box {
        width: 2.5vw;
        height: 2.5vw;
        font-weight: bold;
        font-size: .9375vw;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #092991;
        flex-shrink: 0;
      }
    }
  }

  .right {
    padding: 2.5521vw 2.6042vw 2.8646vw;

    .title {
      margin-bottom: 3.75vw;
    }

    .box {
      display: flex;
      gap: 1.6146vw;
      align-items: center;
      margin-bottom: 2.9167vw;
    }

  }
}

.need-clean {
  padding: 6.25vw 18.75vw 0;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    line-height: 3.75vw;
    text-align: center;
    margin-bottom: 2.5vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: 1.25vw;
    color: #000000;
    line-height: 1.875vw;
    text-align: center;
    margin: 1.5104vw 0;
  }
}

.factory-videos {
  display: flex;
  padding: 5.2083vw 18.5938vw 2.9167vw;
  gap: 1.25vw;
  justify-content: center;
  align-items: center;

  .video-box-container {
    width: 20vw;
    height: 18.4896vw;
    padding: 2.6042vw 1.3021vw 1.4583vw;
    background: #FFFFFF;
    border-radius: .625vw .625vw .625vw .625vw;

    .text {
      font-weight: 400;
      font-size: .8333vw;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.25vw;
      margin-top: 2.7083vw;
    }
  }
}

.try-solve {
  >.title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    text-align: center;
    margin-bottom: 3.0208vw;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25vw;

    .left {
      min-height: 39.375vw;
      background: #FFFFFF;
      border-radius: 0vw 0vw 0vw 0vw;
      padding: 2.4479vw 2.9167vw;
      width: 47.2396vw;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.1875vw;

      .box {
        display: flex;
        gap: 1.25vw;

        .num {
          width: 2.6042vw;
          height: 2.6042vw;
          background: #092991;
          border-radius: 0vw 0vw 0vw 0vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          font-weight: bold;
          font-size: 1.25vw;
          color: #FFFFFF;
        }

        .num-content {
          .title {
            font-weight: bold;
            font-size: 1.25vw;
            color: #000000;
            margin-bottom: .4167vw;
          }

          .text {
            font-weight: 400;
            font-size: .7292vw;
            color: rgba(0, 0, 0, 0.6);
            line-height: 1.0938vw;
            text-align: left;
          }
        }
      }
    }

    .right {
      min-height: 39.375vw;
      background: #FFFFFF;
      border-radius: 0vw 0vw 0vw 0vw;
      padding: 1.875vw 1.5625vw;
      width: 25vw;

      .title {
        font-weight: bold;
        font-size: 1.25vw;
        color: #020202;
        line-height: 1.875vw;
        margin-bottom: 1.25vw;
      }

      .form-field {
        margin-bottom: .8333vw;
      }

      :deep(input),
      :deep(textarea) {
        background: #F9F9FB;
        border-radius: .4167vw .4167vw .4167vw .4167vw;
        padding: .9375vw 1.6667vw;
        width: 21.875vw;
      }

      :deep(.send-btn) {
        width: 100%;
        margin-top: 2.6563vw;
        margin-bottom: .8333vw;
        padding: .8333vw 1.6667vw;
        font-weight: bold;
        font-size: .9375vw;
        color: #FFFFFF;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .tip {
        font-weight: bold;
        font-size: .8333vw;
        color: rgba(0, 0, 0, 0.4);
        text-align: center;
      }
    }
  }
}

.guarantee {
  padding: 6.5104vw;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    text-align: center;
    margin-bottom: .5208vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: 1.875vw;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.5625vw;
    text-align: center;
    margin-bottom: 3.75vw;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25vw;

    .box {
      padding: 1.5625vw 3.6458vw;
      background: #092991;
      border-radius: .625vw .625vw .625vw .625vw;
      font-weight: bold;
      font-size: .8333vw;
      color: #FFFFFF;
      line-height: 1.6667vw;
      text-align: center;
    }
  }
}
</style>