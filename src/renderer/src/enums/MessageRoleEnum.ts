const MessageRoleEnum = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
} as const;

type MessageRoleEnumType =
  (typeof MessageRoleEnum)[keyof typeof MessageRoleEnum];

export type { MessageRoleEnumType };
export { MessageRoleEnum };
