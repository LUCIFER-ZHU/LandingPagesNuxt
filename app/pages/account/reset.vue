<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Reset your password
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <NuxtLink
            to="/account/login"
            class="font-medium text-primary-600 hover:text-primary-500"
          >
            Sign in here
          </NuxtLink>
        </p>
      </div>

      <UCard>
        <form @submit.prevent="handleResetPassword" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address <span class="text-red-500">*</span>
            </label>
            <UInput
              id="email"
              v-model="form.email"
              type="email"
              placeholder="your@email.com"
              size="lg"
              :disabled="loading"
            />
          </div>

          <!-- Verification Code -->
          <div>
            <label for="code" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Verification Code <span class="text-red-500">*</span>
            </label>
            <div class="flex gap-2">
              <UInput
                id="code"
                v-model="form.code"
                placeholder="Enter code"
                size="lg"
                class="flex-1"
                :disabled="loading"
              />
              <UButton
                @click="handleSendResetCode"
                :disabled="!form.email || countdown > 0 || sendingCode"
                :loading="sendingCode"
                size="lg"
                color="gray"
                variant="solid"
              >
                {{ countdown > 0 ? `${countdown}s` : 'Send Code' }}
              </UButton>
            </div>
          </div>

          <!-- New Password -->
          <div>
            <label for="newPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              New Password <span class="text-red-500">*</span>
            </label>
            <UInput
              id="newPassword"
              v-model="form.newPassword"
              type="password"
              placeholder="Enter your new password"
              size="lg"
              :disabled="loading"
            />
          </div>

          <!-- Submit Button -->
          <UButton
            type="submit"
            :loading="loading"
            :disabled="!isFormValid"
            block
            size="lg"
          >
            Reset Password
          </UButton>
        </form>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendResetCode, resetPassword, type ResetPasswordRequest } from '~/api/auth'

const { $toast } = useNuxtApp()

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

<style scoped>
/* 额外样式可以在这里添加 */
</style>

