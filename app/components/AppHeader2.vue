<template>
  <header class="app-header" :class="{ 'header-hover-active': isMenuHovered }">
    <div class="header-content" :class="{ 'is-fixed': isFixed }">
      <div class="header-content-inner">
        <div class="site-logo">
          <NuxtImg densities="1" :src="buildImageUrl('/image/needful/logo.webp')" alt="Logo" class="w-[13.9583vw]"/>
        </div>
        <div class="site-contact">
          <NuxtImg densities="1" :src="buildImageUrl('/image/needful/Mail.webp')" alt="Email" class="w-[2.0833vw]"/>
          <span class="site-contact-text" @click="handleEmailClick">Email: engineer@minnuo.com</span>
        </div>
      </div>
    </div>

    <!-- 导航菜单栏 -->
    <nav class="navigation-bar">
      <div class="nav-container">
        <!-- 所有类目 -->
        <div 
          class="nav-item"
          :class="{ 'is-active': activeDropdown === 'categories' }"
          @mouseenter="handleItemEnter('categories')"
          @mouseleave="handleItemLeave"
        >
          <UIcon name="i-heroicons-bars-3" class="nav-icon" />
          <span>所有类目</span>
        </div>

        <!-- 其他导航项（只显示有下拉菜单的） -->
        <div class="nav-items-list">
          <div
            v-for="item in navItemsWithChildren"
            :key="item.id"
            class="nav-item"
            :class="{ 'is-active': activeDropdown === item.id }"
            @mouseenter="handleItemEnter(item.id)"
            @mouseleave="handleItemLeave"
          >
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- 全屏下拉面板 -->
    <Transition name="dropdown-fade">
      <div 
        v-show="activeDropdown"
        class="fullscreen-dropdown"
        @mouseenter="handleDropdownEnter"
        @mouseleave="handleDropdownLeave"
      >
        <div class="dropdown-content-wrapper">
          <!-- 所有类目面板 -->
          <div v-if="activeDropdown === 'categories'" class="categories-panel">
            <div class="categories-grid">
              <div 
                v-for="category in categories" 
                :key="category.id"
                class="category-item"
                @click="handleCategoryClick(category)"
              >
                <UIcon :name="category.icon" class="category-icon" />
                <div class="category-content">
                  <div class="category-name">{{ category.name }}</div>
                  <div class="category-desc">{{ category.desc }}</div>
                </div>
                <UIcon name="i-heroicons-chevron-right" class="category-arrow" />
              </div>
            </div>
          </div>

          <!-- 其他导航项面板 -->
          <div 
            v-else-if="getNavItem(activeDropdown)?.children"
            class="nav-dropdown-panel"
          >
            <NuxtLink
              v-for="child in getNavItem(activeDropdown)?.children"
              :key="child.id"
              :to="child.link"
              class="dropdown-item"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
/**
 * 应用头部组件
 * 提供网站logo、联系信息和导航菜单
 */

// 使用图片URL管理composable
const { buildImageUrl } = useImageUrl();

// 菜单悬停状态，用于控制头部背景色变化
const isMenuHovered = ref(false);
// 当前激活的下拉菜单
const activeDropdown = ref<string | null>(null);
// 延时器，用于处理鼠标离开事件
let leaveTimer: NodeJS.Timeout | null = null;
// 吸顶状态
const isFixed = ref(false);
// header初始高度
const headerHeight = ref(0);

/**
 * 类目数据
 */
const categories = ref([
  {
    id: 1,
    name: '制冷设备',
    desc: '冷藏车、冷库等',
    icon: 'i-heroicons-cube',
    link: '/category/refrigeration'
  },
  {
    id: 2,
    name: '运输车辆',
    desc: '货车、专用车等',
    icon: 'i-heroicons-truck',
    link: '/category/vehicles'
  },
  {
    id: 3,
    name: '零配件',
    desc: '制冷配件、车辆配件',
    icon: 'i-heroicons-cog-6-tooth',
    link: '/category/parts'
  },
  {
    id: 4,
    name: '服务方案',
    desc: '定制化解决方案',
    icon: 'i-heroicons-wrench-screwdriver',
    link: '/category/solutions'
  },
  {
    id: 5,
    name: '技术支持',
    desc: '售后服务、维修保养',
    icon: 'i-heroicons-lifebuoy',
    link: '/category/support'
  },
  {
    id: 6,
    name: '案例展示',
    desc: '成功案例与项目',
    icon: 'i-heroicons-photo',
    link: '/category/cases'
  }
]);

/**
 * 导航项数据
 */
const navItems = ref([
  {
    id: 'products',
    label: '推荐商品',
    children: [
      { id: 'featured', label: '精选产品', link: '/products/featured' },
      { id: 'new', label: '新品上市', link: '/products/new' },
      { id: 'hot', label: '热销产品', link: '/products/hot' }
    ]
  },
  {
    id: 'subscription',
    label: '订单保障',
    link: '/subscription'
  },
  {
    id: 'buyer',
    label: '买家中心',
    children: [
      { id: 'orders', label: '我的订单', link: '/buyer/orders' },
      { id: 'favorites', label: '收藏夹', link: '/buyer/favorites' },
      { id: 'messages', label: '消息中心', link: '/buyer/messages' }
    ]
  },
  {
    id: 'help',
    label: '帮助中心',
    children: [
      { id: 'faq', label: '常见问题', link: '/help/faq' },
      { id: 'contact', label: '联系我们', link: '/help/contact' },
      { id: 'about', label: '关于我们', link: '/help/about' }
    ]
  },
  {
    id: 'supplier',
    label: '成为供应商',
    link: '/supplier/register'
  }
]);

/**
 * 只包含有下拉菜单的导航项
 */
const navItemsWithChildren = computed(() => {
  return navItems.value.filter(item => item.children && item.children.length > 0);
});

/**
 * 菜单项鼠标进入处理
 * 只有有下拉菜单的项才会触发
 */
const handleItemEnter = (itemId: string | null) => {
  // 清除之前的延时器
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  
  // 如果有下拉菜单，则激活并显示头部变色
  if (itemId) {
    activeDropdown.value = itemId;
    console.log('[AppHeader] handleItemEnter 被触发, itemId:', itemId, 'Host:', window.location.host);
    
    isMenuHovered.value = true;
  }
};

/**
 * 菜单项鼠标离开处理
 * 使用延时，避免在移动到下拉面板时闪烁
 */
const handleItemLeave = () => {
  leaveTimer = setTimeout(() => {
    activeDropdown.value = null;
    isMenuHovered.value = false;
  }, 150);
};

/**
 * 下拉面板鼠标进入处理
 * 保持下拉面板显示和头部变色
 */
const handleDropdownEnter = () => {
  // 清除离开延时器
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  isMenuHovered.value = true;
};

/**
 * 下拉面板鼠标离开处理
 * 使用延时，避免在移回菜单项时闪烁
 */
const handleDropdownLeave = () => {
  leaveTimer = setTimeout(() => {
    activeDropdown.value = null;
    isMenuHovered.value = false;
  }, 150);
};

/**
 * 获取导航项
 */
const getNavItem = (id: string | null) => {
  if (!id) return null;
  return navItems.value.find(item => item.id === id);
};

/**
 * 类目点击处理
 */
const handleCategoryClick = (category: any) => {
  navigateTo(category.link);
  isMenuHovered.value = false;
  activeDropdown.value = null;
};

/**
 * 邮箱点击处理函数
 * 打开默认邮件客户端并预填充收件人地址
 */
const handleEmailClick = () => {
  window.location.href = 'mailto:engineer@minnuo.com'
}

/**
 * 滚动监听处理
 * 当滚动超过header-content高度时，启用固定定位
 */
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  isFixed.value = scrollTop > headerHeight.value;
};

/**
 * 组件挂载后初始化
 */
onMounted(() => {
  console.log('[AppHeader] 组件已挂载, Host:', window.location.host, 'Timestamp:', new Date().toISOString());
  
  // 获取header-content高度
  const headerContentEl = document.querySelector('.header-content') as HTMLElement;
  if (headerContentEl) {
    headerHeight.value = headerContentEl.offsetHeight;
  }
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll, { passive: true });
});

/**
 * 组件卸载时清理定时器和事件监听
 */
onUnmounted(() => {
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  
  // 移除滚动监听
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #ffffff;
  border-bottom: .0521vw solid #e5e7eb;
  position: relative;
  top: 0;
  z-index: 50;
  transition: background-color 0.3s ease;

  // 悬停时头部变色
  &.header-hover-active {
    background-color: #f7f8fa;
    
    .header-content {
      background-color: #f7f8fa;
    }
  }
}

.header-content {
  position: relative;
  background-color: #ffffff;
  transition: all 0.3s ease;
  z-index: 100;

  // 固定定位状态
  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0.2604vw 0.8333vw rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease-out;
  }
}

// 固定定位时的下滑动画
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.header-content-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13.5938vw;
}

.site-contact {
  display: flex;
  align-items: center;
  gap: 1.0417vw;

  .site-contact-text {
    font-weight: 400;
    font-size: .9375vw;
    color: #000000;
    margin-right: 1.5625vw;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6a00;
    }
  }
}

/* 导航栏样式 */
.navigation-bar {
  position: relative;
  padding: 0 13.5938vw;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 0;
}

.nav-items-list {
  display: flex;
  align-items: center;
  gap: 0;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.4167vw;
  padding: 0.7292vw 0;
  margin: 0 1.5625vw;
  font-size: .9375vw;
  color: #666666;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #ff6a00;
  }

  .nav-icon {
    font-size: 1.0417vw;
  }

  // 使用伪元素实现底部线条，不占用空间，不影响鼠标事件
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.1563vw;
    background-color: #ff6a00;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  // 激活状态 - 底部线条从中间向两边展开
  &.is-active::after {
    transform: scaleX(1);
  }

  // 悬停效果 - 也显示展开动画
  &:hover::after {
    transform: scaleX(1);
  }
}

/* 全屏下拉面板 */
.fullscreen-dropdown {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  background-color: #ffffff;
  border-top: .0521vw solid #e5e7eb;
  box-shadow: 0 .5208vw 1.5625vw rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdown-content-wrapper {
  max-width: 100%;
  margin: 0 auto;
  padding: 2.0833vw 13.5938vw;
}

/* 类目面板样式 */
.categories-panel {
  width: 100%;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.0417vw;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 0.8333vw;
  padding: 1.0417vw;
  border-radius: 0.4167vw;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fafafa;

  &:hover {
    background-color: #fff7f0;
    transform: translateY(-0.1563vw);
    box-shadow: 0 0.2604vw 0.8333vw rgba(255, 106, 0, 0.1);
    
    .category-arrow {
      transform: translateX(0.2604vw);
    }
  }

  .category-icon {
    font-size: 2.0833vw;
    color: #ff6a00;
    flex-shrink: 0;
  }

  .category-content {
    flex: 1;
  }

  .category-name {
    font-size: 1.0417vw;
    font-weight: 600;
    color: #333333;
    margin-bottom: 0.2604vw;
  }

  .category-desc {
    font-size: 0.8333vw;
    color: #999999;
  }

  .category-arrow {
    font-size: 1.25vw;
    color: #cccccc;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
}

/* 其他导航项下拉面板 */
.nav-dropdown-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.4167vw, 1fr));
  gap: 0.5208vw;
}

.dropdown-item {
  display: block;
  padding: 0.8333vw 1.25vw;
  font-size: 0.9375vw;
  color: #333333;
  text-decoration: none;
  border-radius: 0.2604vw;
  transition: all 0.3s ease;
  background-color: #fafafa;

  &:hover {
    background-color: #fff7f0;
    color: #ff6a00;
    transform: translateX(0.2604vw);
  }
}

/* 下拉动画 */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.3s ease;
}

.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-1.0417vw);
}

.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5208vw);
}

// 移动端---------------------------------------------------------------------
// 响应式设计
@media (max-width: 768px) {
  .header-content-inner {
    padding: 1.3333vw 2.6667vw;
  }

  .site-logo img{
    width: 40vw;
  }

  .site-contact{
    img{
      width: 4.2667vw;
    }
    .site-contact-text{
      font-size: 2.6667vw
    }
  }

  .navigation-bar{
    display: none;
  }

  .fullscreen-dropdown{
    display: none;
  }
}
</style>
