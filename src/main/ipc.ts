import { BrowserWindow, ipcMain, App } from 'electron';
import { IpcChannel } from '@shared/ipcChannel';

function registerIpc(app: App, mainWindow: BrowserWindow | null) {
  ipcMain.handle(
    IpcChannel.TEST,
    (_, input: string) => `return value for ${input}`,
  );
  ipcMain.handle(IpcChannel.ToggleAlwaysOnTop, (): boolean | null => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      const isOnTop = mainWindow.isAlwaysOnTop();
      mainWindow.setAlwaysOnTop(!isOnTop);
      return !isOnTop;
    }
    return null;
  });
  ipcMain.handle(IpcChannel.MinimizeWindow, () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.minimize();
    }
  });
  ipcMain.handle(IpcChannel.CloseWindow, () => {
    app.quit();
  });
}

export { registerIpc };
