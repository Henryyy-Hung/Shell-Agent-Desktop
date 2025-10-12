import { ipcMain } from 'electron'
import { IpcChannel } from '@shared/ipcChannel'
import { mcpServiceManager } from '@main/managers/McpServiceMgr'

function registerMcpIpc() {
  ipcMain.handle(IpcChannel.Mcp_ConnectAll, () => mcpServiceManager.connectAll())
  ipcMain.handle(IpcChannel.Mcp_DisconnectAll, () => mcpServiceManager.disconnectAll())
  ipcMain.handle(IpcChannel.Mcp_RestartAll, () => mcpServiceManager.restartAll())
  ipcMain.handle(IpcChannel.Mcp_Connect, (_evt, serverName: string) =>
    mcpServiceManager.connect(serverName)
  )
  ipcMain.handle(IpcChannel.Mcp_Disconnect, (_evt, serverName: string) =>
    mcpServiceManager.disconnect(serverName)
  )
  ipcMain.handle(IpcChannel.Mcp_Restart, (_evt, serverName: string) =>
    mcpServiceManager.restart(serverName)
  )
  ipcMain.handle(IpcChannel.Mcp_ListPrompts, (_evt, serverName: string) =>
    mcpServiceManager.listPrompts(serverName)
  )
  ipcMain.handle(
    IpcChannel.Mcp_GetPrompt,
    (_evt, serverName: string, name: string, args: Record<string, any>) =>
      mcpServiceManager.getPrompt(serverName, name, args)
  )
  ipcMain.handle(IpcChannel.Mcp_ListResources, (_evt, serverName: string) =>
    mcpServiceManager.listResources(serverName)
  )
  ipcMain.handle(IpcChannel.Mcp_ReadResource, (_evt, serverName: string, uri: string) =>
    mcpServiceManager.readResource(serverName, uri)
  )
  ipcMain.handle(IpcChannel.Mcp_ListTools, (_evt, serverName: string) =>
    mcpServiceManager.listTools(serverName)
  )
  ipcMain.handle(
    IpcChannel.Mcp_CallTool,
    (_evt, serverName: string, name: string, args: Record<string, any>, callId?: string) =>
      mcpServiceManager.callTool(serverName, name, args, callId)
  )
  ipcMain.handle(IpcChannel.Mcp_AbortTool, (_evt, serverName: string, callId: string) =>
    mcpServiceManager.abortTool(serverName, callId)
  )
}

// eslint-disable-next-line import/prefer-default-export
export { registerMcpIpc }
