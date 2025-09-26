<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Cookie preferences center trigger (hidden) -->
    <a href="#" id="open_preferences_center" style="display:none;">Update cookies preferences</a>
  </NuxtLayout>
</template>

<script setup lang="ts">
// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();

/**
 * 应用入口文件
 * 设置全局配置和样式
 * */

// 使用 useHead 添加额外的 meta 标签和 Google Analytics 跟踪代码
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#092991' },
    { name: 'msapplication-TileColor', content: '#092991' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'MINNUO Group' },
    { name: 'application-name', content: 'MINNUO Group' },
  ],
  link: [
    // 预加载LCP关键图片资源
    { 
      rel: 'preload', 
      as: 'image', 
      href: buildImageUrl('/image/img3.webp'), 
      fetchpriority: 'high' 
    },
  ],  
  script: [
    // Google Ads/Analytics (gtag.js)
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-10801798623',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'AW-10801798623');
        // Define conversion helper similar to the provided snippet
        window.gtag_report_conversion = function(url){
          var callback = function(){ if (typeof(url) !== 'undefined') { window.location = url; } };
          gtag('event', 'conversion', {
            'send_to': 'AW-10801798623/mSIWCPH6iIMYEN-72Z4o',
            'event_callback': callback
          });
          return false;
        };
      `,
      type: 'text/javascript'
    },
    // TermsFeed Cookie Consent library
    {
      src: 'https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js'
    },
    // Cookie Consent init with consent -> gtag callback
    {
      innerHTML: `
        document.addEventListener('DOMContentLoaded', function () {
          if (typeof cookieconsent === 'undefined') return;
          cookieconsent.run({
            notice_banner_type: 'simple',
            consent_type: 'express',
            palette: 'light',
            language: 'en',
            page_load_consent_levels: ['strictly-necessary'],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            callbacks: {
              scripts_specific_loaded: function(level) {
                switch(level){
                  case 'targeting':
                    if (typeof gtag === 'function') {
                      gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                        'analytics_storage': 'granted'
                      });
                    }
                    break;
                }
              }
            },
            callbacks_force: true
          });
        });
      `,
      type: 'text/javascript'
    }
  ],
  noscript: [
    { innerHTML: 'Free cookie consent management tool by <a href="https://www.termsfeed.com/">TermsFeed</a>' }
  ]
})
</script>

<style>
</style>