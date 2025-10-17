import { defineStore } from 'pinia'

export interface User {
  id?: string | number
  email?: string
  customerName?: string
  [key: string]: any
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    /**
     * 设置用户信息和token
     */
    setAuth(user: User, token: string) {
      this.user = user
      this.token = token
      this.isAuthenticated = true
    },

    /**
     * 更新用户信息
     */
    setUser(user: User) {
      this.user = user
    },

    /**
     * 设置token
     */
    setToken(token: string) {
      this.token = token
    },

    /**
     * 清除认证信息（登出）
     */
    clearAuth() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
    },

    /**
     * 登出
     */
    async logout() {
      this.clearAuth()
      // 可以在这里调用后端登出接口
      // 然后重定向到登录页
      if (process.client) {
        await navigateTo('/account/login')
      }
    },
  },

  // 使用持久化插件保存状态到 localStorage
  persist: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  },
})

