const IpcChannel = {
  // 应用层级信道
  App_LogToMain: 'app:log-to-main',
  // 窗口相关信道
  Window_ToggleAlwaysOnTop: 'window:toggle-always-on-top',
  Window_Close: 'window:close',
  Window_Minimize: 'window:minimize',
  // MCP 服务相关信道
  Mcp_Connect: 'mcp:connect',
  Mcp_Disconnect: 'mcp:disconnect',
  Mcp_Restart: 'mcp:restart',
  Mcp_ListPrompts: 'mcp:list-prompts',
  Mcp_GetPrompt: 'mcp:get-prompt',
  Mcp_ListResources: 'mcp:list-resources',
  Mcp_ReadResource: 'mcp:read-resource',
  Mcp_ListTools: 'mcp:list-tools',
  Mcp_CallTool: 'mcp:call-tool',
  Mcp_AbortTool: 'mcp:abort-tool',
  Mcp_ConnectAll: 'mcp:connect-all',
  Mcp_DisconnectAll: 'mcp:disconnect-all',
  Mcp_RestartAll: 'mcp:restart-all'
} as const

export type IpcChannelType = (typeof IpcChannel)[keyof typeof IpcChannel]

export { IpcChannel }
