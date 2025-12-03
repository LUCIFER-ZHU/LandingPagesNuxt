/**
 * 图片URL管理组合式函数
 * 提供全局的图片URL构建功能，自动使用环境变量中的baseURL
 * 支持页面级别的配置注入
 */

/**
 * 图片URL配置选项
 */
export interface ImageUrlOptions {
  /** 前端图片基础URL（可选，默认使用环境变量） */
  imageBase?: string
  /** 后端图片基础URL（可选，默认使用环境变量） */
  backendImageBase?: string
}

/**
 * 构建完整的图片URL
 * @param options - 配置选项（可选）
 * @param options.imageBase - 前端图片基础URL
 * @param options.backendImageBase - 后端图片基础URL
 * @returns 包含图片URL构建方法的对象
 */
export const useImageUrl = (options?: ImageUrlOptions) => {
  const config = useRuntimeConfig();
  // 优先使用页面传入的配置，否则使用环境变量
  const imageBase = options?.imageBase || config.public.imageBase;
  const backendImageBase = options?.backendImageBase || config.public.backendImageBase;
  
  /**
   * 构建前端静态资源图片URL
   * @param path - 图片相对路径
   * @returns 完整的图片URL
   */
  const buildImageUrl = (path: string): string => {
    // 如果路径已经是完整URL，直接返回
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    
    // 确保路径以/开头
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${imageBase}${normalizedPath}`;
  };
  
  /**
   * 构建后端返回的图片URL（用于后端接口返回的图片路径）
   * @param path - 后端返回的图片相对路径
   * @returns 完整的图片URL
   */
  const buildBackendImageUrl = (path: string | null | undefined): string => {
    // 如果路径为空，返回默认图片
    if (!path) {
      return buildImageUrl('image/img1.webp');
    }
    
    // 如果路径已经是完整URL，直接返回
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    
    // 移除开头的 / 如果有的话（后端图片基地址通常已经包含尾部斜杠）
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    
    // 确保 backendImageBase 以斜杠结尾
    const base = backendImageBase.endsWith('/') ? backendImageBase : `${backendImageBase}/`;
    
    return `${base}${normalizedPath}`;
  };
  
  /**
   * 获取前端图片baseURL
   * @returns 前端图片baseURL
   */
  const getImageBase = (): string => {
    return imageBase;
  };
  
  /**
   * 获取后端图片baseURL
   * @returns 后端图片baseURL
   */
  const getBackendImageBase = (): string => {
    return backendImageBase;
  };
  
  return {
    buildImageUrl,
    buildBackendImageUrl,
    getImageBase,
    getBackendImageBase,
    imageBase,
    backendImageBase
  };
};
