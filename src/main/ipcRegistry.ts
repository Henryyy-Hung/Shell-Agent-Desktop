import { BrowserWindow, ipcMain, App } from 'electron';
import { IpcChannel } from '@shared/ipcChannel';
import { mcpServiceManager } from '@main/managers/McpServiceMgr';

function registerIpc(app: App, mainWindow: BrowserWindow | null) {
  ipcMain.handle(IpcChannel.Window_ToggleAlwaysOnTop, (): boolean | null => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      const isOnTop = mainWindow.isAlwaysOnTop();
      mainWindow.setAlwaysOnTop(!isOnTop);
      return !isOnTop;
    }
    return null;
  });
  ipcMain.handle(IpcChannel.Window_Minimize, () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.minimize();
    }
  });
  ipcMain.handle(IpcChannel.Window_Close, () => {
    app.quit();
  });
  /** MCP 服务相关 */
  ipcMain.handle(IpcChannel.Mcp_ConnectAll, () =>
    mcpServiceManager.connectAll(),
  );
  ipcMain.handle(IpcChannel.Mcp_DisconnectAll, () =>
    mcpServiceManager.disconnectAll(),
  );
  ipcMain.handle(IpcChannel.Mcp_RestartAll, () =>
    mcpServiceManager.restartAll(),
  );
  ipcMain.handle(IpcChannel.Mcp_Connect, (_evt, serverName: string) =>
    mcpServiceManager.connect(serverName),
  );
  ipcMain.handle(IpcChannel.Mcp_Disconnect, (_evt, serverName: string) =>
    mcpServiceManager.disconnect(serverName),
  );
  ipcMain.handle(IpcChannel.Mcp_Restart, (_evt, serverName: string) =>
    mcpServiceManager.restart(serverName),
  );
  ipcMain.handle(IpcChannel.Mcp_ListPrompts, (_evt, serverName: string) =>
    mcpServiceManager.listPrompts(serverName),
  );
  ipcMain.handle(
    IpcChannel.Mcp_GetPrompt,
    (_evt, serverName: string, name: string, args: Record<string, any>) =>
      mcpServiceManager.getPrompt(serverName, name, args),
  );
  ipcMain.handle(IpcChannel.Mcp_ListResources, (_evt, serverName: string) =>
    mcpServiceManager.listResources(serverName),
  );
  ipcMain.handle(
    IpcChannel.Mcp_ReadResource,
    (_evt, serverName: string, uri: string) =>
      mcpServiceManager.readResource(serverName, uri),
  );
  ipcMain.handle(IpcChannel.Mcp_ListTools, (_evt, serverName: string) =>
    mcpServiceManager.listTools(serverName),
  );
  ipcMain.handle(
    IpcChannel.Mcp_CallTool,
    (
      _evt,
      serverName: string,
      name: string,
      args: Record<string, any>,
      callId?: string,
    ) => mcpServiceManager.callTool(serverName, name, args, callId),
  );
  ipcMain.handle(
    IpcChannel.Mcp_AbortTool,
    (_evt, serverName: string, callId: string) =>
      mcpServiceManager.abortTool(serverName, callId),
  );
}

// eslint-disable-next-line import/prefer-default-export
export { registerIpc };
