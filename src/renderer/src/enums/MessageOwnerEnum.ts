const MessageOwnerEnum = {
  PUBLIC: 'public',
  USER: 'user',
  AGENT_COMMON: 'agent:common',
  AGENT_PROJECT_MANAGER: 'agent:project_manager',
  AGENT_FRONTLINE_ENGINEER: 'agent:frontline_engineer',
  AGENT_SENIOR_ENGINEER: 'agent:senior_engineer',
  AGENT_ARCHIVE_ADMIN: 'agent:archive_admin'
} as const

type MessageOwnerEnumType = (typeof MessageOwnerEnum)[keyof typeof MessageOwnerEnum]

export type { MessageOwnerEnumType }
export { MessageOwnerEnum }
