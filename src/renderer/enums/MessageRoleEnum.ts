const MessageRoleEnum = {
  User: 'User',
  Assistant: 'Assistant',
  System: 'System',
} as const;

type MessageRoleEnumType =
  (typeof MessageRoleEnum)[keyof typeof MessageRoleEnum];

export type { MessageRoleEnumType };
export { MessageRoleEnum };
