const AysncStatusEnum = {
  IDLE: 'idle', // 初始状态，未发起异步请求
  PENDING: 'pending', // 异步请求已发起，正在等待响应
  PROCESSING: 'processing', // 异步请求正在处理中
  SUCCESS: 'success', // 异步请求成功完成
  ERROR: 'error', // 异步请求失败
  CANCELLED: 'cancelled' // 异步请求被取消
} as const

type AysncStatusEnumType = (typeof AysncStatusEnum)[keyof typeof AysncStatusEnum]

export type { AysncStatusEnumType }
export { AysncStatusEnum }
