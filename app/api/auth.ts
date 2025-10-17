/**
 * 认证相关 API
 * 统一管理所有认证接口调用
 */

import { useCustomFetch, useCustomUseFetch } from './request'

/**
 * 发送注册验证码
 * @param email 邮箱地址
 */
export const sendRegisterCode = (email: string) => {
  return useCustomFetch()('/business/customer/sendCode', {
    method: 'POST',
    body: { email }
  })
}

/**
 * 用户注册
 * @param data 注册数据
 */
export interface RegisterRequest {
  email: string
  code: string
  password: string
  customerName?: string
}

export const register = (data: RegisterRequest) => {
  return useCustomFetch()('/business/customer/register', {
    method: 'POST',
    body: data
  })
}

/**
 * 用户登录
 * @param data 登录数据
 */
export interface LoginRequest {
  email: string
  password: string
}

export const login = (data: LoginRequest) => {
  return useCustomFetch()('/business/customer/login', {
    method: 'POST',
    body: data
  })
}

/**
 * 发送重置密码验证码
 * @param email 邮箱地址
 */
export const sendResetCode = (email: string) => {
  return useCustomFetch()('/business/customer/sendResetCode', {
    method: 'POST',
    body: { email }
  })
}

/**
 * 重置密码
 * @param data 重置密码数据
 */
export interface ResetPasswordRequest {
  email: string
  code: string
  newPassword: string
}

export const resetPassword = (data: ResetPasswordRequest) => {
  return useCustomFetch()('/business/customer/resetPassword', {
    method: 'POST',
    body: data
  })
}


export const testCode = () => {
  return useCustomFetch()('/business/customer/testCode', {
    method: 'GET',
  })
}

/**
 * 测试代码 - 用于 SSR 测试（使用 useFetch）
 * 可以在服务端渲染时调用
 * server: true 确保只在服务端执行一次，客户端导航时不会重新请求
 */
export const testCodeSSR = () => {
  return useCustomUseFetch('/business/customer/testCode', {
    method: 'GET',
    server: true,  // 只在服务端执行
  })
}

