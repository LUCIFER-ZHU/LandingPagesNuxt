/**
 * Nuxt 插件类型声明
 * 为自定义插件提供 TypeScript 类型支持
 */

declare module '#app' {
  interface NuxtApp {
    $customFetch: typeof $fetch
    $customUseFetch: typeof useFetch
    $customUseLazyFetch: typeof useLazyFetch
    $toast: {
      success: (message: string, options?: any) => void
      error: (message: string, options?: any) => void
      warning: (message: string, options?: any) => void
      info: (message: string, options?: any) => void
      clear: () => void
      dismiss: (id?: string) => void
    }
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $customFetch: typeof $fetch
    $customUseFetch: typeof useFetch
    $customUseLazyFetch: typeof useLazyFetch
    $toast: {
      success: (message: string, options?: any) => void
      error: (message: string, options?: any) => void
      warning: (message: string, options?: any) => void
      info: (message: string, options?: any) => void
      clear: () => void
      dismiss: (id?: string) => void
    }
  }
}

export {}
