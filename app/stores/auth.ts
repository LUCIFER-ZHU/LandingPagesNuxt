import { defineStore } from 'pinia'

export interface User {
  id?: string | number  // 映射自后端的 customerId
  customerId?: string | number  // 后端原始字段
  email?: string
  customerName?: string
  [key: string]: any
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    /**
     * 设置用户信息
     */
    setAuth(user: User) {
      this.user = user
      this.isAuthenticated = true
    },

    /**
     * 更新用户信息
     */
    setUser(user: User) {
      this.user = user
    },

    /**
     * 清除认证信息（登出）
     */
    clearAuth() {
      this.user = null
      this.isAuthenticated = false
    },

  },

  // 使用持久化插件保存状态到 localStorage
  persist: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  },
})

