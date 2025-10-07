const TabEnum = {
  Chat: 'Chat',
  Memory: 'Memory',
  Settings: 'Settings',
} as const;

type TabEnumType = (typeof TabEnum)[keyof typeof TabEnum];

export { TabEnum, TabEnumType };
