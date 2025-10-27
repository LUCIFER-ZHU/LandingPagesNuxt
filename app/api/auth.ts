/**
 * 认证相关 API
 * 统一管理所有认证接口调用
 */

import { useCustomFetch } from './request'

/**
 * 发送注册验证码
 * @param email 邮箱地址
 */
export const sendRegisterCode = (email: string) => {
  return useCustomFetch()('/web/customer/sendCode', {
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
  return useCustomFetch()('/web/customer/register', {
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
  return useCustomFetch()('/web/customer/login', {
    method: 'POST',
    body: data
  })
}

/**
 * 发送重置密码验证码
 * @param email 邮箱地址
 */
export const sendResetCode = (email: string) => {
  return useCustomFetch()('/web/customer/sendResetCode', {
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
  return useCustomFetch()('/web/customer/resetPassword', {
    method: 'POST',
    body: data
  })
}

/**
 * 用户登出
 * @param data 登出数据（customerId 和 email）
 */
export interface LogoutRequest {
  customerId: string | number
  email: string
}

export const logout = (data: LogoutRequest) => {
  return useCustomFetch()('/web/customer/logout', {
    method: 'POST',
    body: data
  })
}

