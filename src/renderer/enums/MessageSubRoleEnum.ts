const MessageSubRoleEnum = {
  // 项目经理
  PROJECT_MANAGER: 'project_manager',
  // 一线工程师
  FRONTLINE_ENGINEER: 'frontline_engineer',
  // 高级工程师
  SENIOR_ENGINEER: 'senior_engineer',
  // 档案管理员
  ARCHIVE_ADMIN: 'archive_admin',
} as const;

type MessageSubRoleEnumType =
  (typeof MessageSubRoleEnum)[keyof typeof MessageSubRoleEnum];

export type { MessageSubRoleEnumType };
export { MessageSubRoleEnum };
