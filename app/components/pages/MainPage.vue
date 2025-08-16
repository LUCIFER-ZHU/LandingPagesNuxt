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
        <UButton class="default-btn" label="Request Quote Now" />
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
            <UForm :state="contactForm" @submit="onContactSubmit">
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
                  @click="contactForm.coolingMethod = 'air'">
                  Air-cooled
                </UButton>
                <UButton variant="outline" :color="contactForm.coolingMethod === 'water' ? 'primary' : 'neutral'"
                  @click="contactForm.coolingMethod = 'water'">
                  Water-cooled
                </UButton>
              </div>
            </div>

            <div class="config-section sec4 shrink-0">
              <h3 class="section-title">Power supply available?</h3>
              <div class="button-group">
                <UButton variant="outline" :color="contactForm.powerSupply === '220V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '220V' }" @click="contactForm.powerSupply = '220V'">
                  220V
                </UButton>
                <UButton variant="outline" :color="contactForm.powerSupply === '380V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '380V' }" @click="contactForm.powerSupply = '380V'">
                  380V
                </UButton>
                <UButton variant="outline" :color="contactForm.powerSupply === '440V' ? 'primary' : 'neutral'"
                  :class="{ 'active': contactForm.powerSupply === '440V' }" @click="contactForm.powerSupply = '440V'">
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
              <NuxtImg densities="1" :src="buildImageUrl('image/air-cooled-chiller.webp')" alt="Air-Cooled Chiller" />
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
              <NuxtImg densities="1" :src="buildImageUrl('image/water-cooled-chiller.webp')"
                alt="Water-Cooled Chiller" />
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
              <NuxtImg densities="1" :src="buildImageUrl('image/low-temp-chiller.webp')"
                alt="Low-Temperature Chiller" />
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
              <NuxtImg densities="1" :src="buildImageUrl('image/oil-type-controller.webp')"
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
              <NuxtImg densities="1" :src="buildImageUrl('image/water-type-controller.webp')"
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
        <UButton class="default-btn" label="Tell Us Your Needs" />
      </div>
    </div>

    <!-- Not sure which system fits your process? -->
    <div class="not-sure h-[26.25vw] flex justify-center items-center">
      <div class="img-box w-[52.4479vw] h-[26.25vw] bg-[rgba(16,75,212,0.04)] flex justify-end items-center">
        <NuxtImg densities="1" :src="buildImageUrl('image/not-sure.webp')"
          alt="Not sure which system fits your process?" />
      </div>
      <div class="content w-[47.8125vw] pl-[4.4271vw]">
        <div class="title w-[28.9583vw]">
          Not sure which system fits your process?
        </div>
        <div class="sub-title w-[27.1354vw]">
          Contact our engineers for a free consultation and selection guide.
        </div>
        <div class="btn">
          <UButton class="default-btn" label="Get a Quote" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();

// 联系表单数据（包含冷却系统配置）
const contactForm = ref({
  name: '',
  email: '',
  whatsapp: '',
  message: '',
  coolingCapacity: 1250,
  waterTempRange: '',
  coolingMethod: 'air',
  powerSupply: '220V'
});

/**
 * 处理联系表单提交
 */
const onContactSubmit = () => {
  try {
    // 这里可以添加表单验证和提交逻辑
    console.log('Contact form submitted:', contactForm.value);
    // 重置表单
    contactForm.value = {
      name: '',
      email: '',
      whatsapp: '',
      message: '',
      coolingCapacity: 1250,
      waterTempRange: '',
      coolingMethod: 'air',
      powerSupply: '220V'
    };
  } catch (error) {
    console.error('Form submission error:', error);
  }
};
</script>

<style lang="scss" scoped>
.main-page {
  background-color: #f9f9fb;

  .banner {
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
  padding: 3.125vw 18.75vw 6.0938vw;

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
</style>