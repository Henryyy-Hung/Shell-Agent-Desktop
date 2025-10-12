const ChatContentTypeEnum = {
  NORMAL: 'normal',
  THINK: 'think',
  PLAN: 'plan',
  TOOL_USE: 'tool_use',
  TOOL_USE_RESULT: 'tool_use_result',
  FINAL_ANSWER: 'final_answer'
} as const

type ChatContentTypeEnumType = (typeof ChatContentTypeEnum)[keyof typeof ChatContentTypeEnum]

export type { ChatContentTypeEnumType }
export { ChatContentTypeEnum }
