const McpServerNameEnum = {
  REMOTE_SHELL_TOOLKIT: 'remote-shell-toolkit',
} as const;

type McpServerNameEnumType =
  (typeof McpServerNameEnum)[keyof typeof McpServerNameEnum];

export { McpServerNameEnum, McpServerNameEnumType };
