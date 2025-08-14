 /**
 * $fetch 拦截器插件
 * 自动为所有请求添加环境变量中的 apiBase 作为 baseURL
 * 仅在客户端运行，避免服务端渲染时的重复配置
 * 提供 $customFetch 和 $customUseFetch 方法
 */

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  // 获取环境变量中的 API 基地址
  const apiBase = config.public.apiBase;
  
  // 创建自定义的 $fetch 实例，自动添加 baseURL
  const customFetch = $fetch.create({
    baseURL: apiBase,
    // 请求拦截器
    onRequest({ request, options }) {
      // 如果请求URL已经是完整地址（以http开头），则不添加baseURL
      if (typeof request === 'string' && request.startsWith('http')) {
        options.baseURL = undefined;
      }
      
      // 添加请求时间戳，用于调试
      if (!options.query) {
        options.query = {};
      }
      (options.query as any)['_t'] = Date.now();
    },
    
    // 错误拦截器
    onResponseError({ response, error }) {
      // 统一错误处理
      console.error('API请求错误:', {
        status: response?.status,
        statusText: response?.statusText,
        url: response?.url,
        error: error?.message
      });
      
      // 根据状态码进行不同处理
      switch (response?.status) {
        case 401:
          console.warn('用户未授权，请重新登录');
          break;
        case 403:
          console.warn('没有权限访问该资源');
          break;
        case 404:
          console.warn('请求的资源不存在');
          break;
        case 500:
          console.error('服务器内部错误');
          break;
        default:
          console.error('请求失败:', error?.message);
      }
      
      // 重新抛出错误，让调用方处理
      throw error;
    },
    
    // 请求错误拦截器
    onRequestError({ error }) {
      console.error('请求发送失败:', error?.message);
      throw error;
    }
  });

  /**
   * 自定义的 useFetch 方法
   * 使用我们的拦截器，自动添加 baseURL
   * @param request - 请求URL或选项
   * @param options - 请求选项
   * @returns useFetch 的返回值
   */
  const customUseFetch = (request: any, options: any = {}) => {
    // 确保使用我们的 customFetch
    const fetchOptions = {
      ...options,
      $fetch: customFetch
    };
    
    return useFetch(request, fetchOptions);
  };

  /**
   * 自定义的 useLazyFetch 方法
   * 使用我们的拦截器，自动添加 baseURL
   * @param request - 请求URL或选项
   * @param options - 请求选项
   * @returns useLazyFetch 的返回值
   */
  const customUseLazyFetch = (request: any, options: any = {}) => {
    // 确保使用我们的 customFetch
    const fetchOptions = {
      ...options,
      $fetch: customFetch
    };
    
    return useLazyFetch(request, fetchOptions);
  };

  /**
   * 自定义的 $fetch 方法（用于直接调用）
   * @param request - 请求URL或选项
   * @param options - 请求选项
   * @returns Promise<any>
   */
  const customFetchDirect = (request: any, options: any = {}) => {
    return customFetch(request, options);
  };
  
  // 将自定义的方法注入到 Nuxt 应用中
  return {
    provide: {
      // 提供自定义的 fetch 实例，组件可以通过 $customFetch 使用
      customFetch: customFetchDirect,
      // 提供自定义的 useFetch 方法
      customUseFetch,
      // 提供自定义的 useLazyFetch 方法
      customUseLazyFetch
    }
  };
});
