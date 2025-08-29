<template>
  <div class="main-page">
    <!-- 挂载对话框组件 -->
    <EditorContactFormDialog v-model="dialogOpen" />
    <!-- 主页banner -->
    <div class="banner">
      <!-- 视频背景 -->
      <video class="banner-video" :src="buildImageUrl('video/banner.mp4')" :poster="buildImageUrl('image/img41.webp')"
        autoplay muted loop playsinline preload="metadata"></video>
      <div class="banner-content">
        <div class="title">
          WELCOME TO MINNUO
        </div>
        <div class="sub-title">
          Pros trust our outstanding products and services
        </div>
        <ul class="description">
          <li>A world-leading supplier of casting equipment products</li>
          <li>The range of products provided is extensive, and our business covers the entire world</li>
          <li>From single equipment to production lines, and even complete casting factories</li>
        </ul>
        <UButton class="default-btn" label="Get Instant Quote" @click="dialogOpen = true" />
      </div>
    </div>

    <!-- 核心设备 -->
    <div class="core-equipment">
      <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img1.webp')" alt="Core Equipment"
        class="w-[19.0625vw]" />
      <div class="title">A technology-driven manufacturer specializing in <br> casting core equipment</div>
      <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img2.webp')" alt="Core Equipment" />
      <div class="text">
        As a leading equipment specialist with over 50 years of experience in the heavy industry sector, <span
          class="text-[#092991] font-bold">MINNUO</span> is committed to providing global foundries with
        high-performance, highly
        reliable core melting and casting equipment. Our core product lines, including <span
          class="text-[#092991] font-bold">dome
          melting furnaces, push-type holding furnaces, and advanced billet casting machines (round billets/flat
          billets),</span> are based on solid engineering practices and continuous innovation, aimed at enhancing
        customers' casting efficiency, product quality, and operational stability.
        <br>
        <br>
        The key melting and furnace technologies under the <span class="text-[#092991] font-bold">MINNUO brand</span>
        are directly
        inherited from the <span class="text-[#092991] font-bold">Gautschi</span> brand (Gautschi has been a member of
        the global
        leading industrial furnace and metallurgical equipment group, EBNER, since 2010). <span
          class="text-[#092991] font-bold">The EBNER Group</span> is renowned in the field of metal heat treatment and
        processing
        technologies(such as aluminum CASH continuous annealing and pickling lines, and aluminum roller hearth
        furnaces).
      </div>
    </div>

    <!-- 产品系列 -->
    <div class="product-series">
      <div class="title">Product types of industrial casting machines</div>
      <div class="sub-title">
        MINNUO offers a wide range of casting machine products, production lines and customization services, including
        die-casting machines, low-pressure casting machines, sand molding equipment, core-making/molding equipment, etc.
        Factory direct sales are available and it has CE and ISO certifications
      </div>
      <div class="grid3">
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img3.webp')" alt="Casting machine" />
          <div class="grid3-item-title">
            Casting machine
          </div>
          <div class="text"><span class="font-bold">Size：</span>400×600mm-800×1200mm</div>
          <div class="text"><span class="font-bold">Open Force：</span>20–100 ton</div>
          <div class="text"><span class="font-bold">Table Tilts：</span>0°–90°</div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img4.webp')"
            alt="NZJ series metal mold casting machine" />
          <div class="grid3-item-title">
            NZJ series metal mold casting machine
          </div>
          <div class="text"><span class="font-bold">Size：</span>300*200mm-1500*1500mm</div>
          <div class="text"><span class="font-bold">Open Force：</span>60KN-250KN</div>
          <div class="text"><span class="font-bold">Table Tilts：</span>0°~90°（120°）</div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img5.webp')"
            alt="DZJ88 series low-pressure casting machine" />
          <div class="grid3-item-title">
            DZJ88 series low-pressure casting machine
          </div>
          <div class="text"><span class="font-bold">Working pressure of hydraulic system ：</span>12MPa</div>
          <div class="text"><span class="font-bold">Powersupply：</span>AC380V 50HZ</div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img6.webp')"
            alt="SRJ series semi-automatic casting machine" />
          <div class="grid3-item-title">
            SRJ series semi-automatic casting machine
          </div>
          <div class="text"><span class="font-bold">SRJ10 Ladle Capacity：</span>500kg - 1000kg</div>
          <div class="text"><span class="font-bold">SRJ20 Ladle Capacity：</span>1100kg - 2000kg</div>
          <div class="text"><span class="font-bold">SRJ30 Ladle Capacity：</span>2100kg - 3000kg</div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img7.webp')"
            alt="DC J-MX series die-casting machines" />
          <div class="grid3-item-title">
            DC J-MX series die-casting machines
          </div>
          <div class="text"><span class="font-bold">Maximum rate of fire when empty shot：</span>7.0m/s</div>
          <div class="text"><span class="font-bold">Injection acceleration：</span>70G</div>
          <div class="text">There are 10 points and 9 sections of control between the start of injection and the
            completion of mold cavity filling</div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img8.webp')"
            alt="DC-R Series (Large Die-casting Machine)" />
          <div class="grid3-item-title">
            DC-R Series (Large Die-casting Machine)
          </div>
          <div class="text"><span class="font-bold">Control system：</span>TOSCAST-999</div>
          <div class="text">The position/speed/pressure of the boost control can be selected
          </div>
          <div class="text">Autonomous technology - Fault diagnosis function</div>
        </div>
      </div>
      <UButton class="default-btn" label="Tell Us Your Needs" @click="dialogOpen = true" />
    </div>

    <!-- 服务 -->
    <div class="services">
      <div class="services-content">
        <div class="services-left">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img9.webp')" alt="MINNUO Services" />
        </div>
        <div class="services-right">
          <div class="services-label">MINNUO Services</div>
          <div class="services-title">All services are provided by MINNUO</div>
          <div class="services-description">
            We offer comprehensive services and solutions for all products, including consulting, design,
            engineering, manufacturing, and commissioning of equipment and process control systems. We
            provide complete solutions for the industries we serve.
          </div>
          <div class="services-question">Are you interested in working with us?</div>
        </div>
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="about-us">
      <div class="title">— Learn more about <span class="text-[#092991]">MINNUO</span> —</div>
      <div class="sub-title">A full-service provider with over <br /> 50 years of experience.</div>
      <div class="grid2">
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img10.webp')" alt="About Us" />
        <div class="about-us-item">
          <div class="about-us-item-title">Our Company</div>
          <div class="about-us-item-description">As a leading company in the field of casting equipment, MINNUO has been
            at the forefront of technological innovation for nearly 50 years, leading the development of the industry.
          </div>
        </div>
        <div class="about-us-item">
          <div class="about-us-item-title">Technical Strength</div>
          <div class="about-us-item-description">We bring together top technical talent to create an industry-leading
            C-R-C foundry workshop. Through highly integrated technical solutions and precision craftsmanship, we
            provide our global customers with outstanding foundry solutions, maintaining a commitment to technological
            innovation and exceptional quality.</div>
        </div>
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img11.webp')" alt="About Us" />
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img12.webp')" alt="About Us" />
        <div class="about-us-item">
          <div class="about-us-item-title">Product Customization and Services</div>
          <div class="about-us-item-description">MINNUO products not only provide tailor-made solutions, but also have a
            comprehensive after-sales system to ensure that customers receive worry-free protection at every stage. We
            are committed to attracting industry elites to work together to create a better future. </div>
        </div>
      </div>
      <UButton class="default-btn" label="GET AN INSTANT QUOTE" @click="dialogOpen = true" />
    </div>

    <!-- 价值 -->
    <div class="unique-value">
      <div class="title">MINNUO's Unique Value</div>
      <div class="sub-title">By leveraging the close collaboration and technology sharing with Gautschi (melting/holding
        technology) and HPI (casting technology), core members of the EBNER Group, MINNUO, as an independent brand, has
        successfully integrated the deep expertise and cutting-edge innovations from these two leading technology
        sources. This enables MINNUO to provide highly compatible, technologically advanced core equipment solutions for
        the entire casting process chain, including:</div>
      <div class="grid3">
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img13.webp')" alt="unique-value" />
          <div class="grid3-item-title">
            Alloy melting
          </div>
          <div class="grid3-item-text">
            dome furnace technology
          </div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img14.webp')" alt="unique-value" />
          <div class="grid3-item-title">
            Pre-furnace treatment and holding
          </div>
          <div class="grid3-item-text">
            push furnace technology
          </div>
        </div>
        <div class="grid3-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img15.webp')" alt="unique-value" />
          <div class="grid3-item-title">
            Ingot casting
          </div>
          <div class="grid3-item-text">
            ingot/flat ingot casting machine technology
          </div>
        </div>
      </div>
    </div>

    <!-- 特点 -->
    <div class="features">
      <div class="title">MINNUO Vertical DC Casting Machine</div>
      <div class="sub-title">used for billet extrusion and slab rolling</div>
      <div class="grid4">
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img16.webp')" alt="features" />
          <div class="grid4-item-title">Airglide® Billet Mould System</div>
          <div class="grid4-item-text">MINNUO's innovative Airglide® mould system is specifically designed for extrusion
            billets.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img17.webp')" alt="features" />
          <div class="grid4-item-title">Gautschi slab mold</div>
          <div class="grid4-item-text">Utilizes Gautschi ingot molds to significantly enhance the quality of ingots and
            slabs.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img18.webp')" alt="features" />
          <div class="grid4-item-title">Wide Capacity Range</div>
          <div class="grid4-item-text">Offers drop weights ranging from 5 to 150 tons to meet various production
            requirements.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img19.webp')" alt="features" />
          <div class="grid4-item-title">Smart System</div>
          <div class="grid4-item-text">Internal guide system</div>
        </div>
      </div>
      <div class="features-pic">
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img24.webp')" alt="features" />
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img25.webp')" alt="features" />
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img26.webp')" alt="features" />
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img27.webp')" alt="features" />
      </div>
      <div class="grid4">
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img20.webp')" alt="features" />
          <div class="grid4-item-title">Multiple Design Options</div>
          <div class="grid4-item-text">Includes inclined frames and drive trolley designs to optimize performance.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img21.webp')" alt="features" />
          <div class="grid4-item-title">High-Quality Billet</div>
          <div class="grid4-item-text">Ensures excellent quality for all alloy castings.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img22.webp')" alt="features" />
          <div class="grid4-item-title">High-Quality Assurance</div>
          <div class="grid4-item-text">Precisely controls curl and expansion, ensuring each product meets the highest
            standards.</div>
        </div>
        <div class="grid4-item">
          <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img23.webp')" alt="features" />
          <div class="grid4-item-title">Crack Reduction</div>
          <div class="grid4-item-text">Significantly reduces cracks, especially in casting 7150 alloy.</div>
        </div>
      </div>
      <div class="btn">
        <UButton class="default-btn" label="GET AN INSTANT QUOTE" @click="dialogOpen = true" />
      </div>
    </div>

    <!-- 生产线  -->
    <div class="production-line">
      <div class="left">
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img28.webp')" alt="production-line"
          class="mb-[1.25vw]" />
        <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img29.webp')" alt="production-line" />
      </div>
      <div class="right">
        <div class="title">Casting Machines and Stacking Production Line</div>
        <div class="sub-title">
          <div>———</div>
          <div>Designed for smelting-grade and casting alloys, ensuring high-quality, consistent ingots.</div>
        </div>
        <div class="content">
          <div class="content-item">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img30.webp')" alt="production-line"
              class="w-[3.4375vw]" />
            <div class="content-item-text">
              <div class="content-item-text-title">Ingot Weight Range (6-25 kg):</div>
              <div class="content-item-text-sub-title">Proven technology for stable and efficient production.</div>
            </div>
          </div>
          <div class="content-item">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img31.webp')" alt="production-line"
              class="w-[3.4375vw]" />
            <div class="content-item-text">
              <div class="content-item-text-title">Capacity (Up to 22 Tons/Hour): </div>
              <div class="content-item-text-sub-title">High output to meet large-scale production demands.</div>
            </div>
          </div>
          <div class="content-item">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img32.webp')" alt="production-line"
              class="w-[3.4375vw]" />
            <div class="content-item-text">
              <div class="content-item-text-title">Robot Ingot Stacking:</div>
              <div class="content-item-text-sub-title">Reduces manual labor, enhancing automation and efficiency.</div>
            </div>
          </div>
          <div class="content-item">
            <NuxtImg densities="1" loading="lazy" :src="buildImageUrl('image/img33.webp')" alt="production-line"
              class="w-[3.4375vw]" />
            <div class="content-item-text">
              <div class="content-item-text-title">Automated Packaging Line: </div>
              <div class="content-item-text-sub-title">Fully integrated system for weighing, bundling, labeling, and
                marking, ensuring precise packaging.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系表单 -->
    <div class="contact-us">
      <div class="title">Free Quote, Fast Response!</div>
      <div class="content">
        <div class="left">
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
              <UButton type="submit" color="primary" class="send-btn" :loading="isSubmitting" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send' }}
              </UButton>
            </UForm>
          </div>
        </div>
        <div class="right">
          <div class="title">Jiangsu Minnuo Special<br> Equipment Co.，Ltd</div>
          <div class="flex gap-[5.2083vw]">
            <div class="contact-info">
              <div class="contact-info-item">
                <NuxtImg densities="1" :src="buildImageUrl('image/img34.webp')" alt="contact" class="w-[1.6667vw]" />
                <div>
                  <div class="title">WhatsApp</div>
                  <div class="text">+86 0523-84818388</div>
                </div>
              </div>
              <div class="contact-info-item">
                <NuxtImg densities="1" :src="buildImageUrl('image/img35.webp')" alt="contact" class="w-[1.6667vw]" />
                <div>
                  <div class="title">E-mail</div>
                  <div class="text">danny@cnmngroup.com</div>
                </div>
              </div>
              <div class="contact-info-item">
                <NuxtImg densities="1" :src="buildImageUrl('image/img36.webp')" alt="contact" class="w-[1.6667vw]" />
                <div>
                  <div class="title">Address</div>
                  <div class="text">13th Floor, Building C,<br> Binjiang International, <br>Jingjiang City, Jiangsu
                    Province
                  </div>
                </div>
              </div>
            </div>
            <div class="social-media">
              <NuxtLink to="https://www.youtube.com/@MINNUOGROUP-v5r" target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/needful/youtube.webp')" alt="YouTube" />
              </NuxtLink>
              <NuxtLink
                to="https://www.facebook.com/people/Chris-King/pfbid02taxM6qiZqwUdbM9fW2LtZeKqGYqUXHu7txgb8C6Y2mK551oJNHczcCiDBefgHfy7l/"
                target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/needful/facebook.webp')" alt="Facebook" />
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/chrisking5538/" target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/needful/ig.webp')" alt="Instagram" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ常见问题 -->
    <EditorFaqAccordion />

    <!-- 物流和货运保障 -->
    <div class="logistics-guarantee">
      <div class="title">Logistics and Freight Guarantee</div>
      <div class="sub-title">Heavy Cargo, Light Speed</div>
      <div class="grid2">
        <div class="grid2-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/img37.webp')" alt="logistics-guarantee" class="w-[2.5vw]" />
          <div class="grid2-item-content">
            <div class="grid2-item-title">Global direct delivery without detours</div>
            <div class="grid2-item-text">15 days in Europe / 20 days in the Middle East for signature</div>
          </div>
        </div>
        <div class="grid2-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/img38.webp')" alt="logistics-guarantee" class="w-[2.5vw]" />
          <div class="grid2-item-content">
            <div class="grid2-item-title">Heavy equipment free from port detention</div>
            <div class="grid2-item-text">Dedicated engineering freight forwarder + 7-day free storage at the port</div>
          </div>
        </div>
        <div class="grid2-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/img39.webp')" alt="logistics-guarantee" class="w-[2.5vw]" />
          <div class="grid2-item-content">
            <div class="grid2-item-title">CE/ISO/GOST/EAC/SABER five-certification coverage</div>
            <div class="grid2-item-text">full refund in case of customs clearance failure</div>
          </div>
        </div>
        <div class="grid2-item">
          <NuxtImg densities="1" :src="buildImageUrl('image/img40.webp')" alt="logistics-guarantee" class="w-[2.5vw]" />
          <div class="grid2-item-content">
            <div class="grid2-item-title">Compliance equals productivity</div>
            <div class="grid2-item-text">98.6% of EU customers pass the inspection on the first attempt without
              rectification</div>
          </div>
        </div>
      </div>
    </div>
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

// 控制对话框显示
const dialogOpen = ref(false)
</script>

<style lang="scss" scoped>
.main-page {
  background-color: #FFFFFF;

  >.banner {
    width: 100%;
    height: 41.6667vw;
    // background: url($image-base + 'image/banner.webp') no-repeat center/cover;
    background: #0a090e;
    padding: 14.3229vw 18.75vw 9.8958vw;
    position: relative; // 添加相对定位以支持绝对定位的子元素
    overflow: hidden; // 隐藏超出边界的视频内容

    // 视频背景样式
    .banner-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; // 保持视频比例并覆盖整个容器
      z-index: 1; // 确保视频在内容下方
    }

    >.banner-content {
      position: relative; // 确保内容在视频上方
      z-index: 2; // 内容层级高于视频

      >.title {
        font-weight: bold;
        font-size: 2.5vw;
        color: #FFFFFF;
      }

      >.sub-title {
        font-weight: 400;
        font-size: 1.25vw;
        color: #FFFFFF;
        line-height: 1.875vw;
        margin-bottom: 2.0833vw;
      }

      >.description {
        font-weight: 400;
        font-size: .8333vw;
        color: #FFFFFF;
        line-height: 1.25vw;
        margin-bottom: 2.5vw;

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
            background-color: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  }

  .core-equipment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.125vw 18.75vw 4.4792vw;

    .title {
      font-weight: bold;
      font-size: 1.25vw;
      color: #000000;
      line-height: 1.875vw;
      text-align: center;
      padding: 1.5625vw 0 2.5vw;
    }

    .text {
      font-weight: 400;
      font-size: .8333vw;
      color: rgba(0, 0, 0, 0.6);
      line-height: 1.6667vw;
      margin-top: 1.9271vw;
    }
  }
}

.product-series {
  padding: 0 18.75vw 4.4792vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    text-align: center;
  }

  .sub-title {
    font-weight: 400;
    font-size: .8333vw;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.6667vw;
    text-align: center;
    padding: .4167vw 3.4375vw 2.5vw;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.125vw 1.25vw;
    margin-bottom: 3.3854vw;

    .grid3-item {
      display: flex;
      flex-direction: column;

      .grid3-item-title {
        font-weight: bold;
        font-size: 1.0417vw;
        color: #000000;
        line-height: 1.875vw;
        text-align: left;
        margin-top: 1.0417vw;
        margin-bottom: .8333vw;
        padding-right: 3.2813vw;
      }

      .text {
        font-weight: 400;
        font-size: .625vw;
        color: #000000;
        line-height: 1.0938vw;
        margin-bottom: .8333vw;
      }
    }
  }
}

.services {
  height: 27.2917vw;

  .services-content {
    height: 100%;
    display: flex;

    .services-left {
      width: 44.1667vw;
    }

    .services-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 4.5313vw 4.5313vw 0 3.125vw;
      background: rgba(16, 75, 212, 0.04);

      .services-label {
        font-weight: 400;
        font-size: 1.25vw;
        color: #092991;
        margin-bottom: .6771vw;
      }

      .services-title {
        font-weight: bold;
        font-size: 2.5vw;
        color: #020202;
        margin-bottom: 2.7083vw;
      }

      .services-description {
        font-size: 0.8333vw;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.6667vw;
        margin-bottom: 2.0833vw;
      }

      .services-question {
        font-size: 1.0417vw;
        font-weight: 500;
        color: #000000;
      }
    }
  }
}

.about-us {
  padding: 6.9271vw 20.6771vw 5.2083vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: 400;
    font-size: 1.25vw;
    color: rgba(0, 0, 0, 0.6);
  }

  .sub-title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    line-height: 3.75vw;
    text-align: center;
    margin-top: .9375vw;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 3.0208vw;
    margin-top: 3.3854vw;
    margin-bottom: 3.75vw;

    .about-us-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &:nth-child(3) {
        align-items: flex-end;

        .about-us-item-description {
          text-align: right;
        }
      }

      .about-us-item-title {
        font-weight: bold;
        font-size: 1.25vw;
        color: #000000;
        line-height: 1.875vw;
        margin-bottom: .5208vw;
      }

      .about-us-item-description {
        font-weight: 400;
        font-size: .8333vw;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.25vw;
      }
    }
  }
}

.unique-value {
  padding: 4.9479vw 18.9063vw 4.1146vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F9F9FB;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    line-height: 3.75vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: .8333vw;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.25vw;
    margin: .9375vw 2.7604vw;
    text-align: center;
    margin-bottom: 2.7604vw;
  }

  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25vw;

    .grid3-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .grid3-item-title {
        font-weight: bold;
        font-size: 1.25vw;
        color: #000000;
        line-height: 1.875vw;
        text-align: center;
        margin: .9375vw 0 .4688vw;
      }

      .grid3-item-text {
        font-weight: 400;
        font-size: .8333vw;
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.25vw;
      }
    }
  }
}

.features {
  padding: 6.5104vw 18.75vw 4.6875vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #000000;
    text-align: center;
    margin-bottom: .2604vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: 1.25vw;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 4.4792vw;
    text-align: center;
  }

  .features-pic {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1.9271vw 0 2.9688vw;
    gap: 1.25vw;

    img {
      width: 14.6875vw;
    }
  }

  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5625vw;

    .grid4-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      img {
        width: 4.1667vw;
      }

      .grid4-item-title {
        font-weight: bold;
        font-size: 1.0417vw;
        color: #000000;
        margin: 1.5625vw 0 1.0417vw;
        min-height: 3.125vw;
      }

      .grid4-item-text {
        font-weight: 400;
        font-size: .7292vw;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .btn {
    margin-top: 2.9688vw;
  }
}

.production-line {
  display: flex;
  flex-direction: row;
  padding: 2.8125vw 17.1875vw 4.8438vw;
  gap: 2.6042vw;
  background-color: #F9F9FB;

  .left {
    width: 31.5625vw;
    flex-shrink: 0;
  }

  .title {
    font-weight: bold;
    font-size: 1.875vw;
    color: #000000;
    line-height: 2.8125vw;
    text-align: left;
    margin-bottom: 1.5625vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: .8333vw;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.25vw;
    text-align: left;
    margin-bottom: 3.6458vw;
    display: flex;
    gap: 1.0417vw;
  }

  .content-item {
    display: flex;
    align-items: center;
    gap: 1.6667vw;
    margin-bottom: 4.3229vw;

    .content-item-text-title {
      font-weight: bold;
      font-size: 1.0417vw;
      color: #000000;
      margin-bottom: .6771vw;
    }

    .content-item-text-sub-title {
      font-weight: 400;
      font-size: .8333vw;
      color: #000000;
    }
  }
}

.contact-us {
  padding: 0 18.75vw 4.5313vw;
  background-color: #F9F9FB;

  >.title {
    font-weight: bold;
    font-size: 2.5vw;
    color: #020202;
    line-height: 3.75vw;
    margin-bottom: 2.9167vw;
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 1.25vw;
    height: 26.8229vw;

    .left {
      background: #FFFFFF;
      border-radius: .625vw;
      padding: 2.1875vw 1.5625vw 2.0833vw;
      height: 100%;

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
    }

    .right {
      background: #FFFFFF;
      border-radius: .625vw;
      padding: 2.2396vw 7.2917vw 2.6042vw 3.6458vw;
      height: 100%;

      >.title {
        font-weight: bold;
        font-size: 1.25vw;
        color: #000000;
        line-height: 1.875vw;
        margin-bottom: 2.6042vw;
      }

      .contact-info {
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: .6771vw;
          margin-bottom: 2.0833vw;

          &:last-child {
            margin-bottom: 0;
          }

          .title {
            font-weight: bold;
            font-size: 1.0417vw;
            color: #092991;
          }

          .text {
            font-weight: 400;
            font-size: .8333vw;
            color: rgba(0, 0, 0, 0.8);
          }
        }
      }

      .social-media {
        display: flex;
        gap: 1.0417vw;
      }
    }
  }
}

.logistics-guarantee {
  padding: 3.6458vw 18.75vw 4.2708vw;
  background-color: #fff;

  .title {
    font-weight: bold;
    font-size: 3.3333vw;
    color: #020202;
    margin-bottom: 1.5625vw;
  }

  .sub-title {
    font-weight: 400;
    font-size: 1.25vw;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 3.6458vw;
  }

  .grid2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25vw;

    .grid2-item {
      display: flex;
      align-items: center;
      padding: 2.6042vw 2.0833vw;
      background: #F9F9FB;
      border-radius: .625vw .625vw .625vw .625vw;
      gap: 2.0833vw;

      .grid2-item-content {

        .grid2-item-title {
          font-weight: bold;
          font-size: .9375vw;
          color: #020202;
          margin-bottom: .5208vw;
        }

        .grid2-item-text {
          font-weight: 400;
          font-size: .8333vw;
          color: #020202;
          line-height: 1.25vw;
        }
      }
    }
  }
}

:deep(.default-btn) {
  @include default-btn;
}
</style>