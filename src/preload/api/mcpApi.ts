import { ipcRenderer } from 'electron';
import { IpcChannel } from '@shared/ipcChannel';

const mcpApi = {
  connectAll: (): Promise<void> =>
    ipcRenderer.invoke(IpcChannel.Mcp_ConnectAll),
  disconnectAll: (): Promise<void> =>
    ipcRenderer.invoke(IpcChannel.Mcp_DisconnectAll),
  restartAll: (): Promise<void> =>
    ipcRenderer.invoke(IpcChannel.Mcp_RestartAll),
  connect: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_Connect, serverName),
  disconnect: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_Disconnect, serverName),
  restart: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_Restart, serverName),
  listPrompts: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_ListPrompts, serverName),
  getPrompt: (
    serverName: string,
    name: string,
    args: Record<string, any> = {},
  ): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_GetPrompt, serverName, name, args),
  listResources: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_ListResources, serverName),
  readResource: (serverName: string, uri: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_ReadResource, serverName, uri),
  listTools: (serverName: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_ListTools, serverName),
  callTool: (
    serverName: string,
    name: string,
    args: Record<string, any>,
    callId?: string,
  ): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_CallTool, serverName, name, args, callId),
  abortTool: (serverName: string, callId: string): Promise<any> =>
    ipcRenderer.invoke(IpcChannel.Mcp_AbortTool, serverName, callId),
};

export default mcpApi;
