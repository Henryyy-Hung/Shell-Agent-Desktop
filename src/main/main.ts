/* eslint global-require: off, no-console: off, promise/always-return: off */
import { app, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { windowMgr } from '@main/managers/WindowMgr';
import { registerIpc } from '@main/ipcRegistry';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug').default();
}

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(async () => {
    await windowMgr.createMainWindow();
    mainWindow = windowMgr.getMainWindow();
    registerIpc(app, mainWindow);
    // eslint-disable-next-line no-new
    new AppUpdater();
    app.on('activate', () => {
      // On macOS, it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) {
        windowMgr.createMainWindow();
        mainWindow = windowMgr.getMainWindow();
      }
    });
  })
  .catch(console.log);
