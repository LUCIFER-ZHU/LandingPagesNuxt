/**
 * Nuxt 插件类型声明
 * 为自定义插件提供 TypeScript 类型支持
 */

declare module '#app' {
  interface NuxtApp {
    $customFetch: typeof $fetch
    $customUseFetch: typeof useFetch
    $customUseLazyFetch: typeof useLazyFetch
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $customFetch: typeof $fetch
    $customUseFetch: typeof useFetch
    $customUseLazyFetch: typeof useLazyFetch
  }
}

export {}
