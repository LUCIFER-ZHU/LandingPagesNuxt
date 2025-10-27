<template>
  <div class="reset-page">
    <div class="form-container">
      <div class="form-card">
        <h2 class="form-title">Reset password</h2>

        <form @submit.prevent="handleResetPassword" class="reset-form">
          <!-- Email -->
          <div class="form-group flex items-center gap-2">
            <div class="input-wrapper flex-1">
              <span class="input-icon">
                <i class="icon mnfont mn-Mail-open"></i>
              </span>
              <UInput id="email" v-model="form.email" type="email" placeholder="mail" :disabled="loading"
                class="form-input" :ui="{ base: 'custom-input' }" />
            </div>
            <UButton type="button" @click="handleSendResetCode"
              :disabled="!form.email || countdown > 0 || sendingCode" :loading="sendingCode" class="send-btn"
              color="primary">
              {{ countdown > 0 ? `${countdown}s` : 'Send' }}
            </UButton>
          </div>

          <!-- Verification Code -->
          <div class="form-group">
            <div class="input-wrapper">
              <span class="input-icon">
                <i class="icon mnfont mn-Comment"></i>
              </span>
              <UInput id="code" v-model="form.code" placeholder="Verification code" :disabled="loading"
                class="form-input" :ui="{ base: 'custom-input' }" />
            </div>
          </div>

          <!-- New Password -->
          <div class="form-group">
            <div class="input-wrapper">
              <span class="input-icon">
                <i class="icon mnfont mn-Password"></i>
              </span>
              <UInput id="newPassword" v-model="form.newPassword" type="password" placeholder="New Password"
                :disabled="loading" class="form-input" :ui="{ base: 'custom-input' }" />
            </div>
          </div>

          <!-- Submit Button -->
          <UButton type="submit" :disabled="!isFormValid || loading" :loading="loading" class="submit-btn" block
            color="primary">
            Reset Password
          </UButton>
        </form>

        <p class="signin-link">
          Remember your password?
          <NuxtLink to="/account/login">
            Sign in here
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendResetCode, resetPassword, type ResetPasswordRequest } from '~/api/auth'

const { $toast } = useNuxtApp()
const { buildImageUrl } = useImageUrl()

definePageMeta({
  layout: 'account'
})

// 表单数据
const form = ref({
  email: '',
  code: '',
  newPassword: ''
})

// 加载状态
const loading = ref(false)
const sendingCode = ref(false)

// 倒计时
const countdown = ref(0)
let countdownTimer: NodeJS.Timeout | null = null

// 表单验证
const isFormValid = computed(() => {
  return form.value.email && form.value.code && form.value.newPassword
})

// 发送重置验证码
const handleSendResetCode = async () => {
  if (!form.value.email) {
    $toast.error('Please enter your email address')
    return
  }

  // 简单的邮箱格式验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    $toast.error('Please enter a valid email address')
    return
  }

  sendingCode.value = true

  try {
    const response: any = await sendResetCode(form.value.email)

    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || 'Failed to send reset code')
      return
    }

    // 发送成功
    $toast.success(response?.message || 'Reset code sent to your email')

    // 只有成功才开始90秒倒计时
    countdown.value = 90
    countdownTimer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        if (countdownTimer) {
          clearInterval(countdownTimer)
          countdownTimer = null
        }
      }
    }, 1000)
  } catch (error: any) {
    // HTTP 请求错误或网络错误
    $toast.error(error?.data?.message || error?.message || 'Failed to send reset code')
  } finally {
    sendingCode.value = false
  }
}

// 重置密码
const handleResetPassword = async () => {
  if (!isFormValid.value) {
    $toast.error('Please fill in all required fields')
    return
  }

  loading.value = true

  try {
    const requestData: ResetPasswordRequest = {
      email: form.value.email,
      code: form.value.code,
      newPassword: form.value.newPassword
    }
    
    const response: any = await resetPassword(requestData)

    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || 'An error occurred while resetting password')
      return
    }

    // 重置成功
    $toast.success(response?.message || 'Password reset successful! Please login with your new password.')

    // 只有成功才跳转到登录页
    setTimeout(() => {
      navigateTo('/account/login')
    }, 1500)
  } catch (error: any) {
    // HTTP 请求错误或网络错误
    $toast.error(error?.data?.message || error?.message || 'An error occurred while resetting password')
  } finally {
    loading.value = false
  }
}

// 清理定时器
onUnmounted(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer)
  }
})

// SEO 元数据
useHead({
  title: 'Reset Password',
  meta: [
    {
      name: 'description',
      content: 'Reset your account password'
    }
  ]
})
</script>

<style scoped lang="scss">
.reset-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #D9D9D9;
  overflow: hidden;
}

.form-container {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 28vw;
  min-width: 320px;

  @media (max-width: 768px) {
    left: 50%;
  }
}

.form-card {
  background: #FFFFFF;
  border-radius: 1.25vw;
  padding: 6.25vw 2.1875vw;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 6vw;
    border-radius: 3vw;
  }
}

.form-title {
  font-size: 2.2vw;
  font-weight: 600;
  color: $primary-color;
  margin: 0 0 2.5vw 0;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 5vw;
  }
}

.reset-form {
  display: flex;
  flex-direction: column;
  gap: 1.0417vw;

  @media (max-width: 768px) {
    gap: 3vw;
  }
}

.form-group {
  width: 100%;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #F9F9FB;
  border-radius: 0.5vw;
  padding: 0.8vw 1vw;
  gap: 0.8vw;

  @media (max-width: 768px) {
    border-radius: 1.5vw;
    padding: 2vw 3vw;
    gap: 2vw;
  }
}

.input-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  :deep(img) {
    width: 1.7708vw;
    height: 1.7708vw;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 4vw;
      height: 4vw;
    }
  }
}

.form-input {
  flex: 1;

  :deep(input) {
    border: none;
    background: transparent;
    outline: none;
    box-shadow: none;
    font-size: 1vw;
    color: #333333;
    padding: 0;

    &::placeholder {
      color: #8D8D8D;
    }

    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
  }
}

:deep(.send-btn) {
  flex-shrink: 0;
  border-radius: .625vw;
  padding: .6771vw 1.5625vw;
  font-size: clamp(10px, 1.25vw, 1.25vw);

  @media (max-width: 768px) {
    padding: 2vw 4vw;
    border-radius: 1.2vw;
    font-size: 3vw;
  }
}

:deep(.submit-btn) {
  padding: .6771vw 1.5625vw;
  border-radius: .625vw;
  font-size: clamp(10px, 1.25vw, 1.25vw);

  @media (max-width: 768px) {
    padding: 2vw 4vw;
    border-radius: 1.2vw;
    font-size: 3vw;
  }
}

.signin-link {
  text-align: center;
  font-size: 0.9vw;
  color: #666666;
  margin-top: 2vw;

  a {
    color: #1a1a3d;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #2a2a4d;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 3.2vw;
    margin-top: 4vw;
  }
}
</style>

