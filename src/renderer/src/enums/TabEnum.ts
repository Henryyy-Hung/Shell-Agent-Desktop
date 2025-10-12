const TabEnum = {
  CHAT: 'chat',
  SOP: 'sop',
  SETTINGS: 'settings'
} as const

type TabEnumType = (typeof TabEnum)[keyof typeof TabEnum]

export type { TabEnumType }
export { TabEnum }
