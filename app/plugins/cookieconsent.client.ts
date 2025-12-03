/**
 * Cookie Consent 插件
 * 
 * 此插件已注释，Cookie 同意逻辑已移至页面组件中
 * Cookie 同意逻辑现在在 各页面 中实现
 * 
 * 如果需要恢复全局插件，取消下面的注释即可
 */

// 导出空插件以避免 lint 错误
export default defineNuxtPlugin(() => {
  // 插件已禁用，逻辑在页面组件中
})

/*
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "~/assets/css/cookieconsent-custom.css";
import * as CookieConsent from "vanilla-cookieconsent";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
        gtag_report_conversion: (url?: string) => boolean;
    }
}

export default defineNuxtPlugin(() => {
    CookieConsent.run({
        cookie: {
            name: "minnuo_cookie_consent",
            expiresAfterDays: 365,
        },
        revision: 0,
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
        onFirstConsent: ({ cookie }) => {
            console.log("First consent given:", cookie);
        },
        onConsent: ({ cookie }) => {
            console.log("Consent given:", cookie);
            const acceptedCategories = cookie.categories;
            const onlyNecessary = acceptedCategories.length === 1 && acceptedCategories.includes('necessary');
            if (onlyNecessary) {
                const cookieName = 'minnuo_cookie_consent';
                const cookieValue = document.cookie
                    .split('; ')
                    .find(row => row.startsWith(`${cookieName}=`))
                    ?.split('=')[1];
                if (cookieValue) {
                    const maxAge = 7 * 24 * 60 * 60;
                    document.cookie = `${cookieName}=${cookieValue}; max-age=${maxAge}; path=/; SameSite=Lax`;
                    console.log("User rejected cookies, will ask again in 7 days");
                }
            }
            if (acceptedCategories.includes('analytics')) {
                window.dispatchEvent(new CustomEvent('analytics-consent-given'))
            }
        },
        onChange: ({ changedCategories, changedServices }) => {
            console.log("Cookie preferences changed:", changedCategories, changedServices);
            if (changedCategories.includes('analytics')) {
                window.dispatchEvent(new CustomEvent('analytics-consent-changed', {
                    detail: { changedCategories, changedServices }
                }))
                const consent = CookieConsent.getUserPreferences()
                if (!consent.acceptedCategories.includes('analytics')) {
                    window.location.reload()
                }
            }
        },
        categories: {
            necessary: {
                enabled: true,
                readOnly: true,
            },
            analytics: {
                autoClear: {
                    cookies: [
                        { name: /^_ga/ },
                        { name: "_gid" },
                    ],
                },
            },
            marketing: {},
        },
        language: {
            default: "en",
            translations: {
                en: {
                    consentModal: {
                        title: "We use cookies",
                        description: "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking 'Accept all', you consent to our use of cookies.",
                        acceptAllBtn: "Accept all",
                        acceptNecessaryBtn: "Reject all",
                        showPreferencesBtn: "Manage preferences",
                        footer: `<a href="/privacy-policy" target="_blank">Privacy Policy</a>`,
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
                                description: "We use cookies to ensure the basic functionality of our website and, with your consent, for analytics and marketing purposes. You can change your preferences at any time.",
                            },
                            {
                                title: "Strictly Necessary Cookies",
                                description: "These cookies are essential for the proper functioning of the website and cannot be disabled. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in or filling in forms.",
                                linkedCategory: "necessary",
                            },
                            {
                                title: "Analytics Cookies",
                                description: "These cookies help us understand how visitors interact with our website. All data is anonymized and cannot be used to identify you.",
                                linkedCategory: "analytics",
                            },
                            {
                                title: "Marketing Cookies",
                                description: "These cookies are used to show you ads that are more relevant to you and your interests. They may also be used to limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.",
                                linkedCategory: "marketing",
                            },
                            {
                                title: "More Information",
                                description: 'For any questions regarding our cookie policy and your choices, please <a href="/contact">contact us</a>.',
                            },
                        ],
                    },
                },
            },
        },
    });
    return {
        provide: {
            cookieConsent: CookieConsent,
        },
    };
});
*/

