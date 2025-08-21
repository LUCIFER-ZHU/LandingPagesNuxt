## 项目简介

LandingPagesNuxt 是一套基于 Nuxt 4 的工业温控解决方案落地页项目模板，内置 UI 体系、图片优化、全局请求封装、通知系统和可复用的表单组合函数，开箱即用地支持营销着陆页的快速搭建与表单收集。

- **框架**: Nuxt 4 + Vue 3 (Composition API)
- **UI**: `@nuxt/ui` 组件体系，图片处理由 `@nuxt/image` 负责
- **网络**: 自定义 `$fetch` 拦截器（`$customFetch`/`$customUseFetch`）
- **通知**: `vue-toastification` 全局 `$toast`
- **表单**: `useContactForm` 组合函数（完整校验/提交流程）
- **渲染模式**: SPA（`ssr: false`）


## 快速开始

### 运行环境
- Node.js ≥ 18
- 包管理器：推荐 `pnpm`

### 安装依赖
```bash
# pnpm（推荐）
pnpm install
# 或 npm
npm install
```

### 本地开发
```bash
# 使用开发环境变量 .env.development
pnpm dev
# 启动后访问 http://localhost:3000
```

### 构建与预览
```bash
# 生产构建（使用 .env.production）
pnpm build

# 本地预览生产包
pnpm preview
```


## 环境变量
项目通过 `runtimeConfig.public` 暴露前端可用的公共配置：

```env
# .env.development / .env.production
NUXT_PUBLIC_API_BASE=https://api.example.com
NUXT_PUBLIC_IMAGE_BASE=https://cdn.example.com/images
```

对应 `nuxt.config.ts`：

```ts
runtimeConfig: {
  public: {
    apiBase: process.env.NUXT_PUBLIC_API_BASE,   // 自定义 fetch 的 baseURL
    imageBase: process.env.NUXT_PUBLIC_IMAGE_BASE
  }
}
```


## 目录结构（精简）

```text
app/
  components/           # 业务与编辑器组件
  composables/          # 组合函数（useContactForm / useImageUrl 等）
  layouts/              # 布局（default.vue）
  pages/                # 路由页面（index.vue 等）
  plugins/              # 插件（fetch 拦截器、toast）
  assets/               # 全局样式与变量（SCSS）
docs/                   # 组合函数使用文档
public/                 # 静态资源（favicon 等）
```


## 核心能力与约定

### UI 与图片
- 组件库：`@nuxt/ui`（v3.3.0）
- 图片：`@nuxt/image`（v1.11.0）；默认保留原图密度，`densities: [1]`
- 约定：页面中需要图片渲染时优先使用 `@nuxt/image` 提供的组件和能力；普通按钮、表单等 UI 均使用 `@nuxt/ui`。

### 网络请求（拦截器）
插件：`app/plugins/fetch-interceptor.client.ts`

- 暴露：
  - `$customFetch(request, options)` 直接发起请求
  - `$customUseFetch(request, options)` 组合式数据获取
  - `$customUseLazyFetch(request, options)` 懒加载获取
- 特性：
  - 自动注入 `baseURL = runtimeConfig.public.apiBase`
  - 对完整 URL（以 `http` 开头）不覆盖 `baseURL`
  - 请求统一添加 `_t` 时间戳参数
  - 统一错误打印与状态码分支处理，并将错误抛给调用方

使用示例：

```ts
const { $customFetch } = useNuxtApp()
const data = await $customFetch('/ping')
```

### 全局通知（Toast）
插件：`app/plugins/toast.client.ts`

- 暴露：`$toast`
- 默认位置：右上角；可拖拽、自动关闭

使用示例：

```ts
const { $toast } = useNuxtApp()
$toast.success('Operation succeeded')
```


## 表单系统：useContactForm

文件：`app/composables/useContactForm.ts`

功能：提供联系方式表单的数据管理、校验、提交与重置。

主要导出：
- `contactForm`（ref）: 表单响应式数据
- `validateForm()`：返回 `{ isValid, errors }`
- `onContactSubmit()`：发起提交，返回 `FormSubmitResponse`
- `handleFormSubmit(event?)`：适配 UForm 的 @submit
- `resetForm()`、`updateField()`、`getFieldError()` 等

校验要点：
- `name` 必填且长度 ≥ 2
- `email` 基本格式校验
- `whatsapp` 选填，但若填写需通过国际号码校验
- 扩展字段（如 `coolingCapacity`）做区间限制

### API 传输约定
接口：`POST /api/contact-inquiry`

`submitToAPI` 仅传递两个字段：
- `senderData`（string，必填）：包含以下字段的 JSON 字符串
  - `name`, `email`, `whatsapp`, `message`, `source`, `userAgent`
- `chooseData`（string，可选）：额外选择项的 JSON 字符串（当存在扩展字段时才发送）

示例请求体：

```json
{
  "senderData": "{\"name\":\"Alice\",\"email\":\"a@b.com\",\"whatsapp\":\"+86 188****\",\"message\":\"Hello\",\"source\":\"https://site/page\",\"userAgent\":\"Mozilla/5.0 ...\"}",
  "chooseData": "{\"coolingCapacity\":1250,\"coolingMethod\":\"Air-cooled\"}"
}
```

序列化：
- 采用原生 `JSON.stringify()`；本项目的字段均为可序列化的基本类型/对象结构，不会丢失字段。

组件调用（异步 + try/catch）：

```ts
const { onContactSubmit } = useContactForm()

try {
  const res = await onContactSubmit()
  if (res?.success) {
    // 成功逻辑
  }
} catch (err) {
  // 组件内自行兜底处理
}
```

详细指南：
- `docs/useContactForm使用指南.md`
- `docs/useContactForm配置化使用指南.md`


## 主要页面与组件

- 页面：
  - `app/pages/index.vue`：首页入口
  - `app/components/pages/MainPage.vue`：主着陆页容器

- 重要组件（节选）：
  - `editor/ContactFormDialog.vue`：表单弹窗
  - `editor/TrustCarousel.vue`：客户信任轮播
  - `editor/VideoBox.vue`：视频展示组件
  - `editor/CoolingCapacitySlider.vue`：冷量滑块选择


## 样式与规范

- 全局样式入口：`assets/scss/main.scss`
- 变量集中：`assets/scss/variables.scss`（通过 Vite `additionalData` 自动注入）
- 遵循现代语法（ES6+、Vue3 Composition API），并鼓励为函数/模块使用 JSDoc 注释
- 浏览器兼容：Chrome/Firefox/Safari/Edge 的现代版本


## Nuxt 配置要点

- `ssr: false`：以 SPA 方式部署
- `compatibilityDate: "2025-07-15"`
- `modules`: `@nuxt/ui`, `@nuxt/fonts`, `@nuxt/image`
- `image.densities = [1]`：默认保持原图（避免 CDN 多版本转换）


## 常见问题（FAQ）

- Q: 表单扩展字段如何传到后端？
  - A: 统一打包到 `chooseData`（JSON 字符串）中，只有存在时才会附带。

- Q: 为什么 `senderData`/`chooseData` 要用字符串？
  - A: 便于后端以透明字段存储或转发，同时兼容多语言后端对复杂对象的解析策略。

- Q: 图片组件如何选择？
  - A: 使用 `@nuxt/image` 提供的组件进行图片渲染与优化；常规 UI（按钮/输入）使用 `@nuxt/ui`。


## 脚本命令

```bash
pnpm dev       # 开发模式（.env.development）
pnpm build     # 生产构建（.env.production）
pnpm preview   # 本地预览生产包
pnpm generate  # 生成静态站点（如需）
```


## 许可
本项目为业务模板，默认归属企业内部使用。若需开源协议或二次分发，请根据实际情况补充。

