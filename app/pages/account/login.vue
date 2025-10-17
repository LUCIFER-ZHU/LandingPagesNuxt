<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Or
          <NuxtLink
            to="/account/register"
            class="font-medium text-primary-600 hover:text-primary-500"
          >
            create a new account
          </NuxtLink>
        </p>
      </div>

      <UCard>
        <form @submit.prevent="handleLogin" class="space-y-6">
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
              :disabled="loading"
            />
          </div>

          <!-- Forgot Password Link -->
          <div class="flex items-center justify-end">
            <NuxtLink
              to="/account/reset"
              class="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Forgot your password?
            </NuxtLink>
          </div>

          <!-- Submit Button -->
          <UButton
            type="submit"
            :loading="loading"
            :disabled="!isFormValid"
            block
            size="lg"
          >
            Sign in
          </UButton>
        </form>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { login, type LoginRequest } from '~/api/auth'

const { $toast } = useNuxtApp()
const authStore = useAuthStore()

// 表单数据
const form = ref({
  email: '',
  password: ''
})

// 加载状态
const loading = ref(false)

// 表单验证
const isFormValid = computed(() => {
  return form.value.email && form.value.password
})

// 登录
const handleLogin = async () => {
  if (!isFormValid.value) {
    $toast.error('Please fill in all required fields')
    return
  }

  loading.value = true

  try {
    const requestData: LoginRequest = {
      email: form.value.email,
      password: form.value.password
    }
    
    const response: any = await login(requestData)

    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || 'Invalid email or password')
      return
    }

    // 登录成功 - 假设后端返回的数据结构包含 user 和 token
    // 根据实际后端返回的数据结构调整
    const user = response.data || response
    const token = response.token || response.data?.token || 'mock-token'

    // 保存用户信息到 store
    authStore.setAuth(user, token)

    $toast.success(response?.message || 'Login successful!')

    // 只有成功才跳转到首页
    setTimeout(() => {
      navigateTo('/')
    }, 1000)
  } catch (error: any) {
    // HTTP 请求错误或网络错误
    $toast.error(error?.data?.message || error?.message || 'Invalid email or password')
  } finally {
    loading.value = false
  }
}

// SEO 元数据
useHead({
  title: 'Login - Sign In',
  meta: [
    {
      name: 'description',
      content: 'Sign in to your account'
    }
  ]
})
</script>

<style scoped>
/* 额外样式可以在这里添加 */
</style>

