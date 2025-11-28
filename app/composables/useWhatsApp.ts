/**
 * WhatsApp 联系功能组合式函数
 * 提供统一的 WhatsApp 点击处理逻辑
 */

/**
 * WhatsApp 联系组合函数
 * @param options - 配置选项
 * @param options.phoneNumber - WhatsApp 电话号码（默认：8615366749631）
 * @param options.defaultMessage - 默认消息内容（默认：'Hello I am interested in your diaphragm compressors.'）
 * @returns 包含 handleWhatsAppClick 方法的对象
 */
export const useWhatsApp = (options?: {
  phoneNumber?: string
  defaultMessage?: string
}) => {
  const phoneNumber = options?.phoneNumber || '8615366749631'
  const defaultMessage = options?.defaultMessage || 'Hello I am interested in your Diesel Portable Air Compressors.'

  /**
   * 处理 WhatsApp 点击事件
   * 打开 WhatsApp 聊天窗口，并预填充消息内容
   */
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    navigateTo(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, {
      external: true,
      open: {
        target: '_blank'
      }
    })
  }

  return {
    handleWhatsAppClick
  }
}

