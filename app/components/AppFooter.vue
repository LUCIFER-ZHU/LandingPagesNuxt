<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="copyright">© 2024 LandingPagesNuxt. 保留所有权利。</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * 应用底部组件
 * 提供版权信息和基本页脚内容
 */
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  text-align: center;
}

.copyright {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
}
</style>
