<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- 第一行：三列布局 -->
      <div class="footer-top">
        <!-- 工厂介绍 -->
        <div class="footer-column">
          <h3 class="footer-title">Our Factory View</h3>
          <p class="footer-text pr-[4.1667vw]">
            We Have Been Giving Techology Support To 50+ countries<br>
            Operating with 200+ skilled engineers and advanced automation
          </p>
        </div>

        <!-- 服务介绍 -->
        <div class="footer-column">
          <h3 class="footer-title">Our Service</h3>
          <div class="service-item pr-[2.0833vw]">
            <h4>On-Time Delivery:</h4>
            <p>Ensuring timely delivery to support your production.</p>
          </div>
          <div class="service-item">
            <h4>Expert Support:</h4>
            <p>Offering professional consultation and service throughout.</p>
          </div>
        </div>

        <!-- 合作介绍 -->
        <div class="footer-column">
          <h3 class="footer-title">Cooperate with us</h3>
          <p class="footer-text">
            We will provide customized designs for your machine tool solutions to obtain cost-effective working
            machines.
          </p>

          <!-- 社交媒体图标 -->
          <div class="social-icons">
            <a href="#" class="social-icon youtube">
              <NuxtLink to="https://www.youtube.com/@MINNUOGROUP-v5r" target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/youtube.webp')" alt="YouTube" />
              </NuxtLink>
            </a>
            <a href="#" class="social-icon facebook">
              <NuxtLink to="https://www.facebook.com/people/Chris-King/pfbid02taxM6qiZqwUdbM9fW2LtZeKqGYqUXHu7txgb8C6Y2mK551oJNHczcCiDBefgHfy7l/" target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/facebook.webp')" alt="Facebook" />
              </NuxtLink>
            </a>
            <a href="#" class="social-icon instagram">
              <NuxtLink to="https://www.instagram.com/chrisking5538/" target="_blank">
                <NuxtImg densities="1" :src="buildImageUrl('image/ig.webp')" alt="Instagram" />
              </NuxtLink>
            </a>
          </div>
        </div>
      </div>

      <!-- 第二行：三列布局 -->
      <div class="footer-middle">
        <!-- 公司信息 -->
        <div class="footer-column">
          <h3 class="footer-title">MINNUO</h3>
          <div class="company-info">
            <h4>Europe & North America</h4>
            <div class="contact-item mb-[1.9271vw]">
              <div class="icon-wrapper">
                <NuxtImg :src="buildImageUrl('image/location.webp')" alt="Location" />
              </div>
              <div class="contact-text">
                <p>USA Office Address:</p>
                <p>8 The Green Ste A Dover Kent 19901</p>
              </div>
            </div>

            <h4>Asia-Pacific Region</h4>
            <div class="contact-item mb-[1.0417vw]">
              <div class="icon-wrapper">
                <NuxtImg :src="buildImageUrl('image/location.webp')" alt="Location" />
              </div>
              <div class="contact-text">
                <p>China Office:</p>
                <p>Lishi Exploit Park,Xinqiao Industrial Park, Jingjiang City</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon-wrapper">
                <NuxtImg :src="buildImageUrl('image/whatsapp.webp')" alt="WhatsApp" />
              </div>
              <p>WhatsApp (Tel)：+86 15366749631</p>
            </div>
          </div>
        </div>

        <!-- 产品导航 -->
        <div class="footer-column">
          <h3 class="footer-title">Product</h3>
          <ul class="footer-nav">
            <li>
              <NuxtLink to="#">HOME</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">PRODUCT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">NEWS</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">ABOUT US</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">CONTACTS</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 订阅 -->
        <div class="footer-column">
          <h3 class="footer-title">Subscribe Now</h3>
          <p class="footer-text">
            Stay updated with the latest news, product updates, and exclusive offers by subscribing to our weekly
            newsletter.
          </p>

          <!-- 订阅表单 -->
          <div class="subscribe-form">
            <UInput 
              v-model="contactForm.email" 
              placeholder="Enter Your E-mail" 
              class="subscribe-input" 
            />
            <UButton 
              class="subscribe-button rounded-none" 
              :loading="isSubmitting"
              @click="handleFormSubmit"
            >Send</UButton>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * 应用底部组件
 * 提供公司信息、服务介绍、联系方式和订阅功能
 */

// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();

// 使用联系表单组合函数 - 仅处理邮件订阅
const {
  contactForm,
  handleFormSubmit,
  isSubmitting
} = useContactForm({
  customFields: { name: 'Newsletter Subscription' } // 添加订阅标记
});

</script>

<style lang="scss" scoped>
.app-footer {
  background: #020202;
  color: #ffffff;
  padding: 3.2292vw 13.75vw;
}

.footer-content {
  width: 100%;
}

/* 顶部三列布局 */
.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.125vw;
}

/* 中部三列布局 */
.footer-middle {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.125vw;
}

/* 列样式 */
.footer-column {
  flex: 1;
  padding-right: 2.0833vw;

  &:last-child {
    padding-right: 0;
  }
}

/* 标题样式 */
.footer-title {
  font-weight: bold;
  font-size: 1.6667vw;
  color: #FFFFFF;
  margin-bottom: 1.1458vw;
}

/* 文本样式 */
.footer-text {
  font-weight: 400;
  font-size: .8333vw;
  color: #B2B2B2;
  line-height: 1.25vw;
}

/* 服务项目样式 */
.service-item {
  margin-bottom: 1.0417vw;

  h4 {
    font-weight: 400;
    font-size: .8333vw;
    color: #B2B2B2;
  }

  p {
    font-weight: 400;
    font-size: .8333vw;
    color: #B2B2B2;
  }
}

/* 社交媒体图标 */
.social-icons {
  display: flex;
  margin-top: 3.125vw;
  gap: 0.5208vw;

  .social-icon {
    width: 1.5625vw;
    height: 1.5625vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

/* 公司信息样式 */
.company-info {
  h4 {
    font-size: 0.9375vw;
    margin: 1.0417vw 0 0.5208vw;
    color: #B2B2B2;
    font-weight: bold;
  }
}

/* 联系项目样式 */
.contact-item {
  display: flex;
  align-items: flex-start;
  font-size: 0.8333vw;

  p {
    font-size: .8333vw;
    color: #B2B2B2;
  }

  .icon-wrapper {
    width: 1.0417vw;
    height: 1.0417vw;
    margin-right: 0.5208vw;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .contact-text {
    p {
      margin: 0;
      line-height: 1.4;
      font-size: .8333vw;
      color: #B2B2B2;
    }
  }
}

/* 页脚导航 */
.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 30% 20%;
  gap: 1.4583vw 1.8229vw;

  li {
    margin-bottom: 0.5208vw;
    a{
      font-weight: 400;
      font-size: .8333vw;
      color: #B2B2B2;

      &:hover {
        color: #ffffff;
      }
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.8333vw;
    transition: color 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

/* 订阅表单 */
.subscribe-form {
  display: flex;
  margin-top: 1.0417vw;

  .subscribe-input {
    flex: 1;
    background-color: #353535;
    
    :deep(input) {
      color: #ffffff;
      padding: 0.5208vw 1.0417vw;
      font-size: 0.8333vw;
      background-color: #353535;
      border: none;
      outline: none;
      box-shadow: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

  }

  :deep(.subscribe-button) {
      cursor: pointer;
      background-color: #ffffff;
      color: #000000;
      border: none;
      padding: 0.5208vw 1.0417vw;
      font-size: 0.8333vw;
      &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>
