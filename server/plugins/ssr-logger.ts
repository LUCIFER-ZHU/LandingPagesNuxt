/**
 * Nitro 插件 - SSR 日志监控
 * 监控服务端渲染过程和请求
 */
export default defineNitroPlugin((nitroApp) => {
  console.log('✅ Nitro SSR Logger 插件已加载')

  // 监听页面渲染
  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('🖥️  [SSR 渲染] URL:', event.path)
    console.log('🖥️  [SSR 渲染] 方法:', event.method)
    console.log('🖥️  [SSR 渲染] 状态码:', response.statusCode)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  })

  // 监听所有请求
  nitroApp.hooks.hook('request', (event) => {
    // 过滤掉静态资源和 HMR 请求
    const path = event.path
    if (
      !path.includes('/_nuxt/') && 
      !path.includes('/__nuxt_') && 
      !path.includes('.js') && 
      !path.includes('.css') &&
      !path.includes('.ico') &&
      !path.includes('hot-update')
    ) {
      console.log('📥 [Nitro 请求]', event.method, event.path)
    }
  })

  // 监听错误
  nitroApp.hooks.hook('error', (error, { event }) => {
    console.error('❌ [SSR 错误]', {
      path: event?.path,
      error: error.message,
      stack: error.stack
    })
  })
})

