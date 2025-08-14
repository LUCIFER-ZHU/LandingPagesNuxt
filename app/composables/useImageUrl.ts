/**
 * 图片URL管理组合式函数
 * 提供全局的图片URL构建功能，自动使用环境变量中的baseURL
 */

/**
 * 构建完整的图片URL
 * @param path - 图片相对路径（例如：'image/logo.webp'）
 * @returns 完整的图片URL
 */
export const useImageUrl = () => {
  const config = useRuntimeConfig();
  const imageBase = config.public.imageBase;
  
  /**
   * 构建图片URL
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
   * 获取图片baseURL
   * @returns 图片baseURL
   */
  const getImageBase = (): string => {
    return imageBase;
  };
  
  return {
    buildImageUrl,
    getImageBase,
    imageBase
  };
};
