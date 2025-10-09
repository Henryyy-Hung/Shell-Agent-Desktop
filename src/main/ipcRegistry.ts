import { BrowserWindow, App } from 'electron';
import { registerMcpIpc } from '@main/ipcRegistry/mcpRegistry';
import { registerWindowIpc } from '@main/ipcRegistry/windowRegistry';

function registerIpc(app: App, mainWindow: BrowserWindow | null) {
  registerMcpIpc();
  registerWindowIpc(app, mainWindow);
}

// eslint-disable-next-line import/prefer-default-export
export { registerIpc };
