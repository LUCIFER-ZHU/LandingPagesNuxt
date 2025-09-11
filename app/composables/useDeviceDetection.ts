import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 设备检测组合函数
 * 用于判断当前设备类型和屏幕尺寸
 * @returns {Object} 包含设备检测相关状态和方法的对象
 */
export const useDeviceDetection = () => {
  // 响应式状态
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  const screenWidth = ref(0)
  const screenHeight = ref(0)

  /**
   * 更新设备检测状态
   * 根据屏幕宽度判断设备类型
   */
  const updateDeviceDetection = () => {
    if (typeof window === 'undefined') return

    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight

    // 移动端判断：屏幕宽度 < 768px
    isMobile.value = screenWidth.value < 768
    
    // 平板判断：屏幕宽度 768px - 1024px
    isTablet.value = screenWidth.value >= 768 && screenWidth.value < 1024
    
    // 桌面端判断：屏幕宽度 >= 1024px
    isDesktop.value = screenWidth.value >= 1024

    // 在html元素上添加/移除类名
    const htmlElement = document.documentElement
    
    if (isMobile.value) {
      htmlElement.classList.add('is-mob')
      htmlElement.classList.remove('is-tab', 'is-pc')
    } else if (isTablet.value) {
      htmlElement.classList.add('is-tab')
      htmlElement.classList.remove('is-mob', 'is-pc')
    } else {
      htmlElement.classList.add('is-pc')
      htmlElement.classList.remove('is-mob', 'is-tab')
    }
  }

  /**
   * 判断是否为移动端
   * @returns {boolean} 是否为移动端
   */
  const isMob = () => {
    return isMobile.value
  }

  /**
   * 判断是否为平板端
   * @returns {boolean} 是否为平板端
   */
  const isTab = () => {
    return isTablet.value
  }

  /**
   * 判断是否为桌面端
   * @returns {boolean} 是否为桌面端
   */
  const isPC = () => {
    return isDesktop.value
  }

  /**
   * 获取当前屏幕宽度
   * @returns {number} 屏幕宽度
   */
  const getScreenWidth = () => {
    return screenWidth.value
  }

  /**
   * 获取当前屏幕高度
   * @returns {number} 屏幕高度
   */
  const getScreenHeight = () => {
    return screenHeight.value
  }

  // 窗口大小变化监听器
  const handleResize = () => {
    updateDeviceDetection()
  }

  // 组件挂载时初始化
  onMounted(() => {
    updateDeviceDetection()
    window.addEventListener('resize', handleResize)
  })

  // 组件卸载时清理监听器
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize)
    }
  })

  return {
    // 响应式状态
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    
    // 判断方法
    isMob,
    isTab,
    isPC,
    getScreenWidth,
    getScreenHeight,
    
    // 更新方法
    updateDeviceDetection
  }
}
