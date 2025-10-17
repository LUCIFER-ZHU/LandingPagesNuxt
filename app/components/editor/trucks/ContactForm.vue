<template>
  <div class="distributor-contact">
    <h2 class="title">Get Distributor Price Today!</h2>

    <div class="steps">
      <div class="step">
        <NuxtImg densities="1" :src="buildImageUrl('/image/icon6.webp')" alt="step1" class="step-icon" loading="lazy" />
        <span>Download full catalog</span>
      </div>

      <div class="step">
        <NuxtImg densities="1" :src="buildImageUrl('/image/icon7.webp')" alt="step2" class="step-icon" loading="lazy" />
        <span>Contact us for free quotation</span>
      </div>

      <div class="step">
        <NuxtImg densities="1" :src="buildImageUrl('/image/icon8.webp')" alt="step3" class="step-icon" loading="lazy" />
        <span>Start your order from 1 unit or more</span>
      </div>
    </div>


    <UForm :state="contactForm" class="contact-form" @submit="handleFormSubmit">
      <div class="form-grid">
        <div class="form-group">
          <UInput v-model="contactForm.name" placeholder="Name" :error="hasFieldError('name')"
            @update:model-value="(val) => updateField('name', val)" @input="clearFieldError('name')"
            :ui="{ base: 'bg-[#F9F9FB] ring-0 h-[3.125vw]' }" />
          <div v-if="getFieldError('name')" class="error-message">
            {{ getFieldError('name') }}
          </div>
        </div>

        <div class="form-group">
          <UInput v-model="contactForm.email" placeholder="Email" :error="hasFieldError('email')"
            @update:model-value="(val) => updateField('email', val)" @input="clearFieldError('email')"
            :ui="{ base: 'bg-[#F9F9FB] ring-0 h-[3.125vw]' }" />
          <div v-if="getFieldError('email')" class="error-message">
            {{ getFieldError('email') }}
          </div>
        </div>

        <div class="form-group">
          <UInput v-model="contactForm.whatsapp" placeholder="WhatsApp or phone number"
            :error="hasFieldError('whatsapp')" @update:model-value="(val) => updateField('whatsapp', val)"
            @input="clearFieldError('whatsapp')" :ui="{ base: 'bg-[#F9F9FB] ring-0 h-[3.125vw]' }" />
          <div v-if="getFieldError('whatsapp')" class="error-message">
            {{ getFieldError('whatsapp') }}
          </div>
        </div>
      </div>

      <div class="message-group">
        <UTextarea v-model="contactForm.message" placeholder="Message" :rows="12" :error="hasFieldError('message')"
          @update:model-value="(val) => updateField('message', val)" @input="clearFieldError('message')" :ui="{
            root: 'w-full',
            base: 'bg-[#F9F9FB] ring-0'
          }" />
        <div v-if="getFieldError('message')" class="error-message">
          {{ getFieldError('message') }}
        </div>
      </div>

      <div class="form-actions">
        <UButton type="submit" color="primary" :loading="isSubmitting" :disabled="isSubmitting" class="submit-button">
          Contact Us
        </UButton>
      </div>
    </UForm>

  </div>
</template>

<script setup lang="ts">
// 导入图片URL构建函数
const { buildImageUrl } = useImageUrl();

// 使用联系表单组合函数
const {
  contactForm,
  handleFormSubmit,
  updateField,
  isSubmitting,
  clearFieldError,
  getFieldError,
  hasFieldError
} = useContactForm();
</script>

<style scoped lang="scss">
.distributor-contact {
  width: 100%;
  padding: 2.5vw 18.8021vw;
  background: #fff;
}

.title {
  font-weight: bold;
  font-size: clamp(14px, 2.5vw, 2.5vw);
  color: #020202;
  margin-bottom: 1.5625vw;
}

.steps {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4.6875vw;
}

.step {
  display: flex;
  align-items: center;
  gap: .7813vw;
  width: 30%;
  text-align: center;
  font-weight: bold;
  font-size: clamp(10px, .8333vw, .8333vw);
  color: #000000;
}

.step-icon {
  width: 2.0833vw;
  height: 2.0833vw;
}

.form-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 12px;
  width: 100%;
}

.contact-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5vw;
  margin-bottom: 1.5vw;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .error-message {
    font-size: 0.875rem;
    color: #ef4444;
    margin-top: 0.25rem;
  }
}

.message-group {
  margin-bottom: 1.5vw;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

:deep(.submit-button) {

  @include button-hover-effect(-0.1042vw, 1.05, 0.98);
  
  padding: 1.1979vw 4.0625vw;
  font-weight: bold;
  background-color: #000000;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: clamp(10px, 1.25vw, 1.25vw);
  cursor: pointer;

  &:hover {
    box-shadow: 0vw .2604vw .4167vw 0vw rgba(0, 0, 0, 0.3);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    flex-direction: column;
    gap: 1.5vw;
  }

  .step {
    width: 100%;
  }
}
</style>
