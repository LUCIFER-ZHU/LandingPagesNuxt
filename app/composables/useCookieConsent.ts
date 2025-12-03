/**
 * Cookie Consent 组合式函数
 * @description 用于在页面中初始化和管理 Cookie 同意功能
 */

// 导入 Cookie Consent（仅在客户端）
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "~/assets/css/cookieconsent-custom.css";
import * as CookieConsent from "vanilla-cookieconsent";

// Cookie Consent 配置选项
export interface CookieConsentOptions {
  /** Cookie 名称（默认: minnuo_cookie_consent） */
  cookieName?: string
  /** Cookie 过期天数（默认: 365） */
  expiresAfterDays?: number
  /** 版本号，增加此数字可以强制用户重新选择（默认: 0） */
  revision?: number
  /** 当用户同意分析 Cookie 时的回调函数 */
  onAnalyticsConsent?: () => void
  /** 当用户拒绝分析 Cookie 时的回调函数 */
  onAnalyticsReject?: () => void
}

/**
 * Cookie Consent 组合式函数
 * @param options - 配置选项
 * @returns Cookie Consent 相关的方法
 */
export const useCookieConsent = (options: CookieConsentOptions = {}) => {
  const {
    cookieName = "minnuo_cookie_consent",
    expiresAfterDays = 365,
    revision = 0,
    onAnalyticsConsent,
    onAnalyticsReject,
  } = options

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
   * 显示 Cookie 偏好设置模态框
   */
  const showPreferences = () => {
    if (process.client && typeof CookieConsent !== 'undefined') {
      CookieConsent.showPreferences()
    }
  }

  /**
   * 接受所有 Cookie
   */
  const acceptAll = () => {
    if (process.client && typeof CookieConsent !== 'undefined') {
      CookieConsent.acceptCategory('all')
    }
  }

  /**
   * 只接受必要 Cookie
   */
  const acceptNecessary = () => {
    if (process.client && typeof CookieConsent !== 'undefined') {
      CookieConsent.acceptCategory('necessary')
    }
  }

  /**
   * 初始化 Cookie Consent
   */
  const initCookieConsent = () => {
    if (!process.client) return

    CookieConsent.run({
      // Cookie configuration
      cookie: {
        name: cookieName,
        expiresAfterDays: expiresAfterDays,
      },

      // Revision management
      revision: revision,

      // UI configuration
      guiOptions: {
        consentModal: {
          layout: "box inline",
          position: "bottom right",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },

      // Callback functions
      onFirstConsent: ({ cookie }) => {
        console.log("First consent given:", cookie);
      },

      onConsent: ({ cookie }) => {
        console.log("Consent given:", cookie);
        
        // If user rejected all cookies (only necessary), set shorter expiration
        const acceptedCategories = cookie.categories;
        const onlyNecessary = acceptedCategories.length === 1 && acceptedCategories.includes('necessary');
        
        if (onlyNecessary) {
          // User rejected, ask again in 7 days
          const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${cookieName}=`))
            ?.split('=')[1];
          
          if (cookieValue) {
            const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
            document.cookie = `${cookieName}=${cookieValue}; max-age=${maxAge}; path=/; SameSite=Lax`;
            console.log("User rejected cookies, will ask again in 7 days");
          }
        }
        
        // 如果用户同意了分析 Cookie，触发回调
        if (acceptedCategories.includes('analytics')) {
          if (onAnalyticsConsent && typeof onAnalyticsConsent === 'function') {
            onAnalyticsConsent()
          }
        } else if (onAnalyticsReject && typeof onAnalyticsReject === 'function') {
          // 如果用户拒绝了分析 Cookie，触发拒绝回调
          onAnalyticsReject()
        }
      },

      onChange: ({ changedCategories, changedServices }) => {
        console.log("Cookie preferences changed:", changedCategories, changedServices);
        if (changedCategories.includes('analytics')) {
          if (hasAnalyticsConsent()) {
            // 用户同意了分析 Cookie
            if (onAnalyticsConsent && typeof onAnalyticsConsent === 'function') {
              onAnalyticsConsent()
            }
          } else {
            // 用户拒绝了分析 Cookie，重新加载页面以清理相关脚本
            if (onAnalyticsReject && typeof onAnalyticsReject === 'function') {
              onAnalyticsReject()
            }
            window.location.reload()
          }
        }
      },

      // Cookie categories
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: "_gid",
              },
            ],
          },
        },
        marketing: {},
      },

      // Language configuration (English)
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking 'Accept all', you consent to our use of cookies.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer: `
                <a href="/privacy-policy" target="_blank">Privacy Policy</a>
              `,
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save settings",
              closeIconLabel: "Close",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    "We use cookies to ensure the basic functionality of our website and, with your consent, for analytics and marketing purposes. You can change your preferences at any time.",
                },
                {
                  title: "Strictly Necessary Cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in or filling in forms.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies help us understand how visitors interact with our website. All data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing Cookies",
                  description:
                    "These cookies are used to show you ads that are more relevant to you and your interests. They may also be used to limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.",
                  linkedCategory: "marketing",
                },
                {
                  title: "More Information",
                  description:
                    'For any questions regarding our cookie policy and your choices, please <a href="/contact">contact us</a>.',
                },
              ],
            },
          },
        },
      },
    })
  }

  // 在客户端自动初始化
  if (process.client) {
    onMounted(() => {
      initCookieConsent()
    })
  }

  return {
    hasAnalyticsConsent,
    showPreferences,
    acceptAll,
    acceptNecessary,
    initCookieConsent,
  }
}

