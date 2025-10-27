<template>
  <div class="login-page">
    <div class="form-container">
      <div class="form-card">
        <h2 class="form-title">Log in</h2>

        <form @submit.prevent="handleLogin" class="login-form">
          <!-- Email -->
          <div class="form-group">
            <div class="input-wrapper">
              <span class="input-icon">
                <i class="icon mnfont mn-Mail-open"></i>
              </span>
              <UInput id="email" v-model="form.email" type="email" placeholder="mail" :disabled="loading"
                class="form-input" :ui="{ base: 'custom-input' }" />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <div class="input-wrapper">
              <span class="input-icon">
                <i class="icon mnfont mn-Password"></i>
              </span>
              <UInput id="password" v-model="form.password" type="password" placeholder="Password" :disabled="loading"
                class="form-input" :ui="{ base: 'custom-input' }" />
            </div>
          </div>

          <!-- Forgot Password Link -->
          <div class="forgot-link">
            <NuxtLink to="/account/reset">
              Forgot your password?
            </NuxtLink>
          </div>

          <!-- Submit Button -->
          <UButton type="submit" :disabled="!isFormValid || loading" :loading="loading" class="submit-btn" block
            color="primary">
            Sign in
          </UButton>
        </form>

        <p class="signup-link">
          Or
          <NuxtLink to="/account/register">
            create a new account
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { login, type LoginRequest } from '~/api/auth'

const { $toast } = useNuxtApp()
const { buildImageUrl } = useImageUrl()
const authStore = useAuthStore()

definePageMeta({
  layout: 'account'
})

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

    // 登录成功 - 后端返回 customerId 和 email
    const user = {
      id: response.data.customerId,
      customerId: response.data.customerId,
      email: response.data.email
    }

    // 保存用户信息到 store
    authStore.setAuth(user)

    $toast.success('Login successful!')

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

<style scoped lang="scss">
.login-page {
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

.login-form {
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

.forgot-link {
  text-align: right;
  margin-top: 0.5vw;

  a {
    font-size: 0.85vw;
    color: #666666;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1a1a3d;
    }

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1.5vw;
  }
}

:deep(.submit-btn) {
  padding: .6771vw 1.5625vw;
  border-radius: .625vw;
  font-size: clamp(10px, 1.25vw, 1.25vw);
  margin-top: 0.5vw;

  @media (max-width: 768px) {
    padding: 2vw 4vw;
    border-radius: 1.2vw;
    font-size: 3vw;
    margin-top: 1.5vw;
  }
}

.signup-link {
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

