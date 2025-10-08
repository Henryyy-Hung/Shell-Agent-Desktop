const TabEnum = {
  Chat: 'Chat',
  SOP: 'SOP',
  Settings: 'Settings',
} as const;

type TabEnumType = (typeof TabEnum)[keyof typeof TabEnum];

export type { TabEnumType };
export { TabEnum };
