# 开发测试页面目录

此目录用于存放**仅用于开发和测试的页面**，这些页面不会出现在生产环境中。

## 特性

- ✅ 开发环境可访问
- ❌ 生产环境自动排除
- 🔒 不会被构建到最终产品中

## 配置

在 `nuxt.config.ts` 中通过 `hooks` 配置实现：

```typescript
hooks: {
    'pages:extend'(pages) {
        if (process.env.NODE_ENV === 'production') {
            // 移除所有 /dev/ 路径的页面
            const pagesToRemove = pages.filter(page => page.path.includes('/dev'))
            pagesToRemove.forEach(page => {
                pages.splice(pages.indexOf(page), 1)
            })
        }
    }
}
```

## 当前页面

- `/dev/test-cookie` - Cookie Consent 功能测试页面

## 使用方法

### 开发环境访问

```
npm run dev
```

然后访问：`http://localhost:3000/dev/test-cookie`

### 生产环境验证

```
npm run build
npm run preview
```

尝试访问 `/dev/test-cookie` 将返回 404，因为该页面不存在于生产构建中。

## 注意事项

1. **仅用于开发测试**：不要在生产代码中引用这些页面
2. **不要包含敏感信息**：虽然生产环境不可访问，但代码仍在仓库中
3. **定期清理**：测试完成后可以删除不再需要的测试页面

## 添加新的测试页面

只需在此目录下创建新的 `.vue` 文件即可：

```
app/pages/dev/
  ├── test-cookie.vue
  ├── test-feature-a.vue
  └── test-feature-b.vue
```

所有 `/dev/*` 路径的页面都会自动在生产环境中被排除。

