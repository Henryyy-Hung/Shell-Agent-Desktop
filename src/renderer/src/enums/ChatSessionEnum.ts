const ChatSessionEnum = {
  SYSTEM_PROMPT: 'system_prompt',
  USER_QUERY: 'user_query',
  AGENT_COMMON: 'agent:common',
  AGENT_PROJECT_MANAGER: 'agent:project_manager',
  AGENT_FRONTLINE_ENGINEER: 'agent:frontline_engineer',
  AGENT_SENIOR_ENGINEER: 'agent:senior_engineer',
  AGENT_ARCHIVE_ADMIN: 'agent:archive_admin'
} as const

type ChatSessionEnumType = (typeof ChatSessionEnum)[keyof typeof ChatSessionEnum]

export type { ChatSessionEnumType }
export { ChatSessionEnum }
