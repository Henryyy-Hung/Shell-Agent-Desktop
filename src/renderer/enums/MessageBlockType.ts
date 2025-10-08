const MessageBlockTypeEnum = {
  THINK: 'think', // 初始状态，未发起异步请求
  TOOL_CALL: 'tool_call', // 异步请求已发起，正在等待响应
  PLAN: 'plan', // 异步请求正在处理中
} as const;

type MessageBlockTypeEnumType =
  (typeof MessageBlockTypeEnum)[keyof typeof MessageBlockTypeEnum];

export type { MessageBlockTypeEnumType };
export { MessageBlockTypeEnum };
