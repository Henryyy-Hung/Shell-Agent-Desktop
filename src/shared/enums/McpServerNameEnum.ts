export const McpServerNameEnum = {
  REMOTE_SHELL_TOOLKIT: 'remote-shell-toolkit',
} as const;

export type McpServerNameEnumType =
  (typeof McpServerNameEnum)[keyof typeof McpServerNameEnum];
