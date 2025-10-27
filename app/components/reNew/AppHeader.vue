<template>
  <header class="new-header">
    <div class="header-container">
      <!-- Logo 区域 -->
      <div class="logo">
        <span class="logo-text">LOGO</span>
      </div>

      <!-- 导航菜单 -->
      <nav class="nav-menu">
        <NuxtLink
          v-for="item in navItems"
          :key="item.id"
          :to="item.link"
          class="nav-link"
          :class="{ 'is-active': isActive(item.link) }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- 用户图标 -->
      <div class="user-icon">
        <UPopover mode="hover" :content="{ align: 'end', side: 'bottom', sideOffset: 8 }">
          <div class="user-link" :class="{ 'logged-in': authStore.isLoggedIn }">
            <UIcon name="i-heroicons-user" class="icon" />
          </div>

          <template #content>
            <div class="user-menu">
              <!-- 未登录状态 -->
              <div v-if="!authStore.isLoggedIn" class="menu-item" @click="handleLogin">
                <UIcon name="i-heroicons-arrow-right-on-rectangle" class="menu-icon" />
                <span>去登录</span>
              </div>

              <!-- 已登录状态 -->
              <template v-else>
                <div class="menu-item user-email">
                  <span>{{ authStore.user?.email || '用户' }}</span>
                </div>
                <div class="menu-divider"></div>
                <div class="menu-item" @click="handleLogout">
                  <UIcon name="i-heroicons-arrow-right-on-rectangle" class="menu-icon" />
                  <span>退出登录</span>
                </div>
              </template>
            </div>
          </template>
        </UPopover>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { logout } from '~/api/auth'

/**
 * 重新设计的应用头部组件
 * 提供简洁的导航和用户入口
 */

const route = useRoute();
const authStore = useAuthStore();
const { $toast } = useNuxtApp();

/**
 * 导航菜单项
 */
const navItems = ref([
  {
    id: 'home',
    label: 'Home',
    link: '/'
  },
  {
    id: 'product',
    label: 'Product',
    link: '/products'
  }
]);

/**
 * 判断导航项是否激活
 */
const isActive = (link: string) => {
  if (link === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(link);
};

/**
 * 处理登录跳转
 */
const handleLogin = () => {
  navigateTo('/account/login');
};

/**
 * 处理退出登录
 */
const handleLogout = async () => {
  if (!authStore.user?.customerId || !authStore.user?.email) {
    $toast.error('用户信息不完整，无法退出登录');
    authStore.clearAuth();
    navigateTo('/account/login');
    return;
  }
  
  try {
    // 调用后端登出接口
    const response: any = await logout({
      customerId: authStore.user.customerId,
      email: authStore.user.email
    });
    
    // 检查业务状态
    if (!response?.success) {
      $toast.error(response?.message || '退出登录失败');
      return;
    }
    
    // 退出成功 - 清除本地状态
    authStore.clearAuth();
    $toast.success(response?.message || '退出登录成功');
    
    // 跳转到登录页
    setTimeout(() => {
      navigateTo('/account/login');
    }, 1000);
    
  } catch (error: any) {
    // 即使接口失败，也清除本地状态
    authStore.clearAuth();
    $toast.error(error?.data?.message || error?.message || '退出登录失败');
    
    // 跳转到登录页
    setTimeout(() => {
      navigateTo('/account/login');
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.new-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 0 9.375vw;
  height: 3.125vw;
}

/* Logo 样式 */
.logo {
  display: flex;
  align-items: center;

  .logo-text {
    font-size: 1.25vw;
    font-weight: 700;
    color: #1a1a1a;
    letter-spacing: 0.05em;
  }
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.6667vw;
  margin-left: 4.5313vw;
  margin-right: auto;
}

.nav-link {
  position: relative;
  font-size: 0.8333vw;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  padding: 0.4167vw 0;
  cursor: pointer;
  transition: color 0.3s ease;

  // 底部下划线效果
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.1563vw;
    background-color: $primary-color;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  // 悬浮效果
  &:hover {
    color: $primary-color;
    
    &::after {
      transform: scaleX(1);
    }
  }

  // 激活状态
  &.is-active {
    color: $primary-color;

    &::after {
      transform: scaleX(1);
    }
  }
}

/* 用户图标 */
.user-icon {
  display: flex;
  align-items: center;

  .user-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      .icon {
        color: $primary-color;
        transform: scale(1.1);
      }
    }

    &.logged-in {
      .icon {
        color: $primary-color;
      }
    }
  }

  .icon {
    font-size: 1.6667vw;
    color: #1a1a1a;
    transition: all 0.3s ease;
  }
}

/* 用户菜单样式 */
.user-menu {
  min-width: 15.625vw;
  background: #ffffff;
  border-radius: 0.4167vw;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.625vw;
  padding: 0.625vw 0.8333vw;
  font-size: 0.7292vw;
  color: #1a1a1a;
  cursor: pointer;
  border-radius: 0.3125vw;
  transition: all 0.3s ease;

  &:hover:not(.user-email) {
    background-color: #f3f4f6;
    color: $primary-color;
  }

  &.user-email {
    color: #666666;
    cursor: default;
    font-weight: 500;
  }

  .menu-icon {
    font-size: 1.0417vw;
    flex-shrink: 0;
  }
}

.menu-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 0.4167vw 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-container {
    padding: 0 2.6667vw;
    height: 7.4667vw;
  }

  .logo {
    .logo-text {
      font-size: 3.3333vw;
    }
  }

  .nav-menu {
    margin-left: 6.6667vw;
    gap: 4vw;
  }

  .nav-link {
    font-size: 2.3333vw;
  }

  .user-icon {
    .icon {
      font-size: 4.6667vw;
    }
  }
  
  .user-menu {
    min-width: 40vw;
  }
  
  .menu-item {
    gap: 1.6667vw;
    padding: 1.6667vw 2.2222vw;
    font-size: 2vw;
    border-radius: 0.8333vw;

    .menu-icon {
      font-size: 2.7778vw;
    }
  }

  .menu-divider {
    margin: 1.1111vw 0;
  }
}
</style>

