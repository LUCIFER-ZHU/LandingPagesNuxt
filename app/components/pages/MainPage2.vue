<template>
  <div class="main-page" :class="{ 'is-mobile': isMobile }">
    <AppHeader />
    <div class="banner" id="banner-anchor">
      <div class="banner-content" v-if="!isMobile">
        <div class="title">
          Reliable Diesel Portable Air<br>
          Compressors for Outdoor Projects
        </div>
        <div class="sub-title">
          No power supply? No problem. Built for mining, drilling, and construction sites — factory direct from China.
        </div>
        <div class="btn-group">
          <UButton class="default-btn chat-btn" label="Chat on WhatsApp for Fast Response"
            @click="handleWhatsAppClick" />
          <UButton class="default-btn" label="Get Official Quotation by Email" @click="dialogOpen = true" />
        </div>
      </div>
    </div>
    <div class="mob-banner-content" v-if="isMobile">
      <div class="title">
        Reliable Diesel Portable Air<br>
        Compressors for Outdoor Projects
      </div>
      <div class="sub-title">
        No power supply? No problem. Built for mining, drilling, and construction sites — factory direct from China.
      </div>
      <div class="btn-group">
        <UButton class="default-btn chat-btn" label="Chat on WhatsApp for Fast Response" @click="handleWhatsAppClick" />
        <UButton class="default-btn" label="Get Official Quotation by Email" @click="dialogOpen = true" />
      </div>
    </div>

    <!-- 产品选择区域 -->
    <div class="compressor-types-section">
      <div class="section-header">
        <h2 class="main-title">Choose the Right Diesel Air Compressor for Your Project</h2>
        <p class="intro-text">From city construction to remote mining areas, Minnuo offer three types of diesel air
          compressors to meet your working conditions — all fuel-efficient, durable, and built for outdoor toughest
          environments.</p>
      </div>

      <div class="compressor-list">
        <!-- 轮式便携式 -->
        <div class="compressor-item" data-aos="fade-right">
          <div class="compressor-image">
            <NuxtImg :src="buildImageUrl('/image/2.webp')" alt="Wheeled Portable Type Diesel Air Compressor" />
          </div>
          <div class="compressor-content">
            <h3 class="compressor-title">Wheeled Portable Type Diesel Air Compressor</h3>
            <p class="compressor-description">The most popular choice for road construction, drilling, and maintenance
              work. <br>
              Easy to tow, low fuel consumption, and simple to operate — ideal for mobile projects where you need <br>
              compressed air anywhere.</p>
            <div class="spec-table">
              <div class="spec-row">
                <div class="spec-label">Air Delivery:</div>
                <div class="spec-value">3.6-25 m³/min</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Pressure:</div>
                <div class="spec-value">7-25 bar</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Engine:</div>
                <div class="spec-value">Yuchai / Weichai / Cummins</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Mobility:</div>
                <div class="spec-value">Two or four-wheel trailer</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Cooling:</div>
                <div class="spec-value">Air or water-cooled</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 履带式 -->
        <div class="compressor-item" data-aos="fade-left">
          <div class="compressor-image">
            <NuxtImg :src="buildImageUrl('/image/3.webp')" alt="Crawler Type Diesel Air Compressor" />
          </div>
          <div class="compressor-content">
            <h3 class="compressor-title">Crawler Type Diesel Air Compressor</h3>
            <p class="compressor-description">Designed for mining, quarrying, and rugged off-road environments.<br>
              Crawler chassis provides excellent traction and stability on muddy or rocky ground, ensuring continuous
              <br>
              operation even in remote areas.
            </p>
            <div class="spec-table">
              <div class="spec-row">
                <div class="spec-label">Air Delivery:</div>
                <div class="spec-value">18-30 m³/min</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Pressure:</div>
                <div class="spec-value">7-25 bar</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Engine:</div>
                <div class="spec-value">Cummins / Weichai</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Mobility:</div>
                <div class="spec-value">Steel or rubber tracks</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Cooling:</div>
                <div class="spec-value">Air or water-cooled</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 固定式 -->
        <div class="compressor-item" data-aos="fade-right">
          <div class="compressor-image">
            <NuxtImg :src="buildImageUrl('/image/4.webp')" alt="Stationary Type Diesel Air Compressor" />
          </div>
          <div class="compressor-content">
            <h3 class="compressor-title">Stationary Type Diesel Air Compressor</h3>
            <p class="compressor-description">Ideal for industrial plants, mining bases, or construction sites that
              require continuous air supply without mobility. <br>
              Provides stable pressure output and reliable long-hour operation — perfect for areas with unstable or
              limited <br>
              power supply.</p>
            <div class="spec-table">
              <div class="spec-row">
                <div class="spec-label">Air Delivery:</div>
                <div class="spec-value">15-35 m³/min</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Pressure:</div>
                <div class="spec-value">7-25 bar</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Engine:</div>
                <div class="spec-value">Weichai / Cummins / Yuchai</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Mobility:</div>
                <div class="spec-value">Stationary base-mounted</div>
              </div>
              <div class="spec-row">
                <div class="spec-label">Cooling:</div>
                <div class="spec-value">Air or water-cooled</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="cta-section">
        <UButton class="default-btn chat-btn" label="Chat on WhatsApp for Quick Quote" @click="handleWhatsAppClick" />
      </div>
    </div>

    <div class="built-by">
      <div class="title">Built by MINNUO</div>
      <div class="sub-title">– a trusted manufacturer since 1987.</div>
      <div class="text">With over 30 years of experience in air compressors and gas equipment, MINNUO products are now
        exported to more than 80 countries worldwide. Built for real job sites—not controlled lab conditions—our
        compressors are engineered to withstand heat, dust, vibration, and unstable power environments, delivering
        strong performance and lower operating costs every day.</div>
      <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/5.webp')" alt="Built by MINNUO"
        data-aos="fade-up" />
      <div class="grid6">
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/6.webp')" alt="Reliable Power Anywhere" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Reliable Power Anywhere</div>
            <div class="grid6-item-text">Diesel-driven system with Cummins / Weichai engines — no electricity required,
              strong performance in remote job sites.</div>
          </div>
        </div>
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/7.webp')"
              alt="Easy Maintenance & Spare Parts Support" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Easy Maintenance & Spare Parts Support</div>
            <div class="grid6-item-text">Simple design with standardized components — easy to repair, and spare parts
              available locally or directly from our factory.</div>
          </div>
        </div>
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/8.webp')"
              alt="Fuel Saving & Low Operation Cost" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Fuel Saving & Low Operation Cost</div>
            <div class="grid6-item-text">Smart air control system reduces diesel consumption by 15-20%, saving more fuel
              in long drilling or construction projects.</div>
          </div>
        </div>
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/9.webp')"
              alt="Fast Delivery & Factory Direct Price" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Fast Delivery & Factory Direct Price</div>
            <div class="grid6-item-text">Shipped directly from MINNUO's factory in China to Dar es Salaam, Mombasa,
              Lusaka, or Durban, with full customs documents and factory inspection.</div>
          </div>
        </div>
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/10.webp')"
              alt="Durable Structure for Harsh Environments" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Durable Structure for Harsh Environments</div>
            <div class="grid6-item-text">Reinforced cooling system and heavy-duty filters keep the compressor running
              under 45°C and dusty conditions.</div>
          </div>
        </div>
        <div class="grid6-item">
          <div class="grid6-item-icon">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/11.webp')"
              alt="Professional After-Sales Service" />
          </div>
          <div class="grid6-item-content">
            <div class="grid6-item-title">Professional After-Sales Service</div>
            <div class="grid6-item-text">Technical engineers provide remote support via WhatsApp / Email, ensuring fast
              response and stable operation.</div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bottom-btn">
        <UButton class="default-btn chat-btn" label="Chat on WhatsApp for Quick Quote" @click="handleWhatsAppClick" />
      </div>
    </div>

    <div class="built-with">
      <div class="title">Built with Reliable Components for Long-Term Performance</div>
      <div class="sub-title">Every compressor is engineered with carefully selected parts to guarantee stable pressure,
        low fuel consumption, and reliable<br> operation — even under outdoor toughest working conditions.</div>
      <div class="content">
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/12.webp')"
          alt="Built with Reliable Components for Long-Term Performance" class="content-image" />
        <div class="grid6">
          <div class="grid6-item">
            <div class="grid6-item-title">Diesel Engine</div>
            <div class="grid6-item-text">
              Powered by Cummins, Yuchai, and other well-known brands, our compressors deliver strong power and high
              fuel efficiency.
              Engines comply with National III emission standards and are backed by a nationwide after-sales network,
              ensuring fast maintenance and long service life.
            </div>
          </div>
          <div class="grid6-item">
            <div class="grid6-item-title">Traction & Chassis</div>
            <div class="grid6-item-text">
              Heavy-duty, wear-resistant chassis with damping structure for smooth towing and stable performance.
              Designed to handle rough terrain and long-distance movement between sites.
            </div>
          </div>
          <div class="grid6-item">
            <div class="grid6-item-title">Filter System</div>
            <div class="grid6-item-text">
              High-efficiency filters protect the air-end and engine from dust and impurities, ensuring longer operation
              hours, reduced downtime, and lower maintenance costs in harsh job sites.
            </div>
          </div>
          <div class="grid6-item">
            <div class="grid6-item-title">Compressor Shell</div>
            <div class="grid6-item-text">
              The outer shell is made of 2mm cold-rolled steel with flame-retardant soundproof materials, providing
              durability, safety, and reduced noise for field operations.
            </div>
          </div>
          <div class="grid6-item">
            <div class="grid6-item-title">Compressor Elements</div>
            <div class="grid6-item-text">
              Equipped with high-performance air-ends, our compressors ensure stable pressure output and large air flow
              — ideal for continuous drilling, mining, or construction operations
            </div>
          </div>
          <div class="grid6-item">
            <div class="grid6-item-title">Engine Muffler</div>
            <div class="grid6-item-text">
              Constructed with stainless-steel materials, the multi-chamber muffler effectively reduces exhaust noise —
              keeping your compressor powerful yet quiet.
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="bottom-btn">
        <UButton class="default-btn chat-btn" label="Chat on WhatsApp for Full Technical Details and Factory Price"
          @click="handleWhatsAppClick" />
      </div>
    </div>

    <div class="videos">
      <div class="videos-item" data-aos="fade-right">
        <EditorVideoBox :videoUrl="buildImageUrl('/video/1.mp4')" :coverImage="buildImageUrl('/image/13.webp')"
          title="videos" :width="isMobile? '76.8vw' : '30vw'" :height="isMobile? '50.4vw' : '19.6875vw'" />
        <div class="videos-item-title">
          How to Start Up Your Machine
        </div>
        <div class="videos-item-text">
          Step-by-Step Guide
        </div>
      </div>
      <div class="videos-item" data-aos="fade-left">
        <EditorVideoBox :videoUrl="buildImageUrl('/video/2.mp4')" :coverImage="buildImageUrl('/image/14.webp')"
          title="videos" :width="isMobile? '76.8vw' : '30vw'" :height="isMobile? '50.4vw' : '19.6875vw'" />
        <div class="videos-item-title">
          From Factory to You
        </div>
        <div class="videos-item-text">
          Our Shipping Process Explained
        </div>
      </div>
    </div>

    <div class="customer-success">
      <div class="title">Customer Success Stories from World</div>
      <div class="grid3">
        <div class="grid3-item" data-aos="fade-right">
          <div class="title">Road Construction Project </div>
          <div class="sub-title">– Tanzania</div>
          <div class="texts">
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/15.webp')" alt="Customer Success" />
              <div class="texts-item-title">Kisongo Engineering Ltd</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/16.webp')" alt="Customer Success" />
              <div class="texts-item-title">Road & bridge construction near Arusha</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/17.webp')" alt="Customer Success" />
              <div class="texts-item-title">MN-18/10 Diesel Portable Air Compressor</div>
            </div>
          </div>
          <div class="text">The customer used our diesel compressor for pneumatic drilling and concrete spraying.
            Even in temperatures above 42°C and dusty conditions, the machine maintained stable pressure with low fuel
            consumption.</div>
          <div class="text-box">
            <div class="text-box-title">Very reliable and easy to move between job sites</div>
            <div class="text-box-text">-said Joseph, site manager.</div>
          </div>
        </div>
        <div class="grid3-item" data-aos="fade-up">
          <div class="title">Borehole Drilling Project </div>
          <div class="sub-title">– Zambia</div>
          <div class="texts">
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/15.webp')" alt="Customer Success" />
              <div class="texts-item-title">Lusaka Water Drilling Co</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/16.webp')" alt="Customer Success" />
              <div class="texts-item-title">Borehole and irrigation well drilling in rural areas</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/17.webp')" alt="Customer Success" />
              <div class="texts-item-title">MN-25/14 Crawler-Type Diesel Compressor</div>
            </div>
          </div>
          <div class="text">The compressor operated smoothly in off-road and dusty environments, delivering strong
            pressure for deep borehole drilling. The team appreciated its low maintenance design and fuel efficiency,
            which helped reduce overall operating costs.</div>
          <div class="text-box">
            <div class="text-box-title">It runs all day without overheating or losing pressure — very dependable</div>
            <div class="text-box-text">-said Patrick, chief engineer.</div>
          </div>
        </div>
        <div class="grid3-item" data-aos="fade-left">
          <div class="title">Mining Operation </div>
          <div class="sub-title">– Kenya</div>
          <div class="texts">
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/15.webp')" alt="Customer Success" />
              <div class="texts-item-title">Mombasa Quarry Group</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/16.webp')" alt="Customer Success" />
              <div class="texts-item-title">Air supply for stone quarry crushing and drilling</div>
            </div>
            <div class="texts-item">
              <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('/image/17.webp')" alt="Customer Success" />
              <div class="texts-item-title">MN-20/10 Stationary Diesel Compressor</div>
            </div>
          </div>
          <div class="text">Installed as the main air source in a quarry plant, the compressor worked continuously for
            over three months without interruption. Fuel consumption was about 18% lower than their previous unit, while
            maintaining steady pressure and lower noise.</div>
          <div class="text-box">
            <div class="text-box-title">Stable, quiet, and powerful — a great choice for our mining site</div>
            <div class="text-box-text">-noted Eric, maintenance supervisor.</div>
          </div>
        </div>
      </div>
      <div class="customer-success-text">
        More contractors worldwide are choosing MINNUO diesel air compressors for their<br> reliable performance and
        lower
        fuel costs.
      </div>
      <!-- 底部按钮 -->
      <div class="bottom-btn">
        <UButton class="default-btn chat-btn" label="Chat on WhatsApp to Get Your Model Recommendation and Quotation"
          @click="handleWhatsAppClick" />
      </div>
    </div>

    <div class="faq-area" :class="{ 'is-mobile': isMobile }">
      <div class="faq-title">FAQ - Common Questions from Our Customers</div>
      <div class="faq-content">
        <!-- 左侧表单 -->
        <div class="faq-form-section">
          <div class="form-wrapper">
            <div class="form-title">Fill in your<br> application details</div>
            <div class="form-subtitle">— we'll match the right model within 24 hours.</div>
            <div class="left-form">
              <div class="form-card">
                <UForm :state="contactForm" @submit="handleFormSubmit">
                  <UFormField name="name" class="form-field">
                    <UInput v-model="contactForm.name" placeholder="*Name" />
                  </UFormField>

                  <UFormField name="email" class="form-field">
                    <UInput v-model="contactForm.email" placeholder="*E-mail" type="email" />
                  </UFormField>

                  <UFormField name="whatsapp" class="form-field">
                    <UInput v-model="contactForm.whatsapp" placeholder="WhatApp (Tel)" />
                  </UFormField>

                  <UFormField name="message" class="form-field">
                    <UTextarea v-model="contactForm.message" placeholder="Your Message" :rows="4" />
                  </UFormField>

                  <div class="form-hint">You can also chat on WhatsApp for an instant recommendation.</div>

                  <UButton type="submit" color="primary" class="send-btn" :loading="isSubmitting"
                    :disabled="isSubmitting">
                    {{ isSubmitting ? 'Sending...' : 'Send' }}
                  </UButton>
                </UForm>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧 FAQ 列表 -->
        <div class="faq-list-section">
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-number">1.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">Can I get spare parts locally if something needs replacement?</div>
                <div class="faq-answer">Yes. Common parts such as filters, valves, and belts are standard and compatible
                  with local suppliers.<br>
                  For major components, we provide direct factory shipping or connect you with local distributors for
                  faster service.
                </div>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-number">2.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">How long does delivery take to Africa?</div>
                <div class="faq-answer">We ship directly from MINNUO's factory in China to major ports like Dar es
                  Salaam, Mombasa, Lusaka, or Durban. <br>
                  Standard lead time is 20-35 days, depending on order quantity and
                  destination.</div>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-number">3.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">How do I choose the right pressure and air flow for my project?</div>
                <div class="faq-answer">Tell us your application (drilling, mining, construction, sandblasting,
                  etc.),<br>
                  and our engineer will recommend the most suitable model based on your depth, tool size, and air
                  consumption.<br>
                  You can also chat on WhatsApp for an instant recommendation.</div>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-number">4.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">Is it suitable for high-temperature or dusty environments?</div>
                <div class="faq-answer">Absolutely. Our diesel compressors are designed for tropical climates up to
                  45°C, <br>
                  with reinforced cooling systems, heavy-duty filters, and anti-dust design to ensure stable
                  performance.</div>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-number">5.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">What about after-sales service and warranty?</div>
                <div class="faq-answer">All units come with a 12-month warranty or 2,000 working hours, whichever comes
                  first. <br>
                  Our technicians provide remote support via WhatsApp / Email, <br>
                  and spare parts can be delivered quickly from our factory.</div>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-number">6.</div>
              <div class="faq-content-wrapper">
                <div class="faq-question">Can I get a quotation and catalog first?</div>
                <div class="faq-answer">Of course. You can click the WhatsApp button to get a quick quotation within 1
                  hour,<br> or fill out the inquiry form to receive a detailed catalog by email.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
    <!-- 侧边栏联系组件 -->
    <SideContactBar />
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
  handleFormSubmit,
  isSubmitting,
} = useContactForm();

// 设备检测
const { isMobile } = useDeviceDetection();

// 控制对话框显示
const dialogOpen = ref(false)

// WhatsApp点击处理 - 使用统一的 composable
const { handleWhatsAppClick } = useWhatsApp()

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

:deep(.chat-btn) {
  background: #4CC273;
}

.bottom-btn {
  text-align: center;
  margin-top: 2.0833vw;
}

.banner {
  width: 100%;
  height: clamp(210px, 31.25vw, 31.25vw);
  background: url($image-base + '/image/1.webp') no-repeat center/cover;
  padding: 6.0417vw 5.8854vw 0;

  .banner-content {
    .title {
      font-weight: bold;
      font-size: clamp(12px, 3.3333vw, 3.3333vw);
      color: #FFFFFF;
    }

    .sub-title {
      font-weight: 400;
      font-size: clamp(10px, 1.3542vw, 1.3542vw);
      color: #FFFFFF;
      margin: 1.0417vw 0 2.0833vw;
    }

    .btn-group {
      display: flex;
      gap: 1.3542vw;
    }

  }
}

.mob-banner-content {
  .title {
    font-weight: bold;
    font-size: clamp(14px, 4.8vw, 36px);
    color: #020202;
    text-align: center;
    margin: 5.3333vw 0 3.3333vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: clamp(12px, 2.6667vw, 20px);
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
  }

  .btn-group{
    display: flex;
    flex-direction: column;
    gap: 4vw;
    padding: 0 24vw;
    margin-top: 4vw;
  }
}



.compressor-types-section {
  padding: 6.25vw 11.875vw;
  background: #f9f9fb;

  .section-header {
    text-align: center;
    margin-bottom: 4.1667vw;

    .main-title {
      font-weight: bold;
      font-size: clamp(20px, 2.5vw, 48px);
      color: #020202;
      margin-bottom: 1.5625vw;
    }

    .intro-text {
      font-weight: 400;
      font-size: clamp(12px, 1.25vw, 24px);
      color: rgba(0, 0, 0, 0.4);
      margin-bottom: 5.2083vw;
    }
  }

  .compressor-list {
    display: flex;
    flex-direction: column;
    gap: 1.25vw;
    margin-bottom: 4.1667vw;
  }

  .compressor-item {
    display: flex;
    gap: 2.2917vw;
    align-items: center;
    background: #fff;
    padding: 2.0833vw;
    box-shadow: 0 0.1042vw 0.5208vw rgba(0, 0, 0, 0.05);
    overflow: auto;

    @include hover-glow-effect(-0.1vw, 1.02, #fff, #fff);

    .compressor-image {
      flex-shrink: 0;
      width: 20vw;
      overflow: hidden;
      background: #f5f5f5;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .compressor-content {
      display: flex;
      flex-direction: column;
      flex: 1;

      .compressor-title {
        font-weight: bold;
        font-size: clamp(18px, 1.25vw, 24px);
        color: #020202;
        margin-bottom: .625vw;
      }

      .compressor-description {
        font-weight: 400;
        font-size: clamp(12px, .7292vw, 14px);
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2.6042vw;
        line-height: 2;
      }

      .spec-table {
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        .spec-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: .5208vw;

          .spec-label {
            font-weight: 600;
            font-size: clamp(12px, .8333vw, 16px);
            color: #020202;
            white-space: nowrap;
          }

          .spec-value {
            font-weight: 400;
            font-size: clamp(12px, .8333vw, 16px);
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }

  .cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .is-mobile & {
    padding: 7.0667vw;

    .compressor-list{
      gap: 4vw;

      .compressor-item{
        padding: 5.3333vw;
        flex-direction: column;

        .compressor-image{
          width: 100%;
        }

        .compressor-content{
          .compressor-title{
            font-size: clamp(14px, 3.2vw, 24px);
            margin-bottom: 2vw;
          }
          
          .compressor-description{
            font-size: clamp(10px, 1.8667vw, 14px);
            margin-bottom: 6.6667vw;
          }

          .spec-table{
            grid-template-columns: repeat(2, 1fr);
            gap: 6.4vw 0;
          }
        }
      }
    }
  }
}

.built-by {

  padding: 0 13.5417vw 5.2083vw;

  .title {
    font-weight: bold;
    font-size: clamp(20px, 2.5vw, 48px);
    color: #000000;
    text-align: center;
  }

  .sub-title {
    font-weight: 400;
    font-size: clamp(12px, 1.0417vw, 20px);
    color: #000000;
    text-align: center;
    margin-bottom: 2.0833vw;
  }

  .text {
    font-weight: 400;
    font-size: clamp(12px, .8333vw, 16px);
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    margin-bottom: 4.6875vw;
    padding: 0 7.2917vw;
  }

  .grid6 {
    background: #fff;
    padding: 2.0833vw 2.6042vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.6458vw 5.2083vw;
    overflow: scroll;

    .grid6-item {
      display: flex;
      gap: .8333vw;

      .grid6-item-icon {
        flex-shrink: 0;
      }

      .grid6-item-content {
        display: flex;
        flex-direction: column;
        gap: .5208vw;

        .grid6-item-title {
          font-weight: bold;
          font-size: clamp(12px, .9375vw, 18px);
          color: #020202;
          line-height: 1.8;
        }

        .grid6-item-text {
          font-weight: 400;
          font-size: clamp(10px, .7292vw, 14px);
          color: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }

  .is-mobile & {
    padding: 0 0 5.3333vw;

    .grid6 {
      grid-template-columns: repeat(2, 1fr);
      gap: 8.8vw 6.6667vw;
      padding: 5.3333vw;
      
      .grid6-item{
        flex-direction: column;

        .grid6-item-icon{
          width: 4.8vw;
        }
      }
    }
  }
}

.built-with {

  padding: 0 0 10.4167vw;

  .title {
    font-weight: bold;
    font-size: clamp(20px, 2.5vw, 48px);
    color: #000000;
    text-align: center;
    margin-bottom: 2.0833vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: clamp(12px, 1.0417vw, 20px);
    color: #000000;
    text-align: center;
    margin-bottom: 3.6458vw;
  }

  .content {
    display: flex;
    align-items: center;

    .content-image {
      width: 39.5833vw;
      flex-shrink: 0;
    }

    .grid6 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 2.0833vw 2.6042vw;
      gap: 4.1667vw 3.6458vw;
      align-self: stretch;
      background: #fff;

      .grid6-item {
        .grid6-item-title {
          font-weight: bold;
          font-size: clamp(12px, 1.0417vw, 20px);
          color: #020202;
          margin-bottom: .5208vw;
        }

        .grid6-item-text {
          font-weight: 400;
          font-size: clamp(10px, .7292vw, 14px);
          color: rgba(0, 0, 0, 0.8);
        }

      }
    }
  }

  .is-mobile & {
    .content {
      flex-direction: column;

      .content-image{
        width: 100%;
      }

      .grid6{
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}


.videos {
  display: flex;
  gap: 2.5vw;
  justify-content: center;
  align-items: center;
  margin-bottom: 5.2083vw;

  .videos-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .videos-item-title {
      font-weight: bold;
      font-size: clamp(12px, 1.0417vw, 20px);
      color: #020202;
      margin: 1.1458vw 0 .2604vw;
    }

    .videos-item-text {
      font-weight: 400;
      font-size: clamp(10px, .8333vw, 16px);
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .is-mobile & {
    flex-direction: column;
    gap: 5.3333vw;
  }
}

.customer-success {
  padding: 5.2083vw 11.875vw;
  background: #f9f9fb;
  overflow: auto;

  .title {
    font-weight: bold;
    font-size: clamp(20px, 2.5vw, 48px);
    color: #020202;
    text-align: center;
    margin-bottom: 4.1667vw;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.0833vw;

    .grid3-item {
      background: #fff;
      padding: 2.0833vw;
      border-radius: 0.5208vw;
      box-shadow: 0 0.1042vw 0.5208vw rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;

      @include hover-glow-effect(-0.1vw, 1.02, #fff, #fff);

      .title {
        font-weight: bold;
        font-size: clamp(16px, 1.25vw, 24px);
        color: #000000;
        margin-bottom: .5208vw;
        text-align: left;
      }

      .sub-title {
        font-weight: bold;
        font-size: clamp(16px, 1.25vw, 24px);
        color: #000000;
        margin-bottom: 1.5625vw;
      }

      .texts {
        display: flex;
        flex-direction: column;
        gap: 1.0417vw;
        margin-bottom: 1.5625vw;

        .texts-item {
          display: flex;
          align-items: center;
          gap: 0.8333vw;

          img {
            width: 1.5625vw;
            height: 1.5625vw;
            flex-shrink: 0;
          }

          .texts-item-title {
            font-weight: 400;
            font-size: clamp(12px, 0.8333vw, 16px);
            color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      .text {
        font-weight: 400;
        font-size: clamp(12px, 0.8333vw, 16px);
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.6;
      }

      .text-box {
        background: #f5f5f5;
        border-radius: 0.5208vw;
        padding: 1.5625vw;
        margin-top: auto;

        .text-box-title {
          font-weight: 400;
          font-size: clamp(12px, 0.8333vw, 16px);
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 0.5208vw;
          line-height: 1.6;
        }

        .text-box-text {
          font-weight: 400;
          font-size: clamp(11px, 0.7292vw, 14px);
          color: #020202;
        }
      }
    }
  }

  .customer-success-text {
    text-align: center;
    font-weight: 400;
    font-size: clamp(12px, 1.0417vw, 20px);
    color: #000000;
    margin: 2.6042vw 0 0;
  }

  .is-mobile & {
    padding: 5.3333vw;

    .title {
      font-size: clamp(18px, 4.8vw, 24px);
      margin-bottom: 5.3333vw;
    }
    
    .grid3 {
      grid-template-columns: repeat(1, 1fr);
      gap: 5.3333vw;

      .grid3-item{
        padding: 5.3333vw;

        .sub-title{
          margin-bottom: 4vw;
        }

        .texts {
          gap: 4vw;
          margin-bottom: 6.6667vw;

          .texts-item img{
            width: 4vw;
            height: 4vw;
          }
        } 

        .text {
          margin-bottom: 4vw;
        }

        .text-box {
          padding: 2.6667vw 4vw;
          border-radius: 1.6vw;

          .text-box-text{
            text-align: right;
          }
        }
      }
    }

    .bottom-btn{
      padding: 0;
      width: 100%;

      button {
        width: 100%;

        :deep(.truncate){
          white-space: wrap;
          word-break: break-all;
          text-align: center;
        }
      }
    }
  }
}

.faq-area {
  padding: 0 8.1771vw 4.6875vw;

  .faq-title {
    font-weight: bold;
    font-size: clamp(20px, 2.5vw, 48px);
    color: #000;
    text-align: center;
    margin-bottom: 4.1667vw;
  }

  .faq-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.4583vw;
    align-items: center;
  }

  .faq-form-section {
    background: #FFFFFF;
    border-radius: .625vw;
    padding: 2.0833vw 1.5625vw;

    .form-wrapper {
      .form-title {
        font-weight: bold;
        font-size: clamp(16px, 1.6667vw, 32px);
        color: #092991;
        margin-bottom: 0.5208vw;
      }

      .form-subtitle {
        font-weight: 400;
        font-size: clamp(12px, .8333vw, 16px);
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2.0833vw;
      }

      .left-form {
        width: 100%;

        .form-hint {
          font-weight: 400;
          font-size: clamp(10px, .8333vw, 16px);
          color: rgba(0, 0, 0, 0.6);
          text-align: center;
          margin-bottom: 1.0417vw;
        }

        .form-field {
          margin-bottom: 0.5208vw;


          div {
            width: 100%;
          }
        }

        :deep(input),
        :deep(textarea) {
          background: #F9F9FB;
          padding: .9375vw 1.4063vw;
          width: 100%;
        }

        :deep(.send-btn) {
          width: 100%;
          padding: .625vw;
          font-weight: bold;
          font-size: clamp(12px, 1.25vw, 24px);
          color: #FFFFFF;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #092991;
          cursor: pointer;
        }

      }
    }
  }

  .faq-list-section {
    background: #ffffff;
    padding: 2.6042vw 3.125vw;
    border-radius: .625vw;

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 4.0625vw;

      .faq-item {
        display: flex;
        align-items: flex-start;

        .faq-number {
          font-weight: bold;
          font-size: clamp(14px, 1.25vw, 24px);
          color: #000000;
          flex-shrink: 0;
          min-width: 1.5625vw;
        }

        .faq-content-wrapper {
          flex: 1;

          .faq-question {
            font-weight: bold;
            font-size: clamp(14px, 1.25vw, 24px);
            color: #000000;
            margin-bottom: 0.5208vw;
            line-height: 1.5;
          }

          .faq-answer {
            font-weight: 400;
            font-size: clamp(12px, 1.0417vw, 20px);
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }

  /* ---Mobile样式----*/
  &.is-mobile {
    padding: 5.3333vw 4.2667vw;
    background: #e8f4f8;

    .faq-title {
      font-size: clamp(18px, 4.8vw, 24px);
      margin-bottom: 5.3333vw;
    }

    .faq-content {
      gap: 5.3333vw;
      display: flex;
      flex-direction: column-reverse;
    }

    .faq-form-section {
      .form-wrapper {
        padding: 5.3333vw 4.2667vw;
        border-radius: 2.6667vw;

        .form-title {
          font-size: clamp(16px, 4.2667vw, 20px);
          margin-bottom: 1.3333vw;
        }

        .form-subtitle {
          font-size: clamp(12px, 3.2vw, 14px);
          margin-bottom: 5.3333vw;
        }

        .left-form {
          .form-field {
            margin-bottom: 2.6667vw;
          }

          :deep(input),
          :deep(textarea) {
            border-radius: 2.6667vw;
            padding: 2.6667vw 4.2667vw;
            font-size: clamp(12px, 3.2vw, 14px);
          }
        }
      }
    }

    .faq-list-section {
      padding: 5.3333vw 4.2667vw;

      .faq-list {
        gap: 5.3333vw;

        .faq-item {
          gap: 2.6667vw;

          .faq-number {
            font-size: clamp(14px, 3.7333vw, 16px);
            min-width: 4vw;
          }

          .faq-content-wrapper {
            .faq-question {
              font-size: clamp(14px, 3.7333vw, 16px);
              margin-bottom: 1.3333vw;
            }

            .faq-answer {
              font-size: clamp(12px, 3.2vw, 14px);
            }
          }
        }
      }
    }
  }
}
</style>