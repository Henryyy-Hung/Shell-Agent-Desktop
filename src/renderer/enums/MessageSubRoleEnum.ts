const MessageSubRoleEnum = {
  // 系统
  SYSTEM: 'system',
  // 用户
  USER: 'user',
  // 工具调用结果
  USER_TOOL_CALL_RESULT: 'user:tool_call_result',
  // 助手
  ASSISTANT: 'assistant',
  // 项目经理
  ASSISTANT_PROJECT_MANAGER: 'assistant:project_manager',
  // 一线工程师
  ASSISTANT_FRONTLINE_ENGINEER: 'assistant:frontline_engineer',
  // 高级工程师
  ASSISTANT_SENIOR_ENGINEER: 'assistant:senior_engineer',
  // 档案管理员
  ASSISTANT_ARCHIVE_ADMIN: 'assistant:archive_admin',
} as const;

type MessageSubRoleEnumType =
  (typeof MessageSubRoleEnum)[keyof typeof MessageSubRoleEnum];

export type { MessageSubRoleEnumType };
export { MessageSubRoleEnum };
