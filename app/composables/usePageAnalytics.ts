/**
 * 页面级分析配置组合函数
 * @description 用于在页面中配置自己的 Google Analytics 和转化跟踪
 */

// 导入 CookieConsent（仅在需要时使用）
import * as CookieConsent from "vanilla-cookieconsent"

// Google Analytics 配置接口
export interface GoogleAnalyticsConfig {
  /** Google Ads 转化 ID (例如: AW-10801798623) */
  conversionId: string
  /** 转化标签 ID (例如: mSIWCPH6iIMYEN-72Z4o) */
  conversionLabel: string
  /** 是否自动加载 GA (默认: true) */
  autoLoad?: boolean
}

/**
 * 页面级分析配置组合函数
 * @param config - Google Analytics 配置
 * @returns 分析相关的方法和状态
 */
export const usePageAnalytics = (config: GoogleAnalyticsConfig) => {

  /**
   * 加载 Google Analytics
   */
  const loadGoogleAnalytics = () => {
    // 检查是否已经加载
    if (typeof (window as any).gtag !== 'undefined') {
      console.log('Google Analytics already loaded')
      return
    }

    // 加载 gtag.js script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.conversionId}`
    document.head.appendChild(script)

    // 初始化 gtag
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || []
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args)
      }
      ;(window as any).gtag = gtag

      gtag('js', new Date())
      gtag('config', config.conversionId)

      // 定义转化上报方法
      ;(window as any).gtag_report_conversion = function (url?: string) {
        const callback = function () {
          if (typeof url !== 'undefined') {
            window.location.href = url
          }
        }
        gtag('event', 'conversion', {
          send_to: `${config.conversionId}/${config.conversionLabel}`,
          event_callback: callback
        })
        return false
      }

      console.log(`Google Analytics loaded for conversion ID: ${config.conversionId}`)
    }
  }

  /**
   * 触发转化跟踪
   * @param url - 可选的重定向 URL
   */
  const reportConversion = (url?: string) => {
    if (typeof window === 'undefined') return

    try {
      // 优先使用全局封装的转化上报方法
      const reporter = (window as any).gtag_report_conversion as
        | undefined
        | ((url?: string) => boolean)
      if (typeof reporter === 'function') {
        reporter(url)
      } else if (typeof (window as any).gtag === 'function') {
        // 回退：直接调用 gtag 事件上报
        ;(window as any).gtag('event', 'conversion', {
          send_to: `${config.conversionId}/${config.conversionLabel}`,
          value: 1.0,
          currency: 'CNY',
          event_callback: function () {
            console.log('Conversion tracking successful')
          }
        })
      } else {
        console.warn('Google Analytics not loaded, cannot report conversion')
      }
    } catch (e) {
      console.warn('Conversion tracking failed:', e)
    }
  }

  /**
   * 检查用户是否同意了分析 Cookie
   */
  const hasAnalyticsConsent = (): boolean => {
    try {
      if (process.client && typeof CookieConsent !== 'undefined') {
        const consent = CookieConsent.getUserPreferences()
        return consent.acceptedCategories.includes('analytics')
      }
      return false
    } catch (e) {
      console.warn('Failed to check analytics consent:', e)
      return false
    }
  }

  /**
   * 初始化页面分析
   * 如果用户已同意分析 Cookie，则自动加载 GA
   */
  const initPageAnalytics = () => {
    // 如果配置了自动加载，且用户已同意分析 Cookie，则加载 GA
    if (config.autoLoad !== false && hasAnalyticsConsent()) {
      loadGoogleAnalytics()
    }

    // 监听 Cookie 同意的自定义事件
    const handleAnalyticsConsent = () => {
      if (hasAnalyticsConsent()) {
        loadGoogleAnalytics()
      }
    }

    // 监听 Cookie 设置变化的自定义事件
    const handleAnalyticsChange = (_event: CustomEvent) => {
      if (hasAnalyticsConsent()) {
        loadGoogleAnalytics()
      } else {
        // 用户拒绝了分析 Cookie，可以在这里清理相关数据
        console.log('Analytics cookies rejected, cleaning up...')
      }
    }

    if (process.client) {
      window.addEventListener('analytics-consent-given', handleAnalyticsConsent)
      window.addEventListener('analytics-consent-changed', handleAnalyticsChange as EventListener)

      // 清理事件监听器
      onUnmounted(() => {
        window.removeEventListener('analytics-consent-given', handleAnalyticsConsent)
        window.removeEventListener('analytics-consent-changed', handleAnalyticsChange as EventListener)
      })
    }
  }

  // 在客户端自动初始化
  if (process.client && config.autoLoad !== false) {
    onMounted(() => {
      initPageAnalytics()
    })
  }

  return {
    loadGoogleAnalytics,
    reportConversion,
    hasAnalyticsConsent,
    initPageAnalytics
  }
}

