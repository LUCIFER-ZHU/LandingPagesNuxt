/**
 * 统一请求工具
 * 封装 $customFetch 和 $customUseFetch，供所有 API 文件使用
 */

/**
 * 获取自定义 fetch 实例（用于客户端命令式调用）
 * 使用方式：const response = await useCustomFetch('/api/xxx', { method: 'POST' })
 */
export const useCustomFetch = () => {
  const { $customFetch } = useNuxtApp()
  return $customFetch
}

/**
 * 获取自定义 useFetch 实例（用于 SSR 和响应式数据）
 * 使用方式：const { data, pending, error } = useCustomUseFetch('/api/xxx', { method: 'GET' })
 */
export const useCustomUseFetch = (url: string, options: any = {}) => {
  const { $customUseFetch } = useNuxtApp()
  return $customUseFetch(url, options)
}

