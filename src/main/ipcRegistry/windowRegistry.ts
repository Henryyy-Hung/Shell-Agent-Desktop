import { BrowserWindow, ipcMain, App } from 'electron'
import { IpcChannel } from '@shared/ipcChannel'

function registerWindowIpc(app: App, mainWindow: BrowserWindow | null) {
  ipcMain.handle(IpcChannel.Window_ToggleAlwaysOnTop, (): boolean | null => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      const isOnTop = mainWindow.isAlwaysOnTop()
      mainWindow.setAlwaysOnTop(!isOnTop)
      return !isOnTop
    }
    return null
  })
  ipcMain.handle(IpcChannel.Window_Minimize, () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.minimize()
    }
  })
  ipcMain.handle(IpcChannel.Window_Close, () => {
    app.quit()
  })
}

// eslint-disable-next-line import/prefer-default-export
export { registerWindowIpc }
