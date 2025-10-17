<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Or
          <NuxtLink
            to="/account/login"
            class="font-medium text-primary-600 hover:text-primary-500"
          >
            sign in to your account
          </NuxtLink>
        </p>
        <!-- SSR 测试数据显示 -->
        <div v-if="testData" class="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
          SSR Test: {{ testData }}
        </div>
      </div>

      <UCard>
        <form @submit.prevent="handleRegister" class="space-y-6">
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
              class="w-full"
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
                @click="handleSendCode"
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

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password <span class="text-red-500">*</span>
            </label>
            <UInput
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              size="lg"
              class="w-full"
              :disabled="loading"
            />
          </div>

          <!-- Customer Name (Optional) -->
          <div>
            <label for="customerName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name (Optional)
            </label>
            <UInput
              id="customerName"
              v-model="form.customerName"
              type="text"
              placeholder="Your name"
              size="lg"
              class="w-full"
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
            Register
          </UButton>
        </form>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sendRegisterCode, register, type RegisterRequest, testCodeSSR } from '~/api/auth'

const { $toast } = useNuxtApp()

definePageMeta({
  layout: 'account'
})

// SSR 测试 - 页面加载时调用
const { data: testResponse } = await testCodeSSR()
const testData = (testResponse.value as any)?.data || null

// 表单数据
const form = ref({
  email: '',
  code: '',
  password: '',
  customerName: ''
})

// 加载状态
const loading = ref(false)
const sendingCode = ref(false)

// 倒计时
const countdown = ref(0)
let countdownTimer: NodeJS.Timeout | null = null

// 表单验证
const isFormValid = computed(() => {
  return form.value.email && form.value.code && form.value.password
})

// 发送验证码
const handleSendCode = async () => {
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
    const response: any = await sendRegisterCode(form.value.email)

    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || 'Failed to send verification code')
      return
    }

    // 发送成功
    $toast.success(response?.message || 'Verification code sent to your email')

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
    $toast.error(error?.data?.message || error?.message || 'Failed to send verification code')
  } finally {
    sendingCode.value = false
  }
}

// 注册
const handleRegister = async () => {
  if (!isFormValid.value) {
    $toast.error('Please fill in all required fields')
    return
  }

  loading.value = true

  try {
    const requestData: RegisterRequest = {
      email: form.value.email,
      code: form.value.code,
      password: form.value.password,
      ...(form.value.customerName && { customerName: form.value.customerName })
    }
    
    const response: any = await register(requestData)

    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || 'An error occurred during registration')
      return
    }

    // 注册成功
    $toast.success(response?.message || 'Registration successful! Please login.')

    // 只有成功才跳转到登录页
    setTimeout(() => {
      navigateTo('/account/login')
    }, 1500)
  } catch (error: any) {
    // HTTP 请求错误或网络错误
    $toast.error(error?.data?.message || error?.message || 'An error occurred during registration')
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
  title: 'Register - Create Account',
  meta: [
    {
      name: 'description',
      content: 'Create your account to get started'
    }
  ]
})
</script>

<style scoped>
/* 额外样式可以在这里添加 */
</style>

